// import React from 'react';
// import { Link } from 'react-router-dom'; // Don't wrap with <Router> again, it's already handled at the root level

// const PurpleSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-gradient-start to-purple-gradient-end">
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Simplify your Content Production
//           </h1>
//           <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
//             with the Best AI Voice Generator
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//           {/* Top Row */}
//           <div className="bg-purple-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
//             <div className="h-48 flex items-center justify-center">
//               {/* Content for first box */}
//             </div>
//           </div>
//           <div className="bg-purple-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
//             <div className="h-48 flex items-center justify-center">
//               {/* Content for second box */}
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div className="bg-purple-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
//             <div className="h-48 flex items-center justify-center">
//               {/* Content for third box */}
//             </div>
//           </div>
//           <div className="bg-purple-800/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
//             <div className="h-48 flex items-center justify-center">
//               {/* Content for fourth box */}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <Link 
//             to="/get-started" 
//             className="inline-block px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-purple-100 transition-colors duration-300"
//           >
//             Get Started Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PurpleSection;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContentGrid from './purplesection/ContentGrid';
import GetStartedButton from './purplesection/GetStartedButton';
import GetStartedModal from './purplesection/GetStartedModal';
import HeaderPurple from './purplesection/Header';

const PurpleSection = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#4B2C66] to-[#2C1844] py-16">
        <div className="container mx-auto px-4">
          <HeaderPurple />
          <div className="mt-16 mb-16">
            <ContentGrid />
          </div>
          <GetStartedButton />
        </div>

        <Routes>
          <Route path="/get-started" element={<GetStartedModal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default PurpleSection;