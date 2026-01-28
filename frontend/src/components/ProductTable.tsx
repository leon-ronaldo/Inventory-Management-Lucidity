import { Eye, EyeOff, Pencil, Trash2 } from 'lucide-react';
import { Product } from '../types/product';

interface ProductTableProps {
  products: Product[];
  isAdmin: boolean;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  onToggleEnabled?: (product: Product) => void;
}

export default function ProductTable({ products, isAdmin, onEdit, onDelete, onToggleEnabled }: ProductTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-gray-800">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-900/50 border-b border-gray-800">
            <th className="px-6 py-4 text-left text-sm font-medium text-text-green">Name</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-text-green">Category</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-text-green">Price</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-text-green">Quantity</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-text-green">Value</th>
            {isAdmin && (
              <th className="px-6 py-4 text-left text-sm font-medium text-text-green">ACTION</th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {products.map((product) => (
            <tr
              key={product._id}
              className="bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
            >
              <td className="px-6 py-4 text-sm text-gray-300">{product.name}</td>
              <td className="px-6 py-4 text-sm text-gray-300">{product.category}</td>
              <td className="px-6 py-4 text-sm text-gray-300">${product.price}</td>
              <td className="px-6 py-4 text-sm text-gray-300">{product.quantity}</td>
              <td className="px-6 py-4 text-sm text-gray-300">${product.value}</td>
              {isAdmin && (
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-800 rounded transition-colors" onClick={() => onToggleEnabled?.(product)}>
                      {product.enabled ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                    </button>
                    <button
                      onClick={() => onEdit?.(product)}
                      className="p-1.5 hover:bg-gray-800 rounded transition-colors"
                    >
                      <Pencil className="w-4 h-4 text-green-400" />
                    </button>
                    <button
                      onClick={() => onDelete?.(product._id)}
                      className="p-1.5 hover:bg-gray-800 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
