import { useEffect } from 'react';
import { ShoppingCart, DollarSign, AlertTriangle, Layers } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts } from '../store/productSlice';
import StatsCard from '../components/StatsCard';
import ProductTable from '../components/ProductTable';

export default function UserInventory() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const activeProducts = products.filter(p => p.enabled);

  const stats = {
    totalProducts: activeProducts.length,
    totalValue: activeProducts.reduce((sum, p) => sum + p.value, 0),
    outOfStock: activeProducts.filter(p => p.quantity === 0).length,
    categories: new Set(activeProducts.map(p => p.category)).size,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-color flex items-center justify-center w-screen">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-color text-white p-8 w-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Inventory stats</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={ShoppingCart}
            title="Total product"
            value={stats.totalProducts}
          />
          <StatsCard
            icon={DollarSign}
            title="Total store value"
            value={stats.totalValue.toLocaleString()}
          />
          <StatsCard
            icon={AlertTriangle}
            title="Out of stocks"
            value={stats.outOfStock}
          />
          <StatsCard
            icon={Layers}
            title="No of Category"
            value={stats.categories}
          />
        </div>

        <ProductTable products={activeProducts} isAdmin={false} />
      </div>
    </div>
  );
}
