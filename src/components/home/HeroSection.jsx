// import React from 'react';

// function HeroSection() {
//   return (
//     <section className="bg-black text-white py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-5xl font-bold mb-8">
//           Accelerate your<br />agency's growth
//         </h1>
//         <p className="text-lg mb-8 max-w-2xl mx-auto">
//           Whether you need to win new business or wow an existing client,
//           Webflow empowers agencies to deliver high-quality client work,
//           faster — without growing your dev budget.
//         </p>
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
//           Book a Demo
//         </button>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

//?
// import React from 'react';

// function HeroSection() {
//   return (
//     <section className="relative text-white py-20">
//       {/* Video background */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source
//             src="./earth-spinning.mp4" // Path to your 4K Earth video
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <h1 className="text-5xl font-bold mb-8">
//           Accelerate your<br />agency's growth
//         </h1>
//         <p className="text-lg mb-8 max-w-2xl mx-auto">
//           Whether you need to win new business or wow an existing client,
//           Webflow empowers agencies to deliver high-quality client work,
//           faster — without growing your dev budget.
//         </p>
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
//           Book a Demo
//         </button>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

// import React from 'react';

// function HeroSection() {
//   return (
//     <section className="relative text-white py-20">
//       {/* Video background with black filter */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           playbackRate={0.12} // Slow down the video to 12% speed
//         >
//           <source
//             // Change the source path here to your video file
//             src="./earth3.mp4"  // Video file (e.g., your 4K Earth video)
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         {/* Dimmed black gradient overlay */}
//         {/* Reduced opacity for a more subtle dimming effect */}
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60">
//           {/* This section applies a black gradient filter over the video with 60% opacity */}
//           {/* "from-black" at the bottom, fading to transparent at the top */}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <h1 className="text-5xl font-bold mb-8 text-shadow-lg">
//           Accelerate your<br />agency's growth
//         </h1>
//         <p className="text-lg mb-8 max-w-2xl mx-auto text-shadow-lg">
//           Whether you need to win new business or wow an existing client,
//           Webflow empowers agencies to deliver high-quality client work,
//           faster — without growing your dev budget.
//         </p>
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
//           Book a Demo
//         </button>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
import React from 'react';

function HeroSection() {
  return (
    <section className="relative h-screen text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="earth3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Fade Effect on Video */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-1"></div> {/* Fade from black to transparent */}

      {/* Content Overlay */}
      <div className="relative z-10 bg-black bg-opacity-20 h-full flex flex-col justify-start items-center text-center px-4 pt-24">
        <h1 className="text-6xl font-bold mb-8">
          Globalize Your Content <br />with Rian's AI-Localization
        </h1>
        <p className="text-2xl mb-8 max-w-2xl">
          Whether you're a YouTuber, production house, or content creator, we help you expand your global reach, seamlessly localizing your content to connect with audiences across borders and cultures.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
          GO GLOBAL
        </button>
      </div>
    </section>
  );
}

export default HeroSection;


// import React, { useEffect } from 'react';

// function HeroSection() {
//   useEffect(() => {
//     // JavaScript code for the globe demo
    
//     const config = {
//       percent: 0,
//       lat: 0,
//       lng: 0,
//       segX: 14,
//       segY: 12,
//       isHaloVisible: true,
//       isPoleVisible: true,
//       autoSpin: true,
//       zoom: 0,
//       skipPreloaderAnimation: false,
//       goToHongKong: function() {
//         goTo(22.28552, 114.15769);
//       }
//     };

//     let stats;
//     let imgs;
//     let preloader;
//     let preloadPercent;
//     let globeDoms;
//     let vertices;

//     let world;
//     let worldBg;
//     let globe;
//     let globeContainer;
//     let globePole;
//     let globeHalo;

//     let pixelExpandOffset = 1.5;
//     let rX = 0;
//     let rY = 0;
//     let rZ = 0;
//     let sinRX;
//     let sinRY;
//     let sinRZ;
//     let cosRX;
//     let cosRY;
//     let cosRZ;
//     let dragX;
//     let dragY;
//     let dragLat;
//     let dragLng;

//     let isMouseDown = false;
//     let isTweening = false;
//     let tick = 1;

//     const URLS = {
//       bg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6043/css_globe_bg.jpg',
//       diffuse: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6043/css_globe_diffuse.jpg',
//       halo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6043/css_globe_halo.png',
//     };

//     const transformStyleName = PerspectiveTransform.transformStyleName;

