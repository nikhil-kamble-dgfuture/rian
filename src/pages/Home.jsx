// // import React from 'react';
// // import HeroSection from '../components/HeroSection';
// // import Carousel from '../components/Carousel';
// // import HorizontalCarousel from '../components/HorizontalCarousel';
// // import Marquee from '../components/Marquee';

// // function Home() {
// //   return (
// //     <>
// //     <div className="pt-20">
// //       <HeroSection />
// //       <Carousel />
// //       {/* <HorizontalCarousel/> */}
      
// //     </div>
    
// //     <div className="container mx-auto w-full h-screen text-white flex justify-center items-center overflow-x-hidden mt-0">
// //   <Marquee />
// // </div>

// //     </>
// //   );
// // }

// // export default Home;

// // import React from 'react';
// // import HeroSection from '../components/HeroSection';
// // import Carousel from '../components/Carousel';
// // import Marquee from '../components/Marquee';
// // import PinScroll from "../components/PinScroll";

// // function Home() {
// //   return (
// //     <>
// //       <div className="pt-20">
// //         <HeroSection />
// //         <Carousel />
// //       </div>

// //       {/* Remove extra space by resetting margin and padding */}
// //       <div className="container mx-auto w-full h-auto text-white flex justify-center items-center overflow-x-hidden mt-0 p-0">
// //         <Marquee />
// //       </div>

// //       {/* Marquee container with increased brightness in the middle */}
// //       {/* <div className="container mx-auto w-full h-auto text-white flex justify-center items-center overflow-x-hidden mt-0 p-0 relative">
// //         <div
// //           className="w-full"
// //           style={{
// //             position: 'relative',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             width: '100%',
// //             height: '100%',
// //             maskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0) 100%)',
// //             WebkitMaskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0) 100%)',
// //             overflow: 'hidden',
// //           }}
// //         >
// //           <Marquee />
// //         </div>
// //       </div> */}

// //       {/* <PinScroll/> */}
// //       <PinScroll/>
// //     </>
// //   );
// // }

// // export default Home;
// // components/Home.jsx
// import React from 'react';
// import HeroSection from '../components/home/HeroSection';
// import Carousel from '../components/home/Carousel';
// import Marquee from '../components/home/Marquee';
// import PinScroll from "../components/home/PinScroll";
// import HoverImageSection from '../components/home/HoverImageSection';
// import GettingStarted from '../components/home/GettingStarted';
// import PurpleSection from '../components/home/purplesection/PurpleSection';

// function Home() {
//   return (
//     <>
//       <div className="pt-20">
//         <HeroSection />
//         <Carousel />
//       </div>

//       {/* Remove extra space by resetting margin and padding */}
//       <div className="container mx-auto w-full h-auto text-white flex justify-center items-center overflow-x-hidden mt-0 p-0">
//         <Marquee />
//       </div>

//       {/* Marquee container with increased brightness in the middle */}
//       {/* <div className="container mx-auto w-full h-auto text-white flex justify-center items-center overflow-x-hidden mt-0 p-0 relative">
//         <div
//           className="w-full"
//           style={{
//             position: 'relative',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: '100%',
//             height: '100%',
//             maskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0) 100%)',
//             WebkitMaskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0) 100%)',
//             overflow: 'hidden',
//           }}
//         >
//           <Marquee />
//         </div>
//       </div> */}

//       <PinScroll />

//         <GettingStarted/>
//         <PurpleSection/>
//         <HoverImageSection />

      
//     </>
//   );
// }

// export default Home;


import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Carousel from '../components/home/Carousel';
import Marquee from '../components/home/Marquee';
import PinScroll from "../components/home/PinScroll";
import HoverImageSection from '../components/home/HoverImageSection';
import GettingStarted from '../components/home/GettingStarted';
import PurpleSection from '../components/home/purplesection/PurpleSection';
import Layout from '../components/home/p2/Layout';
import Header from '../components/home/p2/Header';
import ContentGrid from '../components/home/p2/ContentGrid';

function Home() {
  return (
    <>
      {/* HeroSection with Earth background */}
      <div className="pt-20">
        <HeroSection />
        <Carousel />
      </div>

      {/* Marquee */}
      <div className="container mx-auto w-full h-auto text-white flex justify-center items-center overflow-x-hidden mt-0 p-0">
        <Marquee />
      </div>

      <PinScroll />
      <GettingStarted />
      {/* <PurpleSection /> */}

      {/*  */}
      <Layout>
      <Header />
      <ContentGrid />
    </Layout>
      {/*  */}
      <HoverImageSection />
    </>
  );
}

export default Home;
