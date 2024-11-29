// import React from 'react';
// import { motion } from 'framer-motion';

// // Import images (Replace these paths with the actual image paths)
// import image1 from '../../assets/video2.webp';
// import image2 from '../../assets/video2.webp';
// import image3 from '../../assets/video2.webp';
// import image4 from '../../assets/video2.webp';
// import image5 from '../../assets/video2.webp';
// import image6 from '../../assets/video2.webp';

// import React from 'react';
// import { motion } from 'framer-motion';

// // Import images (Replace these paths with actual image paths)
// import image1 from '../../assets/video2.webp';
// import image2 from '../../assets/video2.webp';
// import image3 from '../../assets/video2.webp';
// import image4 from '../../assets/video2.webp';
// import image5 from '../../assets/video2.webp';
// import image6 from '../../assets/video2.webp';

// const HoverImageSection = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black relative flex-col">
//       {/* Container for Left and Right Images */}
//       <div className="flex justify-between w-full px-10 py-5">
//         {/* Left Images Container */}
//         <div className="flex flex-col items-center space-y-8">
//           {/* Image 1 */}
//           <motion.div className="w-[278px] h-[361px]">
//             <motion.img
//               src={image1}
//               alt="Image 1"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 2 */}
//           <motion.div className="w-[485px] h-[269px]">
//             <motion.img
//               src={image2}
//               alt="Image 2"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 3 */}
//           <motion.div className="w-[468px] h-[235px]">
//             <motion.img
//               src={image3}
//               alt="Image 3"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </div>

//         {/* Centered Button */}
//         <motion.div className="relative z-10 flex items-center justify-center">
//           {/* Updated Book Button */}
//           <motion.button
//             className="absolute"
//             style={{
//               top: '4183px',      // Position from top
//               left: '579px',      // Position from left
//               width: '289px',     // Button width
//               height: '48px',     // Button height
//               fontFamily: 'Inter',  // Font family
//               fontWeight: 800,    // Font weight
//               fontSize: '40px',   // Font size
//               lineHeight: '48.41px', // Line height
//               textAlign: 'center', // Text alignment
//             }}
//             initial={{ opacity: 0.5, scale: 1 }}
//             whileHover={{ opacity: 1, scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             Book Demo
//           </motion.button>
//         </motion.div>

//         {/* Right Images Container */}
//         <div className="flex flex-col items-center space-y-8">
//           {/* Image 4 */}
//           <motion.div className="w-[505px] h-[229px]">
//             <motion.img
//               src={image4}
//               alt="Image 4"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 5 */}
//           <motion.div className="w-[249px] h-[356px]">
//             <motion.img
//               src={image5}
//               alt="Image 5"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 6 */}
//           <motion.div className="w-[505px] h-[317px]">
//             <motion.img
//               src={image6}
//               alt="Image 6"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoverImageSection;
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// // Import images (Replace these paths with actual image paths)
// import image1 from '../../assets/video2.webp';
// import image2 from '../../assets/video2.webp';
// import image3 from '../../assets/video2.webp';
// import image4 from '../../assets/video2.webp';
// import image5 from '../../assets/video2.webp';
// import image6 from '../../assets/video2.webp';

// const HoverImageSection = () => {
//   const [scrollY, setScrollY] = useState(0);

//   // Update scroll position when scrolling
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="relative bg-black min-h-screen overflow-hidden">
//       {/* Parent container for the images and button */}
//       <div className="relative w-full h-screen overflow-y-auto">
//         {/* Centered Button inside the container */}
//         <motion.div
//           className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
//         >
//           <motion.button
//             className="bg-[#EBFBFF] text-black text-2xl font-bold py-2 px-6 rounded-lg hover:bg-[#D4F2FF] transition-colors duration-300"
//             initial={{ opacity: 0.5, scale: 1 }}
//             whileHover={{ opacity: 1, scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             Hover Me
//           </motion.button>
//         </motion.div>