//     function init(ref) {
//       world = document.querySelector('.world');
//       worldBg = document.querySelector('.world-bg');
//       worldBg.style.backgroundImage = 'url(' + URLS.bg + ')';
//       globe = document.querySelector('.world-globe');
//       globeContainer = document.querySelector('.world-globe-doms-container');
//       globePole = document.querySelector('.world-globe-pole');
//       globeHalo = document.querySelector('.world-globe-halo');
//       globeHalo.style.backgroundImage = 'url(' + URLS.halo + ')';
      
//       regenerateGlobe();

//       const gui = new dat.GUI();
//       gui.add(config, 'lat', -90, 90).listen();
//       gui.add(config, 'lng', -180, 180).listen();
//       gui.add(config, 'isHaloVisible');
//       gui.add(config, 'isPoleVisible');
//       gui.add(config, 'autoSpin');
//       gui.add(config, 'goToHongKong');
//       gui.add(config, 'zoom', 0, 1).listen();

//       stats = new Stats();
//       stats.domElement.style.position = 'absolute';
//       stats.domElement.style.left = 0;
//       stats.domElement.style.top = 0;
//       document.body.appendChild(stats.domElement);

//       // events
//       world.ondragstart = function () {return false;};
//       world.addEventListener('mousedown', onMouseDown);
//       world.addEventListener('mousemove', onMouseMove);
//       world.addEventListener('mouseup', onMouseUp);
//       world.addEventListener('touchstart', touchPass(onMouseDown));
//       world.addEventListener('touchmove', touchPass(onMouseMove));
//       world.addEventListener('touchend', touchPass(onMouseUp));

//       loop();
//     }

//     function touchPass(func) {
//       return function(evt) {
//         evt.preventDefault();
//         func.call(this, {pageX: evt.changedTouches[0].pageX, pageY: evt.changedTouches[0].pageY});
//       };
//     }

//     function onMouseDown(evt) {
//       isMouseDown = true;
//       dragX = evt.pageX;
//       dragY = evt.pageY;
//       dragLat = config.lat;
//       dragLng = config.lng;
//     }

//     function onMouseMove(evt) {
//       if(isMouseDown) {
//         const dX = evt.pageX - dragX;
//         const dY = evt.pageY - dragY;
//         config.lat = clamp(dragLat + dY * 0.5, -90, 90);
//         config.lng = clampLng(dragLng - dX * 0.5, -180, 180);
//       }
//     }

//     function onMouseUp(evt) {
//       if(isMouseDown) {
//         isMouseDown = false;
//       }
//     }

//     function regenerateGlobe() {
//       let dom, domStyle;
//       let x, y;
//       globeDoms = [];
//       while (dom = globeContainer.firstChild) {
//         globeContainer.removeChild(dom);
//       }

//       const segX = config.segX;
//       const segY = config.segY;
//       const diffuseImgBackgroundStyle = 'url(' + URLS.diffuse + ')';
//       const segWidth = 1600 / segX | 0;
//       const segHeight = 800 / segY | 0;

//       vertices = [];

//       let verticesRow;
//       const radius = (536) / 2;

//       const phiStart = 0;
//       const phiLength = Math.PI * 2;

//       const thetaStart = 0;
//       const thetaLength = Math.PI;

//       for (y = 0; y <= segY; y++) {
//         verticesRow = [];
//         for (x = 0; x <= segX; x++) {
//           const u = x / segX;
//           const v = 0.05 + y / segY * (1 - 0.1);

//           const vertex = {
//             x: -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength),
//             y: -radius * Math.cos(thetaStart + v * thetaLength),
//             z: radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength),
//             phi: phiStart + u * phiLength,
//             theta: thetaStart + v * thetaLength
//           };
//           verticesRow.push(vertex);
//         }
//         vertices.push(verticesRow);
//       }

//       for (y = 0; y < segY; ++y) {
//         for (x = 0; x < segX; ++x) {
//           dom = document.createElement('div');
//           domStyle = dom.style;
//           domStyle.position = 'absolute';
//           domStyle.width = segWidth + 'px';
//           domStyle.height = segHeight + 'px';
//           domStyle.overflow = 'hidden';
//           domStyle[PerspectiveTransform.transformOriginStyleName] = '0 0';
//           domStyle.backgroundImage = diffuseImgBackgroundStyle;
//           dom.perspectiveTransform = new PerspectiveTransform(dom, segWidth, segHeight);
//           dom.topLeft = vertices[y][x];
//           dom.topRight = vertices[y][x + 1];
//           dom.bottomLeft = vertices[y + 1][x];
//           dom.bottomRight = vertices[y + 1][x + 1];
//           domStyle.backgroundPosition = (-segWidth * x) + 'px ' + (-segHeight * y) + 'px';
//           globeContainer.appendChild(dom);
//           globeDoms.push(dom);
//         }
//       }
//     }

