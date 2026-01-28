import { useEffect, useState } from 'react';
import { ShoppingCart, DollarSign, AlertTriangle, Layers } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts, updateProduct, deleteProduct } from '../store/productSlice';
import StatsCard from '../components/StatsCard';
import ProductTable from '../components/ProductTable';
import EditProductModal from '../components/EditProductModal';
import { Product } from '../types/product';

export default function AdminInventory() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const activeProducts = products.filter(p => !p.disabled);

  const stats = {
    totalProducts: activeProducts.length,
    totalValue: activeProducts.reduce((sum, p) => sum + p.value, 0),
    outOfStock: activeProducts.filter(p => p.quantity === 0).length,
    categories: new Set(activeProducts.map(p => p.category)).size,
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = async (updates: Partial<Product>) => {
    if (editingProduct) {
      await dispatch(updateProduct({ _id: editingProduct._id, updates }));
      setEditingProduct(null);
      dispatch(fetchProducts());
    }
  };

  const handleToggleEnabled = async (product: Product) => {
    await dispatch(
      updateProduct({
        _id: product._id,
        updates: { enabled: !product.enabled }
      })
    );
  };


  const handleDelete = async (_id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await dispatch(deleteProduct(_id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center w-screen">
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

        <ProductTable
          products={activeProducts}
          isAdmin={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleEnabled={handleToggleEnabled}
        />

        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
