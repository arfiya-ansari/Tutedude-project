'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '@/lib/supabaseClient';
import DashboardHeader from './components/DashboardHeader';
import StatsCards from './components/StatsCards';
import RecentOrders from './components/RecentOrders';
import ProductOverview from './components/ProductOverview';

export default function SupplierDashboard() {
  const [supplierData, setSupplierData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error('User not authenticated');
        setLoading(false);
        return;
      }

      // Fetch supplier data
      const { data: supplier, error: supplierError } = await supabase
        .from('suppliers')
        .select('*')
        .eq('email', user.email)
        .single();

      if (supplierError || !supplier) {
        console.error('Error fetching supplier data:', supplierError);
        setLoading(false);
        return;
      }

      setSupplierData(supplier);

      // Fetch stats
      const [productsRes, ordersRes, revenueRes] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact' }).eq('supplier_id', supplier.id),
        supabase.from('orders').select('id', { count: 'exact' }).eq('supplier_id', supplier.id).eq('status', 'pending'),
        supabase
          .from('orders')
          .select('total_price')
          .eq('supplier_id', supplier.id)
      ]);

      const totalProducts = productsRes.count || 0;
      const activeOrders = ordersRes.count || 0;
      const revenueTotal = revenueRes.data?.reduce((acc: number, curr: any) => acc + Number(curr.total_price), 0) || 0;

      setStats([
        {
          label: "Total Products",
          value: totalProducts.toString(),
          change: "+2 this month", // You can compute this if needed
          icon: "ri-package-line",
          color: "bg-blue-500",
        },
        {
          label: "Active Orders",
          value: activeOrders.toString(),
          change: "+3 today",
          icon: "ri-shopping-bag-line",
          color: "bg-green-500",
        },
        {
          label: "Total Revenue",
          value: `₹${revenueTotal.toLocaleString()}`,
          change: "+15% this month",
          icon: "ri-money-rupee-circle-line",
          color: "bg-purple-500",
        },
        {
          label: "Customer Rating",
          value: "4.8",
          change: "Based on 156 reviews",
          icon: "ri-star-line",
          color: "bg-yellow-500",
        },
      ]);

      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading Dashboard...</div>;
  }

  if (!supplierData) {
    return <div className="p-8 text-center text-red-500">Supplier data not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader supplier={supplierData} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
        </div>

        <StatsCards stats={stats} />

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <RecentOrders supplierId={supplierData.id} />
          <ProductOverview supplierId={supplierData.id} />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/add-products" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-add-line text-white"></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Add Product</h3>
                <p className="text-sm text-gray-600">List new items</p>
              </div>
            </Link>

            <Link href="/supplier/orders" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-shopping-bag-line text-white"></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">View Orders</h3>
                <p className="text-sm text-gray-600">Manage orders</p>
              </div>
            </Link>

            <Link href="/supplier/analytics" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-line-chart-line text-white"></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-600">View insights</p>
              </div>
            </Link>

            <Link href="/supplier/profile" className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-user-settings-line text-white"></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Profile</h3>
                <p className="text-sm text-gray-600">Edit details</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
