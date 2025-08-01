
'use client';

import { useState } from 'react';
import PriceChart from './components/PriceChart';
import PriceAlert from './components/PriceAlert';
import TrendingProducts from './components/TrendingProducts';

export default function PriceTrackingPage() {
  const [selectedProduct, setSelectedProduct] = useState('onions');

  const products = [
    { id: 'onions', name: 'Onions', currentPrice: 25, change: -5 },
    { id: 'tomatoes', name: 'Tomatoes', currentPrice: 35, change: 3 },
    { id: 'potatoes', name: 'Potatoes', currentPrice: 20, change: -2 },
    { id: 'oil', name: 'Cooking Oil', currentPrice: 150, change: -8 },
    { id: 'rice', name: 'Basmati Rice', currentPrice: 80, change: 0 },
    { id: 'wheat', name: 'Wheat', currentPrice: 30, change: 5 }
  ];

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Price Tracking</h1>
          <p className="text-gray-600">Monitor price trends and get alerts for your favorite products</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Price History</h2>
                <select 
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm pr-8"
                >
                  {products.map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {selectedProductData && (
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">₹{selectedProductData.currentPrice}/kg</h3>
                      <p className="text-gray-600">{selectedProductData.name}</p>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center ${selectedProductData.change > 0 ? 'text-red-500' : selectedProductData.change < 0 ? 'text-green-500' : 'text-gray-500'}`}>
                        {selectedProductData.change > 0 ? (
                          <i className="ri-arrow-up-line text-sm mr-1"></i>
                        ) : selectedProductData.change < 0 ? (
                          <i className="ri-arrow-down-line text-sm mr-1"></i>
                        ) : (
                          <i className="ri-subtract-line text-sm mr-1"></i>
                        )}
                        <span className="font-semibold">
                          {selectedProductData.change > 0 ? '+' : ''}{selectedProductData.change}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">vs last week</p>
                    </div>
                  </div>
                </div>
              )}
              
              <PriceChart productId={selectedProduct} />
            </div>
            
            <TrendingProducts />
          </div>
          
          <div>
            <PriceAlert />
          </div>
        </div>
      </div>
    </div>
  );
}
