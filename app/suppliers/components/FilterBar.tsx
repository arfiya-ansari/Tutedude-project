
'use client';

import { useState } from 'react';

interface FilterBarProps {
  onFilter: (location: string, category: string) => void;
}

export default function FilterBar({ onFilter }: FilterBarProps) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const locations = [
    'All Locations',
    'Mumbai, Maharashtra',
    'Delhi, NCR',
    'Pune, Maharashtra',
    'Bangalore, Karnataka',
    'Chennai, Tamil Nadu',
    'Hyderabad, Telangana'
  ];

  const categories = [
    'All Categories',
    'Vegetables',
    'Fruits',
    'Spices',
    'Grains',
    'Dairy',
    'Meat',
    'Oil'
  ];

  const handleLocationChange = (location: string) => {
    const filterLocation = location === 'All Locations' ? '' : location;
    setSelectedLocation(location);
    onFilter(filterLocation, selectedCategory === 'All Categories' ? '' : selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    const filterCategory = category === 'All Categories' ? '' : category;
    setSelectedCategory(category);
    onFilter(selectedLocation === 'All Locations' ? '' : selectedLocation, filterCategory);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <select 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8"
          value={selectedLocation}
          onChange={(e) => handleLocationChange(e.target.value)}
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1">
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
      
      <div className="flex items-end">
        <button 
          onClick={() => {
            setSelectedLocation('');
            setSelectedCategory('');
            onFilter('', '');
          }}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
