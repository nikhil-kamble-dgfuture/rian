// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import ContentGrid from './ContentGrid';
// import GetStartedButton from './GetStartedButton';
// import GetStartedModal from './GetStartedModal';

// const PurpleSection = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-b from-[#4B2C66] to-[#2C1844] py-16">
//         <div className="container mx-auto px-4">
//           <Header />
//           <div className="mt-16 mb-16">
//             <ContentGrid />
//           </div>
//           <GetStartedButton />
//         </div>

//         <Routes>
//           <Route path="/get-started" element={<GetStartedModal />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default PurpleSection;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import ContentGrid from './ContentGrid';
import GetStartedButton from './GetStartedButton';
import GetStartedModal from './GetStartedModal';

const PurpleSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4B2C66] to-[#2C1844] py-16">
      <div className="container mx-auto px-4">
        <Header />
        <div className="mt-16 mb-16">
          <ContentGrid />
        </div>
        <GetStartedButton />
      </div>

      <Routes>
        <Route path="/home" element={<GetStartedModal />} />
      </Routes>
    </div>
  );
};

export default PurpleSection;