//         {/* Left Container for Images */}
//         <div className="absolute top-0 left-0 flex flex-col space-y-10 px-4 py-10">
//           {/* Image 1 */}
//           <motion.div
//             className="w-[278px] h-[361px]"
//             style={{
//               top: `${3565 + scrollY * 0.1}px`,
//               left: '279px',
//             }}
//           >
//             <motion.img
//               src={image1}
//               alt="Image 1"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 2 */}
//           <motion.div
//             className="w-[485px] h-[269px]"
//             style={{
//               top: `${3596 + scrollY * 0.1}px`,
//               left: '679px',
//             }}
//           >
//             <motion.img
//               src={image2}
//               alt="Image 2"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 3 */}
//           <motion.div
//             className="w-[468px] h-[235px]"
//             style={{
//               top: `${4001 + scrollY * 0.1}px`,
//               left: '191px',
//             }}
//           >
//             <motion.img
//               src={image3}
//               alt="Image 3"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </div>

//         {/* Right Container for Images */}
//         <div className="absolute top-0 right-0 flex flex-col space-y-10 px-4 py-10">
//           {/* Image 4 */}
//           <motion.div
//             className="w-[505px] h-[229px]"
//             style={{
//               top: `${3914 + scrollY * 0.1}px`,
//               left: '739px',
//             }}
//           >
//             <motion.img
//               src={image4}
//               alt="Image 4"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 5 */}
//           <motion.div
//             className="w-[249px] h-[356px]"
//             style={{
//               top: `${4270 + scrollY * 0.1}px`,
//               left: '293px',
//             }}
//           >
//             <motion.img
//               src={image5}
//               alt="Image 5"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 6 */}
//           <motion.div
//             className="w-[505px] h-[317px]"
//             style={{
//               top: `${4281 + scrollY * 0.1}px`,
//               left: '659px',
//             }}
//           >
//             <motion.img
//               src={image6}
//               alt="Image 6"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };



//perrfectbelow
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// // Import images (Replace these paths with actual image paths)
// import image1 from '../../assets/video2.webp';
// import image2 from '../../assets/video2.webp';
// import image3 from '../../assets/video2.webp';
// import image4 from '../../assets/video2.webp';
// import image5 from '../../assets/video2.webp';
// import image6 from '../../assets/video2.webp';

// const HoverImageSection = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);  // Track if the button is being hovered

//   // Update scroll position when scrolling
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Lock/Unlock scrolling based on hover state
//   useEffect(() => {
//     if (isHovering) {
//       // Lock scrolling by setting the overflow to hidden
//       document.body.style.overflow = 'hidden';
//     } else {
//       // Restore scroll behavior
//       document.body.style.overflow = 'auto';
//     }
//   }, [isHovering]);

//   return (
//     <div className="relative bg-black min-h-screen overflow-hidden">
//       {/* Parent container for the images and button */}
//       <div className="relative w-full min-h-[150vh]"> {/* Increase the height of the parent container */}
        
//         {/* Centered Button inside the container */}
//         <motion.div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
//           onMouseEnter={() => setIsHovering(true)}  // Set hover state to true when mouse enters
//           onMouseLeave={() => setIsHovering(false)} // Set hover state to false when mouse leaves
//         >
//           <motion.button
//             className="bg-[#EBFBFF] text-black text-2xl font-bold py-2 px-6 rounded-lg hover:bg-[#D4F2FF] transition-colors duration-300"
//             initial={{ opacity: 0.5, scale: 1 }}
//             whileHover={{ opacity: 1, scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             Hover Me
//           </motion.button>
//         </motion.div>

//         {/* Left Container for Images */}
//         <div className="absolute top-0 left-0 flex flex-col space-y-10 px-4 py-10">
//           {/* Image 1 */}
//           <motion.div
//             className="w-[278px] h-[361px]"
//             style={{
//               top: `${3565 + scrollY * 0.1}px`,
//               left: '279px',
//             }}
//           >
//             <motion.img
//               src={image1}
//               alt="Image 1"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 2 */}
//           <motion.div
//             className="w-[485px] h-[269px]"
//             style={{
//               top: `${3596 + scrollY * 0.1}px`,
//               left: '679px',
//             }}
//           >
//             <motion.img
//               src={image2}
//               alt="Image 2"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 3 */}
//           <motion.div
//             className="w-[468px] h-[235px]"
//             style={{
//               top: `${4001 + scrollY * 0.1}px`,
//               left: '191px',
//             }}
//           >
//             <motion.img
//               src={image3}
//               alt="Image 3"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </div>

