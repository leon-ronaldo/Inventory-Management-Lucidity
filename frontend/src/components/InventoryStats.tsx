import type { ReactNode } from "react";
import {
    ShoppingCart,
    DollarSign,
    PackageX,
    Layers
} from "lucide-react";

import { useSelector } from "react-redux";
import { selectInventoryStats } from "../store/selectors";


interface Props {
    title: string;
    value: string | number;
    icon: ReactNode;
}


export default function InventoryStats() {

    const stats = useSelector(selectInventoryStats);

    return (
        <div className="w-full">

            <h2 className="text-white text-2xl font-semibold mb-4">
                Inventory stats
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <InventoryStatCard
                    title="Total product"
                    value={stats.totalProducts}
                    icon={<ShoppingCart size={18} />}
                />

                <InventoryStatCard
                    title="Total store value"
                    value={`₹ ${stats.totalStoreValue.toLocaleString()}`}
                    icon={<DollarSign size={18} />}
                />

                <InventoryStatCard
                    title="Out of stocks"
                    value={stats.outOfStockCount}
                    icon={<PackageX size={18} />}
                />

                <InventoryStatCard
                    title="No of Category"
                    value={stats.categoryCount}
                    icon={<Layers size={18} />}
                />

            </div>

        </div>
    );
}

function InventoryStatCard({ title, value, icon }: Props) {
    return (
        <div className="flex items-center justify-between bg-[#1f2d1f] rounded-xl p-6 w-full min-h-[110px]">

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                    {icon}
                    <span>{title}</span>
                </div>

                <p className="text-white text-3xl font-bold">
                    {value}
                </p>
            </div>

        </div>
    );
}