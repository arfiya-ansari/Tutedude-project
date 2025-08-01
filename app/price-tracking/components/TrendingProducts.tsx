
'use client';

export default function TrendingProducts() {
  const trendingProducts = [
    {
      name: 'Onions',
      currentPrice: 25,
      change: -5,
      volume: 'High',
      image: "https://readdy.ai/api/search-image?query=Fresh%20red%20onions%20in%20organized%20market%20display%2C%20clean%20produce%20arrangement%2C%20professional%20commercial%20photography%2C%20bright%20natural%20lighting%2C%20high%20quality%20vegetables%20in%20market%20stall%20setting&width=60&height=60&seq=trending-1&orientation=squarish"
    },
    {
      name: 'Cooking Oil',
      currentPrice: 150,
      change: -8,
      volume: 'Medium',
      image: "https://readdy.ai/api/search-image?query=Cooking%20oil%20bottles%20in%20organized%20display%2C%20professional%20commercial%20photography%2C%20clean%20product%20arrangement%2C%20bright%20lighting%2C%20wholesale%20market%20setting%20for%20cooking%20oil%20products&width=60&height=60&seq=trending-2&orientation=squarish"
    },
    {
      name: 'Tomatoes',
      currentPrice: 35,
      change: 3,
      volume: 'High',
      image: "https://readdy.ai/api/search-image?query=Fresh%20ripe%20tomatoes%20in%20market%20display%2C%20organized%20produce%20arrangement%2C%20professional%20commercial%20photography%2C%20bright%20natural%20lighting%2C%20high%20quality%20vegetables%20in%20wholesale%20market%20setting&width=60&height=60&seq=trending-3&orientation=squarish"
    },
    {
      name: 'Basmati Rice',
      currentPrice: 80,
      change: 0,
      volume: 'Medium',
      image: "https://readdy.ai/api/search-image?query=Basmati%20rice%20in%20professional%20market%20display%2C%20organized%20grain%20presentation%2C%20clean%20wholesale%20environment%2C%20bright%20lighting%2C%20high%20quality%20rice%20products%20in%20market%20setting&width=60&height=60&seq=trending-4&orientation=squarish"
    },
    {
      name: 'Potatoes',
      currentPrice: 20,
      change: -2,
      volume: 'High',
      image: "https://readdy.ai/api/search-image?query=Fresh%20potatoes%20in%20organized%20market%20display%2C%20clean%20produce%20arrangement%2C%20professional%20commercial%20photography%2C%20bright%20natural%20lighting%2C%20high%20quality%20vegetables%20in%20wholesale%20market%20setting&width=60&height=60&seq=trending-5&orientation=squarish"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Trending Products</h2>
      
      <div className="space-y-4">
        {trendingProducts.map((product, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${product.image})`}}></div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <p className="text-xs text-gray-500">{product.volume} volume</p>
            </div>
            
            <div className="text-right">
              <p className="font-semibold text-sm">₹{product.currentPrice}</p>
              <div className={`flex items-center text-xs ${
                product.change > 0 ? 'text-red-500' : product.change < 0 ? 'text-green-500' : 'text-gray-500'
              }`}>
                {product.change > 0 ? (
                  <i className="ri-arrow-up-line text-xs mr-1"></i>
                ) : product.change < 0 ? (
                  <i className="ri-arrow-down-line text-xs mr-1"></i>
                ) : (
                  <i className="ri-subtract-line text-xs mr-1"></i>
                )}
                <span>{product.change > 0 ? '+' : ''}{product.change}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer">
          View All Products
        </button>
      </div>
    </div>
  );
}
