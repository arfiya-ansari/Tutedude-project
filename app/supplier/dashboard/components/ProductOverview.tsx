'use client';

import { useEffect, useState } from 'react';
import supabase from '@/lib/supabaseClient';

interface ProductOverviewProps {
  supplierId: string;
}

export default function ProductOverview({ supplierId }: ProductOverviewProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('supplier_id', supplierId)
        .order('created_at', { ascending: false });

      if (error) console.error('Error fetching products:', error);
      else setProducts(data || []);

      setLoading(false);
    };

    fetchProducts();
  }, [supplierId]);

  if (loading) return <div className="p-4">Loading products...</div>;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Product Overview</h2>
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">{product.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-xs text-gray-500">Stock: {product.stock} {product.unit}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">₹{product.price}/{product.unit}</p>
              <button className="text-xs text-orange-600 hover:text-orange-700 cursor-pointer">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