//     function loop() {
//       requestAnimationFrame(loop);
//       stats.begin();
//       render();
//       stats.end();
//     }

//     function render() {
//       if(config.autoSpin && !isMouseDown && !isTweening) {
//         config.lng = clampLng(config.lng - 0.2);
//       }

//       rX = config.lat / 180 * Math.PI;
//       rY = (clampLng(config.lng) - 270) / 180 * Math.PI;

//       globePole.style.display = config.isPoleVisible ? 'block' : 'none';
//       globeHalo.style.display = config.isHaloVisible ? 'block' : 'none';

//       let ratio = Math.pow(config.zoom, 1.5);
//       pixelExpandOffset = 1.5 + (ratio) * -1.25;
//       ratio = 1 + ratio * 3;
//       globe.style[transformStyleName] = 'scale3d(' + ratio + ',' + ratio + ',1)';
//       ratio = 1 + Math.pow(config.zoom, 3) * 0.3;
//       worldBg.style[transformStyleName] = 'scale3d(' + ratio + ',' + ratio + ',1)';

//       transformGlobe();
//     }

//     function clamp(x, min, max) {
//       return x < min ? min : x > max ? max : x;
//     }

//     function clampLng(lng) {
//       return ((lng + 180) % 360) - 180;
//     }

//     function transformGlobe() {
//       let dom, perspectiveTransform;
//       let x, y, v1, v2, v3, v4, vertex, verticesRow, i, len;
//       if(tick ^= 1) {
//         sinRY = Math.sin(rY);
//         sinRX = Math.sin(-rX);
//         sinRZ = Math.sin(0);
//         cosRY = Math.cos(rY);
//         cosRX = Math.cos(-rX);
//         cosRZ = Math.cos(0);
//       }

//       for(i = 0, len = globeDoms.length; i < len; ++i) {
//         dom = globeDoms[i];
//         verticesRow = vertices[i / config.segX | 0];

//         v1 = verticesRow[i % config.segX];
//         v2 = verticesRow[(i + 1) % config.segX];
//         v3 = verticesRow[(i + config.segX) % config.segX];
//         v4 = verticesRow[(i + config.segX + 1) % config.segX];

//         v1 = rotateV(v1, sinRX, cosRX, sinRY, cosRY, sinRZ, cosRZ);
//         v2 = rotateV(v2, sinRX, cosRX, sinRY, cosRY, sinRZ, cosRZ);
//         v3 = rotateV(v3, sinRX, cosRX, sinRY, cosRY, sinRZ, cosRZ);
//         v4 = rotateV(v4, sinRX, cosRX, sinRY, cosRY, sinRZ, cosRZ);

//         perspectiveTransform = dom.perspectiveTransform;

//         perspectiveTransform.set(v1, v2, v3, v4);
//         perspectiveTransform.update();
//       }
//     }

//     function rotateV(v, sinRX, cosRX, sinRY, cosRY, sinRZ, cosRZ) {
//       let x = v.x;
//       let y = v.y;
//       let z = v.z;
//       let temp;
//       x = x * cosRY - z * sinRY;
//       z = z * cosRY + x * sinRY;
//       temp = y * cosRX - z * sinRX;
//       z = y * sinRX + z * cosRX;
//       y = temp;
//       temp = x * cosRZ - y * sinRZ;
//       y = x * sinRZ + y * cosRZ;
//       x = temp;
//       return {x, y, z};
//     }

//     init();
//   }, []);

//   return (
//     <section className="relative bg-black text-white py-20 min-h-screen">
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(/earth.jpg)', // Replace with correct image path
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: 0.3,
//         }}
//       ></div>
//       <div className="world absolute top-0 left-0 w-full h-full">
//         <div className="world-bg"></div>
//         <div className="world-globe">
//           <div className="world-globe-pole"></div>
//           <div className="world-globe-doms-container"></div>
//           <div className="world-globe-halo"></div>
//         </div>
//       </div>
//       <div className="relative z-10 container mx-auto px-4 text-center">
//         <h1 className="text-5xl font-bold mb-8">
//           Accelerate your<br />agency's growth
//         </h1>
//         <p className="text-lg mb-8 max-w-2xl mx-auto">
//           Whether you need to win new business or wow an existing client,
//           Webflow empowers agencies to deliver high-quality client work,
//           faster — without growing your dev budget.
//         </p>
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
//           Book a Demo
//         </button>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
