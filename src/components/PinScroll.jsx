// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // Content array
// const content = [
//   {
//     text: "Discover the beauty of nature through our lens.",
//     image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format",
//   },
//   {
//     text: "Urban life pulses with energy and possibility.",
//     image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format",
//   },
//   {
//     text: "Technology shapes our future in ways we're only beginning to understand.",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format",
//   },
// ];

// // Image display component
// function ImageDisplay({ content, activeIndex }) {
//   return (
//     <div className="w-full h-[40vh] md:h-screen md:sticky md:top-16 overflow-hidden">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={activeIndex}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.7 }}
//           className="w-full h-full p-4 md:p-8"
//         >
//           <img
//             src={content[activeIndex].image}
//             alt={`Scene ${activeIndex + 1}`}
//             className="w-full h-full object-cover rounded-lg shadow-2xl"
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// // Text section component
// function TextSection({ text, index, setActiveIndex }) {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       setActiveIndex(index);
//     }
//   }, [inView, index, setActiveIndex]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="min-h-[60vh] md:min-h-screen flex items-center p-6 md:p-12"
//     >
//       <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">{text}</p>
//     </motion.div>
//   );
// }

// // Main scroll container
// function PinScroll() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="min-h-screen bg-gray-900 mt-16">
//       <div className="flex flex-col md:grid md:grid-cols-2">
//         <div className="order-2 md:order-1">
//           <div className="relative">
//             {content.map((item, index) => (
//               <TextSection
//                 key={index}
//                 text={item.text}
//                 index={index}
//                 setActiveIndex={setActiveIndex}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="order-1 md:order-2">
//           <ImageDisplay content={content} activeIndex={activeIndex} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PinScroll;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // Content array
// const content = [
//   {
//     text: "Discover the beauty of nature through our lens.",
//     image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format",
//   },
//   {
//     text: "Urban life pulses with energy and possibility.",
//     image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format",
//   },
//   {
//     text: "Technology shapes our future in ways we're only beginning to understand.",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format",
//   },
// ];

// // Image display component
// function ImageDisplay({ content, activeIndex }) {
//   return (
//     <div className="w-full h-[40vh] md:h-screen md:sticky md:top-16 overflow-hidden">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={activeIndex}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.7 }}
//           className="w-full h-full p-4 md:p-8"
//         >
//           <img
//             src={content[activeIndex].image}
//             alt={`Scene ${activeIndex + 1}`}
//             className="w-full h-full object-cover rounded-lg shadow-2xl"
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// // Text section component
// function TextSection({ text, index, setActiveIndex }) {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       setActiveIndex(index);
//     }
//   }, [inView, index, setActiveIndex]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="min-h-[60vh] md:min-h-screen flex items-center p-6 md:p-12"
//     >
//       <p className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed">{text}</p>
//     </motion.div>
//   );
// }

// // Main scroll container
// function PinScroll() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="min-h-screen bg-white mt-16">
//       <div className="flex flex-col md:grid md:grid-cols-2">
//         <div className="order-2 md:order-1">
//           <div className="relative">
//             {content.map((item, index) => (
//               <TextSection
//                 key={index}
//                 text={item.text}
//                 index={index}
//                 setActiveIndex={setActiveIndex}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="order-1 md:order-2">
//           <ImageDisplay content={content} activeIndex={activeIndex} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PinScroll;
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // Content array
// const content = [
//   {
//     text: "Discover the beauty of nature through our lens.",
//     image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format",
//   },
//   {
//     text: "Urban life pulses with energy and possibility.",
//     image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format",
//   },
//   {
//     text: "Technology shapes our future in ways we're only beginning to understand.",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format",
//   },
// ];

// // Image display component
// function ImageDisplay({ content, activeIndex }) {
//   return (
//     // Slightly reduced height: 35vh for small screens, 90vh for large screens
//     <div className="w-full h-[35vh] md:h-[90vh] md:sticky md:top-16 overflow-hidden">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={activeIndex}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.7 }}
//           className="w-full h-full p-4 md:p-8"
//         >
//           <img
//             src={content[activeIndex].image}
//             alt={`Scene ${activeIndex + 1}`}
//             className="w-full h-full object-cover rounded-lg shadow-2xl"
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// // Text section component
// function TextSection({ text, index, setActiveIndex }) {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       setActiveIndex(index);
//     }
//   }, [inView, index, setActiveIndex]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="min-h-[60vh] md:min-h-screen flex items-center p-6 md:p-12"
//     >
//       {/* Text color set to black */}
//       <p className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed">{text}</p>
//     </motion.div>
//   );
// }

// // Main scroll container
// function PinScroll() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     // Background color set to white
//     <div className="min-h-screen bg-white mt-16">
//       <div className="flex flex-col md:grid md:grid-cols-2">
//         <div className="order-2 md:order-1">
//           <div className="relative">
//             {content.map((item, index) => (
//               <TextSection
//                 key={index}
//                 text={item.text}
//                 index={index}
//                 setActiveIndex={setActiveIndex}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="order-1 md:order-2">
//           <ImageDisplay content={content} activeIndex={activeIndex} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PinScroll;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Content array
const content = [
  {
    text: "Discover the beauty of nature through our lens.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format",
  },
  {
    text: "Urban life pulses with energy and possibility.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format",
  },
  {
    text: "Technology shapes our future in ways we're only beginning to understand.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format",
  },
];

// Image display component
function ImageDisplay({ content, activeIndex }) {
  return (
    // Slightly reduced height: 35vh for small screens, 90vh for large screens
    <div className="w-full h-[35vh] md:h-[90vh] md:sticky md:top-16 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full p-4 md:p-8"
        >
          <img
            src={content[activeIndex].image}
            alt={`Scene ${activeIndex + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Text section component
function TextSection({ text, index, setActiveIndex }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // Added equal margins for top and bottom
      className="min-h-[60vh] md:min-h-screen flex items-center p-6 md:p-12 my-6 md:my-12"
    >
      {/* Text color set to black */}
      <p className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed">{text}</p>
    </motion.div>
  );
}

// Main scroll container
function PinScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // Background color set to white
    <div className="min-h-screen bg-white mt-16">
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="relative">
            {content.map((item, index) => (
              <TextSection
                key={index}
                text={item.text}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <ImageDisplay content={content} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}

export default PinScroll;
