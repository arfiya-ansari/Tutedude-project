'use client';

import { useEffect, useState } from 'react';
import supabase from '@/lib/supabaseClient';

interface RecentOrdersProps {
  supplierId: string;
}

export default function RecentOrders({ supplierId }: RecentOrdersProps) {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          id,
          quantity,
          total_price,
          status,
          customer_name,
          ordered_at,
          products (
            name
          )
        `)
        .eq('supplier_id', supplierId)
        .order('ordered_at', { ascending: false })
        .limit(5);

      if (error) {
        console.error('Error fetching orders:', error);
      } else {
        setOrders(data || []);
      }

      setLoading(false);
    };

    fetchOrders();
  }, [supplierId]);

  if (loading) return <div className="p-4">Loading orders...</div>;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
      </div>

      <div className="space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">{order.id}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{order.customer_name}</p>
              <p className="text-xs text-gray-500">
                {order.products?.name} — {order.quantity}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">₹{order.total_price}</p>
              <p className="text-xs text-gray-500">
                {new Date(order.ordered_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
