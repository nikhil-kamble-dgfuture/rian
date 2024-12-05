import React from 'react';

const ContentGrid = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 overflow-x-hidden">
      <div className="flex flex-col gap-4 md:gap-8">
        {/* First row */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          {/* First box - Small */}
          <div className="w-[calc(100vw-2rem)] md:w-[318px] h-[200px] md:h-[318px] bg-[#390532] rounded-[25px] md:rounded-[50px] flex items-center justify-center shadow-[0_0_50px_rgba(135,59,122,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(135,59,122,0.7)]">
            <div className="text-center p-4 md:p-6">
              <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-3">Voice Creation</h3>
              <p className="text-white/80 text-sm md:text-base">Create natural-sounding voices instantly</p>
            </div>
          </div>

          {/* Second box - Large */}
          <div className="w-[calc(100vw-2rem)] md:w-[519px] h-[200px] md:h-[318px] bg-[#390532] rounded-[25px] md:rounded-[50px] flex items-center justify-center shadow-[0_0_50px_rgba(104,43,94,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(104,43,94,0.7)]">
            <div className="text-center p-4 md:p-6">
              <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-3">Language Support</h3>
              <p className="text-white/80 text-sm md:text-base">Multiple languages and accents available</p>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          {/* Third box - Large */}
          <div className="w-[calc(100vw-2rem)] md:w-[519px] h-[200px] md:h-[318px] bg-[#390532] rounded-[25px] md:rounded-[50px] flex items-center justify-center shadow-[0_0_50px_rgba(81,42,98,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(81,42,98,0.7)]">
            <div className="text-center p-4 md:p-6">
              <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-3">Custom Training</h3>
              <p className="text-white/80 text-sm md:text-base">Train AI with your voice samples</p>
            </div>
          </div>

          {/* Fourth box - Small */}
          <div className="w-[calc(100vw-2rem)] md:w-[318px] h-[200px] md:h-[318px] bg-[#390532] rounded-[25px] md:rounded-[50px] flex items-center justify-center shadow-[0_0_50px_rgba(135,59,122,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(135,59,122,0.7)]">
            <div className="text-center p-4 md:p-6">
              <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-3">Real-time</h3>
              <p className="text-white/80 text-sm md:text-base">Generate content in seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
