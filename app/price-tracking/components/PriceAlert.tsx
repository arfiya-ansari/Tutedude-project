
'use client';

import { useState } from 'react';

export default function PriceAlert() {
  const [alerts, setAlerts] = useState([
    { id: 1, product: 'Onions', targetPrice: 22, currentPrice: 25, active: true },
    { id: 2, product: 'Cooking Oil', targetPrice: 140, currentPrice: 150, active: true },
    { id: 3, product: 'Tomatoes', targetPrice: 30, currentPrice: 35, active: false }
  ]);

  const [newAlert, setNewAlert] = useState({
    product: '',
    targetPrice: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleAddAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAlert.product && newAlert.targetPrice) {
      const alert = {
        id: alerts.length + 1,
        product: newAlert.product,
        targetPrice: parseFloat(newAlert.targetPrice),
        currentPrice: 0,
        active: true
      };
      setAlerts([...alerts, alert]);
      setNewAlert({ product: '', targetPrice: '' });
      setShowForm(false);
    }
  };

  const toggleAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, active: !alert.active } : alert
    ));
  };

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Price Alerts</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
        >
          Add Alert
        </button>
      </div>
      
      {showForm && (
        <form onSubmit={handleAddAlert} className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
              <input
                type="text"
                value={newAlert.product}
                onChange={(e) => setNewAlert({...newAlert, product: e.target.value})}
                placeholder="e.g., Onions"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Target Price (₹/kg)</label>
              <input
                type="number"
                value={newAlert.targetPrice}
                onChange={(e) => setNewAlert({...newAlert, targetPrice: e.target.value})}
                placeholder="22"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Add Alert
              </button>
            </div>
          </div>
        </form>
      )}
      
      <div className="space-y-4">
        {alerts.map(alert => (
          <div key={alert.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{alert.product}</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleAlert(alert.id)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                    alert.active ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <i className={`ri-notification-${alert.active ? 'fill' : 'line'} text-sm`}></i>
                </button>
                <button
                  onClick={() => removeAlert(alert.id)}
                  className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 cursor-pointer"
                >
                  <i className="ri-delete-bin-line text-sm"></i>
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Target: ₹{alert.targetPrice}/kg</p>
              <p>Current: ₹{alert.currentPrice}/kg</p>
            </div>
            <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${
              alert.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
            }`}>
              {alert.active ? 'Active' : 'Inactive'}
            </div>
          </div>
        ))}
        
        {alerts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <i className="ri-notification-line text-3xl mb-2"></i>
            <p>No price alerts set</p>
            <p className="text-sm">Add alerts to get notified when prices drop</p>
          </div>
        )}
      </div>
    </div>
  );
}
