// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import VideoPlayer from './VideoPlayer';

// const slides = [
//   {
//     id: 1,
//     title: "Agency Growth",
//     description: "Accelerate your agency's growth",
//     video: "/src/assets/video1.mp4",
//     image: "/video1.jpg"
//   },
//   {
//     id: 2,
//     title: "Client Success",
//     description: "Deliver exceptional results",
//     video: "/src/assets/video2.mp4",
//     image: "/video2.jpg"
//   },
//   {
//     id: 3,
//     title: "Development Process",
//     description: "Streamline your workflow",
//     video: "/src/assets/video3.mp4",
//     image: "/video3.jpg"
//   }
// ];

// function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState(null);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowLeft') prevSlide();
//     if (e.key === 'ArrowRight') nextSlide();
//   };

//   const playVideo = (videoSrc) => {
//     setPlayingVideo(videoSrc);
//   };

//   return (
//     <div 
//       className="relative w-full max-w-[90vw] lg:max-w-[1000px] mx-auto px-4 py-20" 
//       onKeyDown={handleKeyDown} 
//       tabIndex="0"
//     >
//       <div className="relative flex justify-center items-center min-h-[40vh] lg:min-h-[50vh]">
//         <AnimatePresence mode="wait">
//           {slides.map((slide, index) => {
//             let position = index - currentSlide;
//             if (position < 0) position += slides.length;
            
//             return (
//               <motion.div
//                 key={slide.id}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{
//                   scale: position === 0 ? 1 : 0.7,
//                   opacity: position === 0 ? 1 : 0.3,
//                   x: position === 0 ? 0 : position === 1 ? '60%' : '-60%',
//                   zIndex: position === 0 ? 20 : 10,
//                 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute w-full max-w-3xl mx-auto"
//               >
//                 <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                     <button 
//                       onClick={() => playVideo(slide.video)}
//                       className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                     >
//                       PLAY VIDEO
//                     </button>
//                   </div>
//                 </div>
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   className="text-center mt-8 mb-12"
//                 >
//                   <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
//                   <p className="text-gray-400">{slide.description}</p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         {/* Navigation buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           ←
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           →
//         </button>
//       </div>

//       {/* Slide counter */}
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
//         <div className="text-white text-sm">
//           {currentSlide + 1} / {slides.length}
//         </div>
//       </div>

//       {/* Video Player Modal */}
//       <AnimatePresence>
//         {playingVideo && (
//           <VideoPlayer
//             videoSrc={playingVideo}
//             onClose={() => setPlayingVideo(null)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default Carousel;

//-----------------------------------------------

// problem video play all3 slide 27-11 5pm 
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const slides = [
//   {
//     id: 1,
//     title: "Agency Growth",
//     description: "Accelerate your agency's growth",
//     video: "/src/assets/video1.mp4",
//     image: "/video1.jpg",
//   },
//   {
//     id: 2,
//     title: "Client Success",
//     description: "Deliver exceptional results",
//     video: "/src/assets/video1.mp4",
//     image: "/video2.jpg",
//   },
//   {
//     id: 3,
//     title: "Development Process",
//     description: "Streamline your workflow",
//     video: "/src/assets/video1.mp4",
//     image: "/video3.jpg",
//   },
// ];

// function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState(null);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to next slide
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to previous slide
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowLeft') prevSlide();
//     if (e.key === 'ArrowRight') nextSlide();
//   };

//   const playVideo = (videoSrc) => {
//     setPlayingVideo(videoSrc);
//   };

//   return (
//     <div
//       className="relative w-full max-w-[90vw] lg:max-w-[1000px] mx-auto px-4 py-20"
//       onKeyDown={handleKeyDown}
//       tabIndex="0"
//     >
//       <div className="relative flex justify-center items-center min-h-[40vh] lg:min-h-[50vh]">
//         <AnimatePresence mode="wait">
//           {slides.map((slide, index) => {
//             let position = index - currentSlide;
//             if (position < 0) position += slides.length;

//             return (
//               <motion.div
//                 key={slide.id}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{
//                   scale: position === 0 ? 1 : 0.7,
//                   opacity: position === 0 ? 1 : 0.3,
//                   x: position === 0 ? 0 : position === 1 ? '60%' : '-60%',
//                   zIndex: position === 0 ? 20 : 10,
//                 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute w-full max-w-3xl mx-auto"
//               >
//                 <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
//                   {playingVideo === slide.video ? (
//                     <video
//                       src={slide.video}
//                       controls
//                       autoPlay
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                     <button
//                       onClick={() => playVideo(slide.video)}
//                       className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                     >
//                       PLAY VIDEO
//                     </button>
//                   </div>
//                 </div>
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   className="text-center mt-8 mb-12"
//                 >
//                   <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
//                   <p className="text-gray-400">{slide.description}</p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         {/* Navigation buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           ←
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           →
//         </button>
//       </div>

//       {/* Slide counter */}
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
//         <div className="text-white text-sm">
//           {currentSlide + 1} / {slides.length}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

//perfect workin following code ⬇️
//carousle show video lay image thubnail show
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CiPlay1, CiPause1 } from "react-icons/ci";

