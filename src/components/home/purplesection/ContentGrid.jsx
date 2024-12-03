import React from 'react';

const ContentGrid = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col gap-8">
        {/* First row */}
        <div className="flex justify-center gap-8">
          {/* First box - Small */}
          <div className="w-[318px] h-[318px] bg-[#390532] rounded-[50px] flex items-center justify-center">
            {/* Content for first box */}
          </div>

          {/* Second box - Large */}
          <div className="w-[519px] h-[318px] bg-[#390532] rounded-[50px] flex items-center justify-center">
            {/* Content for second box */}
          </div>
        </div>

        {/* Second row */}
        <div className="flex justify-center gap-8">
          {/* Third box - Large */}
          <div className="w-[519px] h-[318px] bg-[#390532] rounded-[50px] flex items-center justify-center">
            {/* Content for third box */}
          </div>

          {/* Fourth box - Small */}
          <div className="w-[318px] h-[318px] bg-[#390532] rounded-[50px] flex items-center justify-center">
            {/* Content for fourth box */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;