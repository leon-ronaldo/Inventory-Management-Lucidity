import AdminInventory from './pages/AdminInventory';
import UserInventory from './pages/UserInventory';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Toaster } from 'react-hot-toast';


function App() {
  const isAdmin = useSelector(
    (state: RootState) => state.role.isAdmin
  );

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111827",
            color: "#fff",
            border: "1px solid #1f2937"
          }
        }}
      />

      {isAdmin ? <AdminInventory /> : <UserInventory />}
    </div>
  );
}

export default App;