// const slides = [
//   {
//     id: 1,
//     title: "Agency Growth",
//     description: "Accelerate your agency's growth",
//     video: "/src/assets/video1.mp4",
//     image: "/video1.webp",
//   },
//   {
//     id: 2,
//     title: "Client Success",
//     description: "Deliver exceptional results",
//     video: "/src/assets/video2.mp4",
//     image: "/video1.webp",
//   },
//   {
//     id: 3,
//     title: "Development Process",
//     description: "Streamline your workflow",
//     video: "/src/assets/video3.mp4",
//     image: "/video1.webp",
//   },
// ];

// function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video
//   const [hovered, setHovered] = useState(null); // Track which slide is being hovered
//   const [videoPaused, setVideoPaused] = useState(true); // Track if the video is paused

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to the next slide
//     setVideoPaused(true); // Reset video state
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to previous slide
//     setVideoPaused(true); // Reset video state
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowLeft") prevSlide();
//     if (e.key === "ArrowRight") nextSlide();
//   };

//   const playPauseVideo = (videoSrc) => {
//     if (playingVideo === videoSrc && !videoPaused) {
//       setVideoPaused(true); // Pause the video if it's currently playing
//     } else {
//       setPlayingVideo(videoSrc); // Play the video
//       setVideoPaused(false); // Set video to playing state
//     }
//   };

//   return (
//     <div
//       className="relative w-full max-w-[90vw] lg:max-w-[1000px] mx-auto px-4 py-20"
//       onKeyDown={handleKeyDown}
//       tabIndex="0"
//     >
//       <div className="relative flex justify-center items-center min-h-[40vh] lg:min-h-[50vh]">
//         <AnimatePresence mode="wait">
//           {slides.map((slide, index) => {
//             let position = index - currentSlide;
//             if (position < 0) position += slides.length;

//             return (
//               <motion.div
//                 key={slide.id}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{
//                   scale: position === 0 ? 1 : 0.7,
//                   opacity: position === 0 ? 1 : 0.3,
//                   x: position === 0 ? 0 : position === 1 ? "60%" : "-60%",
//                   zIndex: position === 0 ? 20 : 10,
//                 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute w-full max-w-3xl mx-auto"
//                 onMouseEnter={() => setHovered(slide.id)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div
//                   className={`relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl ${
//                     playingVideo === slide.video && !videoPaused ? "brightness-100" : "brightness-50"
//                   }`} // Apply brightness change based on play state
//                 >
//                   {playingVideo === slide.video && !videoPaused ? (
//                     <video
//                       src={slide.video}
//                       controls
//                       autoPlay
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                     {playingVideo !== slide.video || videoPaused ? (
//                       <button
//                         onClick={() => playPauseVideo(slide.video)}
//                         className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                       >
//                         <CiPlay1 size={24} />
//                       </button>
//                     ) : null}

//                     {/* Show pause button when video is playing */}
//                     {playingVideo === slide.video && !videoPaused && hovered === slide.id && (
//                       <button
//                         onClick={() => playPauseVideo(slide.video)}
//                         className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                       >
//                         <CiPause1 size={24} />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   className="text-center mt-8 mb-12"
//                 >
//                   <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
//                   <p className="text-gray-400">{slide.description}</p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         {/* Navigation buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           ←
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           →
//         </button>
//       </div>

//       {/* Slide counter */}
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
//         <div className="text-white text-sm">
//           {currentSlide + 1} / {slides.length}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

//========================================
//above


// perfect with new updates  

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CiPlay1, CiPause1 } from "react-icons/ci";

// const slides = [
//   {
//     id: 1,
//     title: "Agency Growth",
//     description: "Accelerate your agency's growth",
//     video: "/src/assets/video1.mp4",
//     image: "/src/assets/video1.webp",
//   },
//   {
//     id: 2,
//     title: "Client Success",
//     description: "Deliver exceptional results",
//     video: "/src/assets/video2.mp4",
//     image: "/src/assets/video1.webp",
//   },
//   {
//     id: 3,
//     title: "Development Process",
//     description: "Streamline your workflow",
//     video: "/src/assets/video3.mp4",
//     image: "/src/assets/video1.webp",
//   },
// ];

// function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video
//   const [videoPaused, setVideoPaused] = useState(true); // Track if the video is paused
//   const [hovered, setHovered] = useState(null); // Track which slide is being hovered

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to the next slide
//     setVideoPaused(true); // Reset video state
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to previous slide
//     setVideoPaused(true); // Reset video state
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowLeft") prevSlide();
//     if (e.key === "ArrowRight") nextSlide();
//   };

//   const playPauseVideo = (videoSrc) => {
//     if (playingVideo === videoSrc && !videoPaused) {
//       setVideoPaused(true); // Pause the video if it's currently playing
//     } else {
//       setPlayingVideo(videoSrc); // Play the video
//       setVideoPaused(false); // Set video to playing state
//     }
//   };

//   return (
//     <div
//       className="relative w-full max-w-[90vw] lg:max-w-[1000px] mx-auto px-4 py-20"
//       onKeyDown={handleKeyDown}
//       tabIndex="0"
//     >
//       <div className="relative flex justify-center items-center min-h-[40vh] lg:min-h-[50vh]">
//         <AnimatePresence mode="wait">
//           {slides.map((slide, index) => {
//             let position = index - currentSlide;
//             if (position < 0) position += slides.length;

//             return (
//               <motion.div
//                 key={slide.id}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{
//                   scale: position === 0 ? 1 : 0.7,
//                   opacity: position === 0 ? 1 : 0.3,
//                   x: position === 0 ? 0 : position === 1 ? "60%" : "-60%",
//                   zIndex: position === 0 ? 20 : 10,
//                 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute w-full max-w-3xl mx-auto"
//                 onMouseEnter={() => setHovered(slide.id)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div
//                   className={`relative aspect-video rounded-xl overflow-hidden shadow-2xl ${
//                     // Only for the active slide (where the video is playing), remove dull effect
//                     playingVideo === slide.video && !videoPaused
//                       ? "brightness-100" // Keep the active video at full brightness
//                       : "brightness-50" // Apply dull effect to the inactive ones
//                   }`}
//                 >
//                   {playingVideo === slide.video && !videoPaused ? (
//                     <video
//                       src={slide.video}
//                       controls
//                       autoPlay
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}

