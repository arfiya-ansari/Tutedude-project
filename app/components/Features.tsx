
'use client';

export default function Features() {
  const features = [
    {
      icon: "ri-group-line",
      title: "Group Buying",
      description: "Join with other vendors to get better prices through bulk purchasing power",
      color: "bg-blue-500"
    },
    {
      icon: "ri-line-chart-line",
      title: "Price Tracking",
      description: "Monitor price trends and get notified when prices drop for your favorite items",
      color: "bg-green-500"
    },
    {
      icon: "ri-shield-check-line",
      title: "Trusted Suppliers",
      description: "Verified suppliers with ratings and reviews from the vendor community",
      color: "bg-purple-500"
    },
    {
      icon: "ri-map-pin-line",
      title: "Regional Filtering",
      description: "Find suppliers in your area for faster delivery and better relationships",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FreshLink?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes sourcing raw materials easier, more affordable, and more reliable for street food vendors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 flex items-center justify-center ${feature.color} rounded-xl mb-4`}>
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
