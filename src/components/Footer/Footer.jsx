// import React from "react";
// import '/src/assets/india.png'
// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-6">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//         {/* Address Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Address</h3>
//           <div className="flex items-start space-x-3">
//             <img src="/src/assets/india.png" alt="India Flag" className="w-6 h-6" />
//             <p className="text-sm">
//               Rikaian Technology Pvt. Ltd. <br />
//               Office No. 3, S. No. 846, <br />
//               Near Marathwada College, Shivajinagar, Pune 411004. <br />
//               Contact: +91 89561 26959
//             </p>
//           </div>
//           <div className="flex items-start mt-4 space-x-3">
//             <img src="/src/assets/japan.png" alt="Japan Flag" className="w-6 h-6" />
//             <p className="text-sm">
//               Rikaian Technology Pvt. Ltd. <br />
//               Fabbit Kyobashi 2F, <br />
//               1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
//             </p>
//           </div>
//         </div>

//         {/* Subscription Form */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full p-2 text-black rounded"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-2 text-black rounded"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Footer Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline">Log In</a></li>
//             <li><a href="#" className="hover:underline">Book A Demo</a></li>
//             <li><a href="#" className="hover:underline">Ethic Code</a></li>
//             <li><a href="#" className="hover:underline">Partners</a></li>
//             <li><a href="#" className="hover:underline">Careers</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//             <li><a href="#" className="hover:underline">Privacy</a></li>
//             <li><a href="#" className="hover:underline">Terms</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-10 border-t border-gray-700 pt-4 text-center">
//         <div className="flex justify-center space-x-4">
//           <a href="#" aria-label="LinkedIn">
//             <img src="/src/assets/Linkedin.png" alt="LinkedIn" className="w-5 h-5" />
//           </a>
//           <a href="#" aria-label="YouTube">
//             <img src="/src/assets/youtube.png" alt="YouTube" className="w-5 h-5" />
//           </a>
//         </div>
//         <p className="mt-2 text-sm">
//           Email: <a href="mailto:sales@rian.io" className="underline">sales@rian.io</a>
//         </p>
//         <p className="mt-2 text-sm">&copy; 2024 Rikaian Technology Pvt. Ltd.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";
// import indiaFlag from '/src/assets/india.png';
// import japanFlag from '/src/assets/japan.png';
// import linkedinIcon from '/src/assets/Linkedin.png';
// import youtubeIcon from '/src/assets/youtube.png';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-6">
//       {/* Main Footer Content */}
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Address Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Address</h3>
//           <div className="flex items-start space-x-3 mb-6">
//             <img src={indiaFlag} alt="India Flag" className="w-8 h-8" />
//             <p className="text-sm leading-6">
//               Rikaian Technology Pvt. Ltd. <br />
//               Office No. 3, S. No. 846, <br />
//               Near Marathwada College, Shivajinagar, Pune 411004. <br />
//               Contact: +91 89561 26959
//             </p>
//           </div>
//           <div className="flex items-start space-x-3">
//             <img src={japanFlag} alt="Japan Flag" className="w-8 h-8" />
//             <p className="text-sm leading-6">
//               Rikaian Technology Pvt. Ltd. <br />
//               Fabbit Kyobashi 2F, <br />
//               1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
//             </p>
//           </div>
//         </div>

