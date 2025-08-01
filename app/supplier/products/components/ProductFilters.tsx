'use client';

import { useState } from 'react';

interface ProductFiltersProps {
  onFilter: (category: string, status: string) => void;
}

export default function ProductFilters({ onFilter }: ProductFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const categories = [
    'All Categories',
    'Vegetables',
    'Fruits',
    'Grains',
    'Spices',
    'Dairy',
    'Meat'
  ];

  const statuses = [
    'All Status',
    'Active',
    'Low Stock',
    'Out of Stock',
    'Inactive'
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilter(category, selectedStatus);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    onFilter(selectedCategory, status);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8"
            value={selectedStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-end">
          <button 
            onClick={() => {
              setSelectedCategory('All Categories');
              setSelectedStatus('All Status');
              onFilter('All Categories', 'All Status');
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}