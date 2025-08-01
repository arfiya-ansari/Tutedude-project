
'use client';

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

interface ContactModalProps {
  supplier: Supplier;
  onClose: () => void;
}

export default function ContactModal({ supplier, onClose }: ContactModalProps) {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${supplier.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${supplier.phone}`, '_self');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Contact {supplier.name}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <i className="ri-close-line text-gray-500"></i>
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <i className="ri-map-pin-line text-gray-500 text-sm"></i>
            <span className="text-gray-600 text-sm ml-2">{supplier.location}</span>
          </div>
          <div className="flex items-center">
            <i className="ri-star-fill text-yellow-400 text-sm"></i>
            <span className="text-sm font-semibold ml-1">{supplier.rating}</span>
            {supplier.verified && (
              <>
                <i className="ri-verified-badge-fill text-green-500 text-sm ml-2"></i>
                <span className="text-green-600 text-sm ml-1">Verified</span>
              </>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <button 
            onClick={handleCall}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer"
          >
            <i className="ri-phone-line text-lg mr-2"></i>
            Call {supplier.phone}
          </button>
          
          <button 
            onClick={handleWhatsApp}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg mr-2"></i>
            WhatsApp
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Specializes in:</p>
          <div className="flex flex-wrap gap-1">
            {supplier.products.map((product, index) => (
              <span key={index} className="bg-white text-gray-600 px-2 py-1 rounded-full text-xs border">
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
