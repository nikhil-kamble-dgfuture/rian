import React from 'react';

function VideoSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <div className="relative bg-gray-800 rounded-lg">
              <img 
                src="/video-thumbnail.jpg" 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-4">
                  <span className="text-black font-bold">PLAY VIDEO</span>
                </div>
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <h2 className="text-white text-2xl">Sample</h2>
            <p className="text-gray-400">Video 1</p>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
            <button className="text-white -left-12 absolute">
              <span className="sr-only">Previous</span>
              ←
            </button>
            <button className="text-white -right-12 absolute">
              <span className="sr-only">Next</span>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;