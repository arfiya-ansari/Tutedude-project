
'use client';

import { useState } from 'react';
import GroupBuyCard from './components/GroupBuyCard';
import CreateGroupBuy from './components/CreateGroupBuy';

export default function GroupBuyingPage() {
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const activeGroupBuys = [
    {
      id: 1,
      product: "Fresh Onions",
      supplier: "Fresh Farm Co.",
      minQuantity: 100,
      currentQuantity: 75,
      pricePerKg: 22,
      originalPrice: 25,
      participants: 8,
      timeLeft: "2 days",
      image: "https://readdy.ai/api/search-image?query=Fresh%20red%20onions%20in%20organized%20market%20display%2C%20clean%20produce%20arrangement%2C%20professional%20commercial%20photography%2C%20bright%20natural%20lighting%2C%20high%20quality%20vegetables%20in%20market%20stall%20setting&width=300&height=200&seq=group-buy-1&orientation=landscape"
    },
    {
      id: 2,
      product: "Basmati Rice",
      supplier: "Grain Valley",
      minQuantity: 50,
      currentQuantity: 45,
      pricePerKg: 75,
      originalPrice: 80,
      participants: 12,
      timeLeft: "5 days",
      image: "https://readdy.ai/api/search-image?query=Basmati%20rice%20in%20professional%20market%20display%2C%20organized%20grain%20presentation%2C%20clean%20wholesale%20environment%2C%20bright%20lighting%2C%20high%20quality%20rice%20products%20in%20market%20setting&width=300&height=200&seq=group-buy-2&orientation=landscape"
    },
    {
      id: 3,
      product: "Cooking Oil",
      supplier: "Oil Express",
      minQuantity: 200,
      currentQuantity: 180,
      pricePerKg: 140,
      originalPrice: 150,
      participants: 15,
      timeLeft: "1 day",
      image: "https://readdy.ai/api/search-image?query=Cooking%20oil%20bottles%20in%20organized%20display%2C%20professional%20commercial%20photography%2C%20clean%20product%20arrangement%2C%20bright%20lighting%2C%20wholesale%20market%20setting%20for%20cooking%20oil%20products&width=300&height=200&seq=group-buy-3&orientation=landscape"
    }
  ];

  const completedGroupBuys = [
    {
      id: 4,
      product: "Premium Tomatoes",
      supplier: "Veggie Direct",
      minQuantity: 80,
      currentQuantity: 120,
      pricePerKg: 30,
      originalPrice: 35,
      participants: 18,
      status: "Completed",
      image: "https://readdy.ai/api/search-image?query=Fresh%20ripe%20tomatoes%20in%20market%20display%2C%20organized%20produce%20arrangement%2C%20professional%20commercial%20photography%2C%20bright%20natural%20lighting%2C%20high%20quality%20vegetables%20in%20wholesale%20market%20setting&width=300&height=200&seq=group-buy-4&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Group Buying</h1>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Create Group Buy
            </button>
          </div>
          
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg max-w-md">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'active' 
                  ? 'bg-white text-orange-500 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Active ({activeGroupBuys.length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'completed' 
                  ? 'bg-white text-orange-500 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Completed ({completedGroupBuys.length})
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'active' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGroupBuys.map((groupBuy) => (
              <GroupBuyCard key={groupBuy.id} groupBuy={groupBuy} />
            ))}
          </div>
        )}
        
        {activeTab === 'completed' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedGroupBuys.map((groupBuy) => (
              <GroupBuyCard key={groupBuy.id} groupBuy={groupBuy} />
            ))}
          </div>
        )}
      </div>
      
      {showCreateModal && (
        <CreateGroupBuy onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}
