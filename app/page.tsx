
'use client';

import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TrustedSuppliers from './components/TrustedSuppliers';
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <TrustedSuppliers />
      <PopularProducts />
      <Footer />
    </div>
  );
}
