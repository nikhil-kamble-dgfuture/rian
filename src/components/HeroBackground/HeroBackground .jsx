import React from 'react';
import './HeroBackground.css'; // Ensure the CSS file is correctly linked

const HeroBackground = () => {
  return (
    <div id="heroBackground" className="relative w-full h-screen overflow-hidden">
      {/* Star layers */}
      <div id="stars" className="absolute top-0 left-0 w-full h-full"></div>
      <div id="stars2" className="absolute top-0 left-0 w-full h-full"></div>
      <div id="stars3" className="absolute top-0 left-0 w-full h-full"></div>

      {/* Horizon */}
      <div id="horizon" className="absolute"></div>
      
      {/* Earth */}
      <div id="earth" className="absolute"></div>
    </div>
  );
};

export default HeroBackground;