//         {/* Subscription Form */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Subscribe</h3>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm mb-1">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full p-2 text-black rounded border"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm mb-1">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-2 text-black rounded border"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">Log In</a></li>
//             <li><a href="#" className="hover:underline">Book A Demo</a></li>
//             <li><a href="#" className="hover:underline">Ethic Code</a></li>
//             <li><a href="#" className="hover:underline">Partners</a></li>
//             <li><a href="#" className="hover:underline">Careers</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//             <li><a href="#" className="hover:underline">Privacy</a></li>
//             <li><a href="#" className="hover:underline">Terms</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-10 border-t border-gray-700 pt-6 text-center">
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="#" aria-label="LinkedIn">
//             <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
//           </a>
//           <a href="#" aria-label="YouTube">
//             <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
//           </a>
//         </div>
//         <p className="text-sm">
//           Email: <a href="mailto:sales@rian.io" className="underline">sales@rian.io</a>
//         </p>
//         <p className="text-sm mt-2">&copy; 2024 Rikaian Technology Pvt. Ltd.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import indiaFlag from '/src/assets/india.png';
// import japanFlag from '/src/assets/japan.png';
// import linkedinIcon from '/src/assets/Linkedin.png';
// import youtubeIcon from '/src/assets/youtube.png';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-6">
//       {/* Main Footer Content */}
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Address Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Address</h3>
//           <div className="flex items-start space-x-3 mb-6">
//             <img src={indiaFlag} alt="India Flag" className="w-8 h-8" />
//             <p className="text-sm leading-6">
//               Rikaian Technology Pvt. Ltd. <br />
//               Office No. 3, S. No. 846, <br />
//               Near Marathwada College, Shivajinagar, Pune 411004. <br />
//               Contact: +91 89561 26959
//             </p>
//           </div>
//           <div className="flex items-start space-x-3">
//             <img src={japanFlag} alt="Japan Flag" className="w-8 h-8" />
//             <p className="text-sm leading-6">
//               Rikaian Technology Pvt. Ltd. <br />
//               Fabbit Kyobashi 2F, <br />
//               1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
//             </p>
//           </div>
//         </div>

//         {/* Subscription Form */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Subscribe</h3>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm mb-1">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full p-2 text-black rounded border"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm mb-1">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-2 text-black rounded border"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Quick Links */}
//         {/* <div>
//           <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">Log in</a></li>
//             <li><a href="#" className="hover:underline">Book A Demo</a></li>
//             <li><a href="#" className="hover:underline">Ethic Code</a></li>
//             <li><a href="#" className="hover:underline">Partners</a></li>
//             <li><a href="#" className="hover:underline">Careers</a></li>
//             <li><a href="#" className="hover:underline">Contact us</a></li>
//             <li><a href="#" className="hover:underline">Privacy</a></li>
//             <li><a href="#" className="hover:underline">Terms</a></li>
//           </ul>
//         </div> */}
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-10 border-t border-gray-700 pt-6">
//         {/* Quick Links Underline Section */}
//         <ul className="flex flex-wrap justify-center space-x-4 mb-4 text-sm">
//           <li><a href="#" className="hover:underline">Log in</a></li>
//           <li><a href="#" className="hover:underline">Book A Demo</a></li>
//           <li><a href="#" className="hover:underline">Ethic Code</a></li>
//           <li><a href="#" className="hover:underline">Partners</a></li>
//           <li><a href="#" className="hover:underline">Careers</a></li>
//           <li><a href="#" className="hover:underline">Contact us</a></li>
//           <li><a href="#" className="hover:underline">Privacy</a></li>
//           <li><a href="#" className="hover:underline">Terms</a></li>
//         </ul>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="#" aria-label="LinkedIn">
//             <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
//           </a>
//           <a href="#" aria-label="YouTube">
//             <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
//           </a>
//         </div>

//         {/* Contact and Copyright */}
//         <p className="text-sm text-center">
//           Email: <a href="mailto:sales@rian.io" className="underline">sales@rian.io</a>
//         </p>
//         <p className="text-sm text-center mt-2">&copy; 2024 Rikaian Technology Pvt. Ltd.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import indiaFlag from '/src/assets/india.png';
// import japanFlag from '/src/assets/japan.png';
// import linkedinIcon from '/src/assets/Linkedin.png';
// import youtubeIcon from '/src/assets/youtube.png';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-6">
//       {/* Main Footer Content */}
//       <div className="container mx-auto flex flex-col items-center lg:grid lg:grid-cols-3 gap-8">
//         {/* Address Section */}
//         <div className="text-center lg:text-left mb-8 lg:mb-0">
//           <h3 className="text-xl font-semibold mb-6">Address</h3>

