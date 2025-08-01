
'use client';

export default function PopularProducts() {
  const products = [
    {
      name: "Fresh Onions",
      price: "₹25/kg",
      supplier: "Fresh Farm Co.",
      groupBuying: 8,
      priceChange: -5,
      image: "https://readdy.ai/api/search-image?query=Fresh%20red%20onions%20in%20organized%20market%20display%2C%20clean%20produce%20arrangement%2C%20professional%20commercial%20photography%2C%20bright%20natural%20lighting%2C%20high%20quality%20vegetables%20in%20market%20stall%20setting&width=300&height=200&seq=product-1&orientation=landscape"
    },
    {
      name: "Premium Tomatoes",
      price: "₹35/kg",
      supplier: "Veggie Direct",
      groupBuying: 12,
      priceChange: 3,
      image: "https://readdy.ai/api/search-image?query=Fresh%20ripe%20tomatoes%20in%20market%20display%2C%20organized%20produce%20arrangement%2C%20professional%20commercial%20photography%2C%20bright%20natural%20lighting%2C%20high%20quality%20vegetables%20in%20wholesale%20market%20setting&width=300&height=200&seq=product-2&orientation=landscape"
    },
    {
      name: "Cooking Oil",
      price: "₹150/L",
      supplier: "Oil Express",
      groupBuying: 6,
      priceChange: -8,
      image: "https://readdy.ai/api/search-image?query=Cooking%20oil%20bottles%20in%20organized%20display%2C%20professional%20commercial%20photography%2C%20clean%20product%20arrangement%2C%20bright%20lighting%2C%20wholesale%20market%20setting%20for%20cooking%20oil%20products&width=300&height=200&seq=product-3&orientation=landscape"
    },
    {
      name: "Basmati Rice",
      price: "₹80/kg",
      supplier: "Grain Valley",
      groupBuying: 15,
      priceChange: 0,
      image: "https://readdy.ai/api/search-image?query=Basmati%20rice%20in%20professional%20market%20display%2C%20organized%20grain%20presentation%2C%20clean%20wholesale%20environment%2C%20bright%20lighting%2C%20high%20quality%20rice%20products%20in%20market%20setting&width=300&height=200&seq=product-4&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Products</h2>
          <p className="text-xl text-gray-600">
            Most requested items by street food vendors this week
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${product.image})`}}></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.supplier}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-orange-500">{product.price}</span>
                  <div className="flex items-center">
                    {product.priceChange > 0 ? (
                      <i className="ri-arrow-up-line text-red-500 text-sm"></i>
                    ) : product.priceChange < 0 ? (
                      <i className="ri-arrow-down-line text-green-500 text-sm"></i>
                    ) : (
                      <i className="ri-subtract-line text-gray-400 text-sm"></i>
                    )}
                    <span className={`text-sm ml-1 ${product.priceChange > 0 ? 'text-red-500' : product.priceChange < 0 ? 'text-green-500' : 'text-gray-400'}`}>
                      {product.priceChange > 0 ? '+' : ''}{product.priceChange}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <i className="ri-group-line text-blue-500 text-sm"></i>
                    <span className="text-sm text-gray-600 ml-1">{product.groupBuying} vendors interested</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Join Group Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
