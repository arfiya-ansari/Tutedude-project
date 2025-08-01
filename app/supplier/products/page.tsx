'use client';

import { useState } from 'react';
import Link from 'next/link';
import DashboardHeader from '../dashboard/components/DashboardHeader';
import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';

export default function SupplierProductsPage() {
  const [supplierData] = useState({
    name: "Fresh Farm Co.",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    verified: true,
    joinDate: "January 2024"
  });

  const [products] = useState([
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 50,
      unit: "kg",
      stock: 150,
      status: "Active",
      image: "https://readdy.ai/api/search-image?query=Fresh%20red%20tomatoes%20in%20basket%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20quality%20vegetables%2C%20commercial%20food%20photography&width=300&height=200&seq=product-1&orientation=landscape",
      description: "Premium quality fresh tomatoes perfect for restaurants and hotels"
    },
    {
      id: 2,
      name: "Red Onions",
      category: "Vegetables",
      price: 60,
      unit: "kg",
      stock: 200,
      status: "Active",
      image: "https://readdy.ai/api/search-image?query=Fresh%20red%20onions%20in%20wooden%20basket%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20quality%20vegetables%2C%20commercial%20food%20photography&width=300&height=200&seq=product-2&orientation=landscape",
      description: "High quality red onions with excellent shelf life"
    },
    {
      id: 3,
      name: "Potatoes",
      category: "Vegetables",
      price: 50,
      unit: "kg",
      stock: 25,
      status: "Low Stock",
      image: "https://readdy.ai/api/search-image?query=Fresh%20potatoes%20in%20jute%20sack%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20quality%20vegetables%2C%20commercial%20food%20photography&width=300&height=200&seq=product-3&orientation=landscape",
      description: "Fresh potatoes suitable for all cooking purposes"
    },
    {
      id: 4,
      name: "Fresh Carrots",
      category: "Vegetables",
      price: 60,
      unit: "kg",
      stock: 0,
      status: "Out of Stock",
      image: "https://readdy.ai/api/search-image?query=Fresh%20orange%20carrots%20in%20wooden%20crate%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20quality%20vegetables%2C%20commercial%20food%20photography&width=300&height=200&seq=product-4&orientation=landscape",
      description: "Sweet and crunchy carrots rich in vitamins"
    },
    {
      id: 5,
      name: "Green Cabbage",
      category: "Vegetables",
      price: 40,
      unit: "kg",
      stock: 75,
      status: "Active",
      image: "https://readdy.ai/api/search-image?query=Fresh%20green%20cabbage%20heads%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20quality%20vegetables%2C%20commercial%20food%20photography&width=300&height=200&seq=product-5&orientation=landscape",
      description: "Fresh green cabbage perfect for salads and cooking"
    },
    {
      id: 6,
      name: "Bell Peppers",
      category: "Vegetables",
      price: 80,
      unit: "kg",
      stock: 100,
      status: "Active",
      image: "https://readdy.ai/api/search-image?query=Colorful%20bell%20peppers%20red%20yellow%20green%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high%20quality%20vegetables%2C%20commercial%20food%20photography&width=300&height=200&seq=product-6&orientation=landscape",
      description: "Colorful bell peppers in red, yellow, and green varieties"
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category: string, status: string) => {
    let filtered = products;
    
    if (category && category !== 'All Categories') {
      filtered = filtered.filter(product => product.category === category);
    }
    
    if (status && status !== 'All Status') {
      filtered = filtered.filter(product => product.status === status);
    }
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader supplier={supplierData} />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">My Products</h1>
            <p className="text-gray-600">Manage your product listings and inventory</p>
          </div>
          <Link href="/supplier/products/add" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center">
            <i className="ri-add-line mr-2"></i>
            Add Product
          </Link>
        </div>
        
        <ProductFilters onFilter={handleFilter} />
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
          <div className="flex items-center space-x-4">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm pr-8">
              <option>Name (A to Z)</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Stock (High to Low)</option>
            </select>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-package-line text-gray-400 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters or add your first product</p>
            <Link href="/supplier/products/add" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center">
              <i className="ri-add-line mr-2"></i>
              Add Product
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}