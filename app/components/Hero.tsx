
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20fresh%20produce%20market%20with%20colorful%20vegetables%20and%20fruits%20displayed%20at%20wholesale%20market%20stalls%2C%20bright%20natural%20lighting%2C%20vendors%20arranging%20products%2C%20clean%20organized%20environment%2C%20vibrant%20colors%20of%20tomatoes%20onions%20potatoes%2C%20professional%20commercial%20photography%20style%2C%20warm%20inviting%20atmosphere&width=1200&height=800&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="font-pacifico text-orange-400">FreshLink</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting raw material suppliers with street food vendors through smart group buying, price tracking, and trusted partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/suppliers" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Browse Suppliers
            </Link>
            <Link href="/auth/login" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer border border-white/30">
              Join as Supplier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
