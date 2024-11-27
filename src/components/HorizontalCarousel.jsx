// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const logos = [
//   { id: 1, src: "/rian.webp", alt: "Company 1" },
//   { id: 2, src: "/rian.webp", alt: "Company 2" },
//   { id: 3, src: "/rian.webp", alt: "Company 3" },
//   { id: 4, src: "/rian.webp", alt: "Company 4" },
//   { id: 5, src: "/rian.webp", alt: "Company 5" },
//   { id: 6, src: "/rian.webp", alt: "Company 6" },
// ];

// function HorizontalCarousel() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="relative w-full overflow-hidden py-20">
//       {/* Horizontal Infinite Carousel */}
//       <div className="relative w-full">
//         <motion.div
//           className="flex space-x-8"
//           animate={{
//             x: "-100%",
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 10, // Smooth scrolling duration
//             ease: "linear",
//           }}
//         >
//           {logos.map((logo, index) => (
//             <motion.div
//               key={logo.id}
//               className="relative w-32 h-32 flex-shrink-0"
//               onMouseEnter={() => setHovered(logo.id)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               {/* Logo Image */}
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className={`w-full h-full object-contain rounded-xl shadow-2xl transition-all ${
//                   hovered === logo.id ? "brightness-100" : "brightness-50"
//                 }`}
//               />

//               {/* Adding hover effects */}
//               <div
//                 className={`absolute inset-0 bg-black/30 rounded-xl transition-all ${
//                   hovered === logo.id ? "opacity-0" : "opacity-100"
//                 }`}
//               ></div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default HorizontalCarousel;
import React, { useState } from "react";
import { motion } from "framer-motion";

const logos = [
  { id: 1, src: "/rian.webp", alt: "Company 1" },
  { id: 2, src: "/rian.webp", alt: "Company 2" },
  { id: 3, src: "/rian.webp", alt: "Company 3" },
  { id: 4, src: "/rian.webp", alt: "Company 4" },
  { id: 5, src: "/rian.webp", alt: "Company 5" },
  { id: 6, src: "/rian.webp", alt: "Company 6" },
];

function HorizontalCarousel() {
  const [hovered, setHovered] = useState(null);  // Track hovered logo

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Horizontal Infinite Carousel */}
      <div className="relative w-full">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: "-100%",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 50, // Adjust scroll speed here
            ease: "linear",
          }}
        >
          {/* Duplicate the logos for infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={logo.id}
              className="relative w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 flex-shrink-0"
              onMouseEnter={() => setHovered(logo.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Logo Image */}
              <img
                src={logo.src}
                alt={logo.alt}
                className={`w-full h-full object-contain rounded-xl shadow-2xl transition-all ${
                  hovered === logo.id ? "brightness-100 scale-110" : "brightness-50"
                }`} // Highlight only hovered logo
              />

              {/* Adding hover overlay */}
              <div
                className={`absolute inset-0 bg-black/30 rounded-xl transition-all ${
                  hovered === logo.id ? "opacity-0" : "opacity-100"
                }`}  // Hide overlay for hovered logo
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalCarousel;
