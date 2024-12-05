// import React from 'react';
// import { Link } from 'react-router-dom';

// const GetStartedButton = () => {
//   return (
//     <div className="mt-12 text-center">
//       <Link 
//         to="/get-started" 
//         className="inline-block px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-purple-100 transition-colors duration-300"
//       >
//         Get Started Now
//       </Link>
//     </div>
//   );
// };

// export default GetStartedButton;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const GetStartedButton = () => {
//   return (
//     <div className="mt-12 text-center">
//       <Link 
//         to="/get-started" 
//         className="inline-block px-8 py-4 bg-[radial-gradient(circle_at_center,_#512A62_0%,_#682B5E_50%,_#843A80_100%)] text-white font-bold rounded-full hover:bg-purple-100 transition-colors duration-300"
//       >
//         Get Started Now
//       </Link>
//     </div>
//   );
// };

// export default GetStartedButton;

import React from 'react';
import { Link } from 'react-router-dom';

const GetStartedButton = () => {
  return (
    <div className="mt-12 text-center">
      <Link 
        to="/get-started" 
        className="inline-block px-8 py-4 bg-[radial-gradient(circle_at_center,_#512A62_0%,_#682B5E_50%,_#843A80_100%)] text-white font-bold rounded-full hover:bg-purple-100 transition-colors duration-300"
      >
        Get Started Now
      </Link>
    </div>
  );
};

export default GetStartedButton;
