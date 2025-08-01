
'use client';

export default function TrustedSuppliers() {
  const suppliers = [
    {
      name: "Fresh Farm Co.",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      products: "Vegetables, Fruits",
      verified: true,
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20farmer%20in%20modern%20agricultural%20setting%20with%20fresh%20vegetables%20and%20fruits%2C%20clean%20organized%20farm%20environment%2C%20smiling%20farmer%20holding%20basket%20of%20produce%2C%20bright%20natural%20lighting%2C%20professional%20commercial%20photography&width=300&height=200&seq=supplier-1&orientation=landscape"
    },
    {
      name: "Spice Masters",
      location: "Delhi, NCR",
      rating: 4.9,
      products: "Spices, Herbs",
      verified: true,
      image: "https://readdy.ai/api/search-image?query=Indian%20spice%20merchant%20with%20colorful%20array%20of%20spices%20in%20traditional%20market%20setting%2C%20organized%20spice%20display%2C%20warm%20lighting%2C%20professional%20commercial%20photography%2C%20authentic%20indian%20spice%20market%20atmosphere&width=300&height=200&seq=supplier-2&orientation=landscape"
    },
    {
      name: "Grain Valley",
      location: "Pune, Maharashtra",
      rating: 4.7,
      products: "Rice, Wheat, Pulses",
      verified: true,
      image: "https://readdy.ai/api/search-image?query=Modern%20grain%20storage%20facility%20with%20organized%20sacks%20of%20rice%20wheat%20and%20pulses%2C%20clean%20warehouse%20environment%2C%20professional%20supplier%20setting%2C%20bright%20industrial%20lighting%2C%20high%20quality%20commercial%20photography&width=300&height=200&seq=supplier-3&orientation=landscape"
    },
    {
      name: "Oil Express",
      location: "Bangalore, Karnataka",
      rating: 4.6,
      products: "Cooking Oil, Ghee",
      verified: true,
      image: "https://readdy.ai/api/search-image?query=Modern%20cooking%20oil%20distribution%20center%20with%20organized%20bottles%20and%20containers%2C%20clean%20industrial%20environment%2C%20professional%20supplier%20facility%2C%20bright%20lighting%2C%20commercial%20photography%20style&width=300&height=200&seq=supplier-4&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Suppliers</h2>
          <p className="text-xl text-gray-600">
            Work with verified suppliers who have earned the trust of our vendor community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suppliers.map((supplier, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${supplier.image})`}}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{supplier.name}</h3>
                  {supplier.verified && (
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-verified-badge-fill text-green-500 text-lg"></i>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">{supplier.location}</p>
                <p className="text-gray-500 text-sm mb-3">{supplier.products}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-400 text-sm"></i>
                    <span className="text-sm font-semibold ml-1">{supplier.rating}</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