//         {/* Right Container for Images */}
//         <div className="absolute top-0 right-0 flex flex-col space-y-10 px-4 py-10">
//           {/* Image 4 */}
//           <motion.div
//             className="w-[505px] h-[229px]"
//             style={{
//               top: `${3914 + scrollY * 0.1}px`,
//               left: '739px',
//             }}
//           >
//             <motion.img
//               src={image4}
//               alt="Image 4"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 5 */}
//           <motion.div
//             className="w-[249px] h-[356px]"
//             style={{
//               top: `${4270 + scrollY * 0.1}px`,
//               left: '293px',
//             }}
//           >
//             <motion.img
//               src={image5}
//               alt="Image 5"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Image 6 */}
//           <motion.div
//             className="w-[505px] h-[317px]"
//             style={{
//               top: `${4281 + scrollY * 0.1}px`,
//               left: '659px',
//             }}
//           >
//             <motion.img
//               src={image6}
//               alt="Image 6"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0.5, scale: 1 }}
//               whileHover={{ opacity: 1, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default HoverImageSection;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import images (Replace these paths with actual image paths)
import image1 from '../../assets/video2.webp';
import image2 from '../../assets/video2.webp';
import image3 from '../../assets/video2.webp';
import image4 from '../../assets/video2.webp';
import image5 from '../../assets/video2.webp';
import image6 from '../../assets/video2.webp';

const HoverImageSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);  // Track if the button is being hovered

  // Update scroll position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock/Unlock scrolling based on hover state
  useEffect(() => {
    if (isHovering) {
      // Lock scrolling by setting the overflow to hidden
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll behavior
      document.body.style.overflow = 'auto';
    }
  }, [isHovering]);

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Parent container for the images and button */}
      <div className="relative w-full min-h-[150vh]"> {/* Increase the height of the parent container */}
        
        {/* Centered Button inside the container */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          onMouseEnter={() => setIsHovering(true)}  // Set hover state to true when mouse enters
          onMouseLeave={() => setIsHovering(false)} // Set hover state to false when mouse leaves
        >
          <motion.button
            className="bg-[#EBFBFF] text-black text-2xl font-bold py-2 px-6 rounded-lg hover:bg-[#D4F2FF] transition-colors duration-300"
            initial={{ opacity: 0.5, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Hover Me
          </motion.button>
        </motion.div>

        {/* Left Container for Images */}
        <div className="absolute top-0 left-0 flex flex-col space-y-10 px-4 py-10 pl-10"> {/* Added pl-10 for left padding */}
          {/* Image 1 */}
          <motion.div
            className="w-[278px] h-[361px]"
            style={{
              top: `${3565 + scrollY * 0.1}px`,
              left: '279px',
            }}
          >
            <motion.img
              src={image1}
              alt="Image 1"
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="w-[485px] h-[269px]"
            style={{
              top: `${3596 + scrollY * 0.1}px`,
              left: '679px',
            }}
          >
            <motion.img
              src={image2}
              alt="Image 2"
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="w-[468px] h-[235px]"
            style={{
              top: `${4001 + scrollY * 0.1}px`,
              left: '191px',
            }}
          >
            <motion.img
              src={image3}
              alt="Image 3"
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Right Container for Images */}
        <div className="absolute top-0 right-0 flex flex-col space-y-10 px-4 py-10 pr-10"> {/* Added pr-10 for right padding */}
          {/* Image 4 */}
          <motion.div
            className="w-[505px] h-[229px]"
            style={{
              top: `${3914 + scrollY * 0.1}px`,
              left: '739px',
            }}
          >
            <motion.img
              src={image4}
              alt="Image 4"
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Image 5 */}
          <motion.div
            className="w-[249px] h-[356px]"
            style={{
              top: `${4270 + scrollY * 0.1}px`,
              left: '293px',
            }}
          >
            <motion.img
              src={image5}
              alt="Image 5"
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Image 6 */}
          <motion.div
            className="w-[505px] h-[317px]"
            style={{
              top: `${4281 + scrollY * 0.1}px`,
              left: '659px',
            }}
          >
            <motion.img
              src={image6}
              alt="Image 6"
              className="w-full h-full object-cover"
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default HoverImageSection;
