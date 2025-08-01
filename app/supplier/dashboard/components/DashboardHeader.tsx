'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Supplier {
  id: string;
  user_id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  business_type: string;
  location: string;
  created_at: string;
}

interface DashboardHeaderProps {
  supplier: Supplier;
}

export default function DashboardHeader({ supplier }: DashboardHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold text-orange-600" style={{ fontFamily: "Pacifico, serif" }}>
              logo
            </Link>
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>
            <div className="hidden md:block">
              <span className="text-sm text-gray-600">Supplier Portal</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-notification-2-line text-lg"></i>
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{supplier.contact_name?.charAt(0) || "S"}</span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900">{supplier.contact_name}</p>
                  <p className="text-xs text-gray-600">{supplier.location}</p>
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-down-s-line text-gray-500"></i>
                </div>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                  <Link href="/supplier/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile Settings
                  </Link>
                  <Link href="/supplier/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Products
                  </Link>
                  <Link href="/supplier/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Orders
                  </Link>
                  <div className="border-t my-1"></div>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
