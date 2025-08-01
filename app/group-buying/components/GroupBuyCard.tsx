
'use client';

import { useState } from 'react';

interface GroupBuy {
  id: number;
  product: string;
  supplier: string;
  minQuantity: number;
  currentQuantity: number;
  pricePerKg: number;
  originalPrice: number;
  participants: number;
  timeLeft?: string;
  status?: string;
  image: string;
}

interface GroupBuyCardProps {
  groupBuy: GroupBuy;
}

export default function GroupBuyCard({ groupBuy }: GroupBuyCardProps) {
  const [isJoined, setIsJoined] = useState(false);
  const [quantity, setQuantity] = useState(10);

  const progress = (groupBuy.currentQuantity / groupBuy.minQuantity) * 100;
  const savings = groupBuy.originalPrice - groupBuy.pricePerKg;
  const savingsPercent = ((savings / groupBuy.originalPrice) * 100).toFixed(0);

  const handleJoin = () => {
    setIsJoined(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-cover bg-center bg-top rounded-t-xl" style={{backgroundImage: `url(${groupBuy.image})`}}></div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{groupBuy.product}</h3>
          {groupBuy.status && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              {groupBuy.status}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{groupBuy.supplier}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{groupBuy.currentQuantity}/{groupBuy.minQuantity} kg</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Group Price</p>
            <p className="text-lg font-bold text-green-600">₹{groupBuy.pricePerKg}/kg</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">You Save</p>
            <p className="text-lg font-bold text-orange-500">₹{savings} ({savingsPercent}%)</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <i className="ri-group-line text-blue-500 text-sm"></i>
            <span className="text-sm text-gray-600 ml-1">{groupBuy.participants} vendors</span>
          </div>
          {groupBuy.timeLeft && (
            <div className="flex items-center">
              <i className="ri-time-line text-orange-500 text-sm"></i>
              <span className="text-sm text-gray-600 ml-1">{groupBuy.timeLeft} left</span>
            </div>
          )}
        </div>
        
        {!groupBuy.status && (
          <div className="space-y-3">
            {!isJoined ? (
              <button 
                onClick={handleJoin}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Join Group Buy
              </button>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-600">Quantity (kg)</label>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      <i className="ri-subtract-line text-sm"></i>
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      <i className="ri-add-line text-sm"></i>
                    </button>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm">
                  ✓ Joined! Total: ₹{quantity * groupBuy.pricePerKg}
                </div>
              </div>
            )}
          </div>
        )}
        
        {groupBuy.status === 'Completed' && (
          <div className="bg-gray-100 text-gray-600 py-2 rounded-lg text-center text-sm">
            Group buy completed successfully
          </div>
        )}
      </div>
    </div>
  );
}