//           {/* Address Row for India and Japan */}
//           <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-10 mb-6">
//             {/* India Address */}
//             <div className="flex flex-col items-center lg:items-start">
//               <img src={indiaFlag} alt="India Flag" className="w-8 h-8 mb-3" />
//               <p className="text-sm leading-6">
//                 Rikaian Technology Pvt. Ltd. <br />
//                 Office No. 3, S. No. 846, <br />
//                 Near Marathwada College, Shivajinagar, Pune 411004. <br />
//                 Contact: +91 89561 26959
//               </p>
//             </div>

//             {/* Japan Address */}
//             <div className="flex flex-col items-center lg:items-start">
//               <img src={japanFlag} alt="Japan Flag" className="w-8 h-8 mb-3" />
//               <p className="text-sm leading-6">
//                 Rikaian Technology Pvt. Ltd. <br />
//                 Fabbit Kyobashi 2F, <br />
//                 1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Subscription Form */}
//         <div className="flex flex-col items-center">
//           <h3 className="text-xl font-semibold mb-6">Subscribe</h3>
//           <form className="space-y-4 w-full max-w-xs">
//             <div>
//               <label htmlFor="name" className="block text-sm mb-1">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full p-2 text-black rounded border"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm mb-1">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-2 text-black rounded border"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-10 border-t border-gray-700 pt-6">
//         {/* Quick Links Underline Section */}
//         <ul className="flex flex-wrap justify-center space-x-4 mb-4 text-sm">
//           <li><a href="#" className="hover:underline">Log in</a></li>
//           <li><a href="#" className="hover:underline">Book A Demo</a></li>
//           <li><a href="#" className="hover:underline">Ethic Code</a></li>
//           <li><a href="#" className="hover:underline">Partners</a></li>
//           <li><a href="#" className="hover:underline">Careers</a></li>
//           <li><a href="#" className="hover:underline">Contact us</a></li>
//           <li><a href="#" className="hover:underline">Privacy</a></li>
//           <li><a href="#" className="hover:underline">Terms</a></li>
//         </ul>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="#" aria-label="LinkedIn">
//             <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
//           </a>
//           <a href="#" aria-label="YouTube">
//             <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
//           </a>
//         </div>

//         {/* Contact and Copyright */}
//         <p className="text-sm text-center">
//           Email: <a href="mailto:sales@rian.io" className="underline">sales@rian.io</a>
//         </p>
//         <p className="text-sm text-center mt-2">&copy; 2024 Rikaian Technology Pvt. Ltd.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import indiaFlag from '/src/assets/india.png';
import japanFlag from '/src/assets/japan.png';
import linkedinIcon from '/src/assets/Linkedin.png';
import youtubeIcon from '/src/assets/youtube.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Address Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Address</h3>
          
          {/* India Address */}
          <div className="flex items-center space-x-3 mb-6 text-center lg:text-left">
            <img src={indiaFlag} alt="India Flag" className="w-8 h-8" />
            <p className="text-sm leading-6">
              Rikaian Technology Pvt. Ltd. <br />
              Office No. 3, S. No. 846, <br />
              Near Marathwada College, Shivajinagar, Pune 411004. <br />
              Contact: +91 89561 26959
            </p>
          </div>

          {/* Japan Address */}
          <div className="flex items-center space-x-3 text-center lg:text-left">
            <img src={japanFlag} alt="Japan Flag" className="w-8 h-8" />
            <p className="text-sm leading-6">
              Rikaian Technology Pvt. Ltd. <br />
              Fabbit Kyobashi 2F, <br />
              1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
            </p>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="flex flex-col items-center lg:w-1/3">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Subscribe</h3>
          <form className="space-y-4 w-full max-w-xs mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name:</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 text-black rounded border"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 text-black rounded border"
                placeholder="Enter your email"
              />
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
          </a>
        </div>

        {/* Contact and Copyright */}
        <p className="text-sm text-center">
          Email: <a href="mailto:sales@rian.io" className="underline">sales@rian.io</a>
        </p>
        <p className="text-sm text-center mt-2">&copy; 2024 Rikaian Technology Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
