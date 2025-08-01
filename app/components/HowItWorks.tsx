
'use client';

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Browse Products",
      description: "Search for raw materials by category, location, or specific suppliers",
      icon: "ri-search-line"
    },
    {
      step: "2",
      title: "Join Group Buys",
      description: "Click 'Join Group Buy' to combine orders with other vendors for better prices",
      icon: "ri-group-line"
    },
    {
      step: "3",
      title: "Track Prices",
      description: "Monitor price trends and get alerts when your favorite items go on sale",
      icon: "ri-line-chart-line"
    },
    {
      step: "4",
      title: "Direct Contact",
      description: "Call or WhatsApp suppliers directly to finalize orders and delivery",
      icon: "ri-phone-line"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Get started in minutes with our simple 4-step process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                  <i className={`${step.icon} text-orange-500 text-2xl`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
