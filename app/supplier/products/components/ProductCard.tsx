'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  status: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-cover bg-center bg-top rounded-t-xl" style={{backgroundImage: `url(${product.image})`}}></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-more-2-line"></i>
              </div>
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border py-1 z-10">
                <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Edit
                </button>
                <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Duplicate
                </button>
                <button className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600 text-sm">{product.category}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
            {product.status}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
            <p className="text-sm text-gray-500">per {product.unit}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Stock: {product.stock} {product.unit}</p>
            <p className="text-xs text-gray-500">Available</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
            Edit Product
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-eye-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}