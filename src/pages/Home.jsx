import React from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import HorizontalCarousel from '../components/HorizontalCarousel';

function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <Carousel />
      <HorizontalCarousel/>
    </div>
  );
}

export default Home;