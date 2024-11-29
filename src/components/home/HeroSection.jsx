import React from 'react';

function HeroSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8">
          Accelerate your<br />agency's growth
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you need to win new business or wow an existing client,
          Webflow empowers agencies to deliver high-quality client work,
          faster — without growing your dev budget.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
          Book a Demo
        </button>
      </div>
    </section>
  );
}

export default HeroSection;