//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {playingVideo !== slide.video || videoPaused ? (
//                       <button
//                         onClick={() => playPauseVideo(slide.video)}
//                         className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                       >
//                         <CiPlay1 size={24} />
//                       </button>
//                     ) : null}

//                     {/* Show pause button when video is playing */}
//                     {playingVideo === slide.video && !videoPaused && hovered === slide.id && (
//                       <button
//                         onClick={() => playPauseVideo(slide.video)}
//                         className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                       >
//                         <CiPause1 size={24} />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   className="text-center mt-8 mb-12"
//                 >
//                   <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
//                   <p className="text-gray-400">{slide.description}</p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         {/* Navigation buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           ←
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           →
//         </button>
//       </div>

//       {/* Slide counter */}
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
//         <div className="text-white text-sm">
//           {currentSlide + 1} / {slides.length}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;


//above is perfect

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CiPlay1, CiPause1 } from "react-icons/ci";

// const slides = [
//   {
//     id: 1,
//     title: "Agency Growth",
//     description: "Accelerate your agency's growth",
//     video: "/src/assets/video1.mp4",
//     image: "/src/assets/video1.webp",
//   },
//   {
//     id: 2,
//     title: "Client Success",
//     description: "Deliver exceptional results",
//     video: "/src/assets/video2.mp4",
//     image: "/src/assets/video1.webp",
//   },
//   {
//     id: 3,
//     title: "Development Process",
//     description: "Streamline your workflow",
//     video: "/src/assets/video3.mp4",
//     image: "/src/assets/video1.webp",
//   },
// ];

// function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video
//   const [videoPaused, setVideoPaused] = useState(true); // Track if the video is paused
//   const [hovered, setHovered] = useState(null); // Track which slide is being hovered

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to the next slide
//     setVideoPaused(true); // Reset video state
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setPlayingVideo(null); // Stop the video when navigating to previous slide
//     setVideoPaused(true); // Reset video state
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowLeft") prevSlide();
//     if (e.key === "ArrowRight") nextSlide();
//   };

//   const playPauseVideo = (videoSrc) => {
//     if (playingVideo === videoSrc && !videoPaused) {
//       setVideoPaused(true); // Pause the video if it's currently playing
//     } else {
//       setPlayingVideo(videoSrc); // Play the video
//       setVideoPaused(false); // Set video to playing state
//     }
//   };

//   return (
//     <div
//       className="relative w-full max-w-[90vw] lg:max-w-[1000px] mx-auto px-4 py-20"
//       onKeyDown={handleKeyDown}
//       tabIndex="0"
//     >
//       <div className="relative flex justify-center items-center min-h-[40vh] lg:min-h-[50vh]">
//         <AnimatePresence mode="wait">
//           {slides.map((slide, index) => {
//             let position = index - currentSlide;
//             if (position < 0) position += slides.length;

