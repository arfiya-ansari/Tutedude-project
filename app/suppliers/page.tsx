
'use client';

import { useState } from 'react';
import SupplierCard from './components/SupplierCard';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';

export default function SuppliersPage() {
  const [suppliers] = useState([
    {
      id: 1,
      name: "Fresh Farm Co.",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      products: ["Vegetables", "Fruits"],
      verified: true,
      phone: "+91 98765 43210",
      whatsapp: "+91 98765 43210",
      description: "Premium quality fresh vegetables and fruits directly from farm to your business",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20farmer%20in%20modern%20agricultural%20setting%20with%20fresh%20vegetables%20and%20fruits%2C%20clean%20organized%20farm%20environment%2C%20smiling%20farmer%20holding%20basket%20of%20produce%2C%20bright%20natural%20lighting%2C%20professional%20commercial%20photography&width=400&height=300&seq=supplier-detail-1&orientation=landscape"
    },
    {
      id: 2,
      name: "Spice Masters",
      location: "Delhi, NCR",
      rating: 4.9,
      products: ["Spices", "Herbs", "Masalas"],
      verified: true,
      phone: "+91 98765 43211",
      whatsapp: "+91 98765 43211",
      description: "Authentic Indian spices and herbs with guaranteed quality and freshness",
      image: "https://readdy.ai/api/search-image?query=Indian%20spice%20merchant%20with%20colorful%20array%20of%20spices%20in%20traditional%20market%20setting%2C%20organized%20spice%20display%2C%20warm%20lighting%2C%20professional%20commercial%20photography%2C%20authentic%20indian%20spice%20market%20atmosphere&width=400&height=300&seq=supplier-detail-2&orientation=landscape"
    },
    {
      id: 3,
      name: "Grain Valley",
      location: "Pune, Maharashtra",
      rating: 4.7,
      products: ["Rice", "Wheat", "Pulses"],
      verified: true,
      phone: "+91 98765 43212",
      whatsapp: "+91 98765 43212",
      description: "High-quality grains and pulses with competitive pricing for bulk orders",
      image: "https://readdy.ai/api/search-image?query=Modern%20grain%20storage%20facility%20with%20organized%20sacks%20of%20rice%20wheat%20and%20pulses%2C%20clean%20warehouse%20environment%2C%20professional%20supplier%20setting%2C%20bright%20industrial%20lighting%2C%20high%20quality%20commercial%20photography&width=400&height=300&seq=supplier-detail-3&orientation=landscape"
    },
    {
      id: 4,
      name: "Oil Express",
      location: "Bangalore, Karnataka",
      rating: 4.6,
      products: ["Cooking Oil", "Ghee"],
      verified: true,
      phone: "+91 98765 43213",
      whatsapp: "+91 98765 43213",
      description: "Premium cooking oils and ghee with fast delivery across South India",
      image: "https://readdy.ai/api/search-image?query=Modern%20cooking%20oil%20distribution%20center%20with%20organized%20bottles%20and%20containers%2C%20clean%20industrial%20environment%2C%20professional%20supplier%20facility%2C%20bright%20lighting%2C%20commercial%20photography%20style&width=400&height=300&seq=supplier-detail-4&orientation=landscape"
    },
    {
      id: 5,
      name: "Dairy Fresh",
      location: "Chennai, Tamil Nadu",
      rating: 4.5,
      products: ["Milk", "Paneer", "Butter"],
      verified: true,
      phone: "+91 98765 43214",
      whatsapp: "+91 98765 43214",
      description: "Fresh dairy products with daily delivery and competitive wholesale rates",
      image: "https://readdy.ai/api/search-image?query=Modern%20dairy%20facility%20with%20organized%20milk%20products%20and%20fresh%20dairy%20items%2C%20clean%20commercial%20environment%2C%20professional%20supplier%20setting%2C%20bright%20lighting%2C%20high%20quality%20commercial%20photography&width=400&height=300&seq=supplier-detail-5&orientation=landscape"
    },
    {
      id: 6,
      name: "Meat Market",
      location: "Hyderabad, Telangana",
      rating: 4.4,
      products: ["Chicken", "Mutton", "Fish"],
      verified: true,
      phone: "+91 98765 43215",
      whatsapp: "+91 98765 43215",
      description: "Fresh meat and seafood with proper cold chain maintenance",
      image: "https://readdy.ai/api/search-image?query=Professional%20meat%20market%20with%20organized%20display%20of%20fresh%20chicken%20and%20meat%20products%2C%20clean%20commercial%20environment%2C%20professional%20supplier%20setting%2C%20bright%20lighting%2C%20high%20quality%20commercial%20photography&width=400&height=300&seq=supplier-detail-6&orientation=landscape"
    }
  ]);

  const [filteredSuppliers, setFilteredSuppliers] = useState(suppliers);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredSuppliers(suppliers);
      return;
    }
    
    const filtered = suppliers.filter(supplier => 
      supplier.name.toLowerCase().includes(query.toLowerCase()) ||
      supplier.location.toLowerCase().includes(query.toLowerCase()) ||
      supplier.products.some(product => product.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredSuppliers(filtered);
  };

  const handleFilter = (location: string, category: string) => {
    let filtered = suppliers;
    
    if (location) {
      filtered = filtered.filter(supplier => 
        supplier.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (category) {
      filtered = filtered.filter(supplier => 
        supplier.products.some(product => 
          product.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
    
    setFilteredSuppliers(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Suppliers</h1>
          <SearchBar onSearch={handleSearch} />
          <FilterBar onFilter={handleFilter} />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredSuppliers.length} supplier{filteredSuppliers.length !== 1 ? 's' : ''}
          </p>
          <div className="flex items-center space-x-4">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm pr-8">
              <option>Rating (High to Low)</option>
              <option>Rating (Low to High)</option>
              <option>Name (A to Z)</option>
              <option>Location</option>
            </select>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
        
        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-search-line text-gray-400 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No suppliers found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
