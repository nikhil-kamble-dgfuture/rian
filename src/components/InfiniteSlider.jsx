import React from "react";

const InfiniteSlider = () => {
  const sliderItems = [
    "Welcome to Our Platform",
    "Grow Your Business",
    "Discover Amazing Features",
    "Seamless Collaboration",
    "Achieve Your Goals with Ease",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 py-10">
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="bg-gradient-to-r from-black via-transparent to-black h-full w-full"></div>
      </div>

      <div className="relative flex items-center space-x-8 animate-marquee text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
        {sliderItems.map((item, index) => (
          <div key={index} className="shrink-0">
            {item}
          </div>
        ))}
        {sliderItems.map((item, index) => (
          <div key={index + sliderItems.length} className="shrink-0">
            {item}
          </div>
        ))}
      </div>

      {/* Optional Text Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-50"></div>
    </div>
  );
};

export default InfiniteSlider;