//             return (
//               <motion.div
//                 key={slide.id}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{
//                   scale: position === 0 ? 1 : 0.7,
//                   opacity: position === 0 ? 1 : 0.3,
//                   x: position === 0 ? 0 : position === 1 ? "60%" : "-60%",
//                   zIndex: position === 0 ? 20 : 10,
//                 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute w-full max-w-3xl mx-auto"
//                 onMouseEnter={() => setHovered(slide.id)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div
//                   className={`relative aspect-video rounded-xl overflow-hidden shadow-2xl ${
//                     // No effect or filter for active slides
//                     playingVideo === slide.video && !videoPaused
//                       ? "brightness-100" // Keep the active video at full brightness
//                       : "" // No dull effect for inactive slides or videos
//                   }`}
//                 >
//                   {playingVideo === slide.video && !videoPaused ? (
//                     <video
//                       src={slide.video}
//                       controls
//                       autoPlay
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}

//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {playingVideo !== slide.video || videoPaused ? (
//                       <button
//                         onClick={() => playPauseVideo(slide.video)}
//                         className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                       >
//                         <CiPlay1 size={24} />
//                       </button>
//                     ) : null}

//                     {/* Show pause button when video is playing */}
//                     {playingVideo === slide.video && !videoPaused && hovered === slide.id && (
//                       <button
//                         onClick={() => playPauseVideo(slide.video)}
//                         className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
//                       >
//                         <CiPause1 size={24} />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   className="text-center mt-8 mb-12"
//                 >
//                   <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
//                   <p className="text-gray-400">{slide.description}</p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         {/* Navigation buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           ←
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           →
//         </button>
//       </div>

//       {/* Slide counter */}
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
//         <div className="text-white text-sm">
//           {currentSlide + 1} / {slides.length}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;


//above 28-11


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiPlay1, CiPause1 } from "react-icons/ci";

const slides = [
  {
    id: 1,
    title: "Agency Growth",
    description: "Accelerate your agency's growth",
    video: "/src/assets/video1.mp4",
    image: "/src/assets/video1.webp",
  },
  {
    id: 2,
    title: "Client Success",
    description: "Deliver exceptional results",
    video: "/src/assets/video2.mp4",
    image: "/src/assets/video1.webp",
  },
  {
    id: 3,
    title: "Development Process",
    description: "Streamline your workflow",
    video: "/src/assets/video3.mp4",
    image: "/src/assets/video1.webp",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video
  const [videoPaused, setVideoPaused] = useState(true); // Track if the video is paused
  const [hovered, setHovered] = useState(null); // Track which slide is being hovered

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setPlayingVideo(null); // Stop the video when navigating to the next slide
    setVideoPaused(true); // Reset video state
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setPlayingVideo(null); // Stop the video when navigating to previous slide
    setVideoPaused(true); // Reset video state
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  const playPauseVideo = (videoSrc) => {
    if (playingVideo === videoSrc && !videoPaused) {
      setVideoPaused(true); // Pause the video if it's currently playing
    } else {
      setPlayingVideo(videoSrc); // Play the video
      setVideoPaused(false); // Set video to playing state
    }
  };

  return (
    <div
      className="relative w-full max-w-[90vw] lg:max-w-[1000px] mx-auto px-4 py-20"
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div className="relative flex justify-center items-center min-h-[40vh] lg:min-h-[50vh]">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            let position = index - currentSlide;
            if (position < 0) position += slides.length;

            return (
              <motion.div
                key={slide.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: position === 0 ? 1 : 0.7,
                  opacity: position === 0 ? 1 : 0.3,
                  x: position === 0 ? 0 : position === 1 ? "60%" : "-60%",
                  zIndex: position === 0 ? 20 : 10,
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full max-w-3xl mx-auto"
                onMouseEnter={() => setHovered(slide.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className={`relative aspect-video rounded-xl overflow-hidden shadow-2xl ${
                    // No effect or filter for active slides
                    playingVideo === slide.video && !videoPaused
                      ? "brightness-100" // Keep the active video at full brightness
                      : "" // No dull effect for inactive slides or videos
                  }`}
                >
                  {playingVideo === slide.video && !videoPaused ? (
                    <video
                      src={slide.video}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center">
                    {playingVideo !== slide.video || videoPaused ? (
                      <button
                        onClick={() => playPauseVideo(slide.video)}
                        className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
                      >
                        <CiPlay1 size={24} />
                      </button>
                    ) : null}

                    {/* Show pause button when video is playing */}
                    {playingVideo === slide.video && !videoPaused && hovered === slide.id && (
                      <button
                        onClick={() => playPauseVideo(slide.video)}
                        className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
                      >
                        <CiPause1 size={24} />
                      </button>
                    )}
                  </div>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center mt-8 mb-12"
                >
                  <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-gray-400">{slide.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-4xl font-light z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        <div className="text-white text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}

export default Carousel;