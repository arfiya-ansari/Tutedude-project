
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-pacifico text-orange-400 mb-4">FreshLink</h3>
            <p className="text-gray-400 mb-4">
              Connecting suppliers and vendors for a better food economy
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700">
                <i className="ri-facebook-fill text-sm"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700">
                <i className="ri-twitter-fill text-sm"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700">
                <i className="ri-instagram-line text-sm"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Vendors</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/suppliers" className="hover:text-white cursor-pointer">Browse Suppliers</Link></li>
              <li><Link href="/group-buying" className="hover:text-white cursor-pointer">Group Buying</Link></li>
              <li><Link href="/price-tracking" className="hover:text-white cursor-pointer">Price Tracking</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white cursor-pointer">How It Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Suppliers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/register" className="hover:text-white cursor-pointer">Join as Supplier</Link></li>
              <li><Link href="/post-product" className="hover:text-white cursor-pointer">Post Products</Link></li>
              <li><Link href="/analytics" className="hover:text-white cursor-pointer">Analytics</Link></li>
              <li><Link href="/verification" className="hover:text-white cursor-pointer">Get Verified</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-white cursor-pointer">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white cursor-pointer">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-white cursor-pointer">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white cursor-pointer">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FreshLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
