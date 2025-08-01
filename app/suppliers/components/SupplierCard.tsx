
'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

interface Supplier {
  id: number;
  name: string;
  location: string;
  rating: number;
  products: string[];
  verified: boolean;
  phone: string;
  whatsapp: string;
  description: string;
  image: string;
}

interface SupplierCardProps {
  supplier: Supplier;
}

export default function SupplierCard({ supplier }: SupplierCardProps) {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="h-48 bg-cover bg-center bg-top rounded-t-xl" style={{backgroundImage: `url(${supplier.image})`}}></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">{supplier.name}</h3>
            {supplier.verified && (
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-verified-badge-fill text-green-500 text-lg"></i>
              </div>
            )}
          </div>
          
          <div className="flex items-center mb-3">
            <i className="ri-map-pin-line text-gray-500 text-sm"></i>
            <span className="text-gray-600 text-sm ml-1">{supplier.location}</span>
          </div>
          
          <div className="flex items-center mb-3">
            <i className="ri-star-fill text-yellow-400 text-sm"></i>
            <span className="text-sm font-semibold ml-1">{supplier.rating}</span>
            <span className="text-gray-500 text-sm ml-2">(Reviews)</span>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-600 text-sm mb-2">{supplier.description}</p>
            <div className="flex flex-wrap gap-1">
              {supplier.products.map((product, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {product}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setShowContactModal(true)}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
            >
              <i className="ri-phone-line text-sm mr-2"></i>
              Contact
            </button>
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
              <i className="ri-eye-line text-sm mr-2"></i>
              View Products
            </button>
          </div>
        </div>
      </div>
      
      {showContactModal && (
        <ContactModal 
          supplier={supplier} 
          onClose={() => setShowContactModal(false)} 
        />
      )}
    </>
  );
}
