import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setAdmin, setUser } from "../store/slices/roleSlice";
import toast from "react-hot-toast";

export default function Navbar() {

    const dispatch = useDispatch();
    const isAdmin = useSelector(
        (state: RootState) => state.role.isAdmin
    );

    const toggleRole = () => {
        if (isAdmin) {
            dispatch(setUser());
            toast.success("Switched to User mode");
        } else {
            dispatch(setAdmin());
            toast.success("Switched to Admin mode");
        }
    };

    const handleLogout = () => {
        console.log("Logged out");
    };

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl px-5 py-3 shadow-lg">

            <div className="flex items-center gap-3">

                <span className={`text-sm font-medium transition ${isAdmin ? "text-text-green" : "text-gray-500"
                    }`}>
                    admin
                </span>

                <button
                    onClick={toggleRole}
                    className="relative w-12 h-6 bg-text-green/20 rounded-full transition"
                >

                    <span
                        className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-text-green transition-transform duration-300 ${isAdmin ? "translate-x-0" : "translate-x-6"
                            }`}
                    />

                </button>

                <span className={`text-sm font-medium transition ${!isAdmin ? "text-text-green" : "text-gray-500"
                    }`}>
                    user
                </span>

            </div>

            <div className="h-6 w-px bg-gray-700" />

            <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-500 transition"
            >
                <LogOut size={20} />
            </button>

        </div>
    );
}
