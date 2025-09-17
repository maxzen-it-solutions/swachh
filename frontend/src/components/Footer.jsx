
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import bg from "../assets/bg.jpg";
// import sidetqo from "../assets/SH2.png";
// import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   const [showProducts, setShowProducts] = useState(false);

//   const handleLinkClick = () => {
//     setShowProducts(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer
//       className="relative text-white py-8 bg-cover bg-center"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#667D60] bg-opacity-90"></div>

//       <div className="flex flex-col md:flex-row justify-between items-center relative w-full max-w-7xl mx-auto px-6 md:px-8 gap-12">
//         {/* Left - Logo & Brand */}
//         <div className="flex flex-col items-center sm:items-start">
//           <img src={logo} alt="Logo" className="w-28 h-auto mb-3" />
//           <h2 className="text-xl sm:text-2xl font-bold">Saffron & Shilajit</h2>
//           <p className="text-sm mt-2 md:w-72 xl:w-80 lg:w-72 leading-relaxed text-center sm:text-left">
//             Bringing you nature’s purest treasures – premium saffron & shilajit
//             for health, wellness, and vitality.
//           </p>
//         </div>

//         {/* Middle - Navigation */}
//         <div className="flex flex-col space-y-3 text-center sm:text-left">
//           <h3 className="text-lg font-semibold">Quick Links</h3>

//           <Link to="/" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
//             Home
//           </Link>
//           <Link to="/products" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
//             Products
//           </Link>
//           <Link to="/about" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
//             About
//           </Link>
//           <Link to="/Blog" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
//             Blogs
//           </Link>
//           <Link to="/contact" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
//             Contact
//           </Link>
//         </div>

//         {/* Right - Contact Info */}
//         <div className="flex flex-col items-center sm:items-start gap-6">
//           <img src={sidetqo} alt="footerImg" className="w-24 sm:w-32 lg:w-40 h-auto rounded" />

//           <div className="text-center sm:text-left space-y-2">
//             <h3 className="text-lg font-semibold">Get in Touch</h3>
//             <p className="text-sm">Email: support@saffronshilajit.com</p>
//             <p className="text-sm">Phone: +91 9160213146</p>
//             <p className="text-sm">Mon - Fri: 10am - 5pm</p>
//             <div className="flex justify-center sm:justify-start gap-4 mt-3">
//               <a
//                 href="https://www.instagram.com/swacchh_products?igsh=OWo3NjJzMGc0dXF1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-pink-400 text-2xl sm:text-3xl"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400 text-2xl sm:text-3xl"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://wa.me/9160213146"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-green-400 text-2xl sm:text-3xl"
//               >
//                 <FaWhatsapp />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <p className="relative text-white mt-10 pt-4 text-center text-xs sm:text-sm md:text-base border-t border-white/20">
//         © {new Date().getFullYear()} Saffron & Shilajit. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import bg from "../assets/bg.jpg";
import sidetqo from "../assets/SH2.png";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Fssai from "../assets/fssai-seeklogo.png"

const Footer = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleLinkClick = () => {
    setShowProducts(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative text-white py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#667D60] bg-opacity-90"></div>

      <div className="flex flex-col md:flex-row justify-between items-center relative w-full max-w-7xl mx-auto px-6 md:px-8 gap-12">
        {/* Left - Logo & Brand */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <img src={logo} alt="Logo" className="w-28 h-auto mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold">Saffron & Shilajit</h2>
          <p className="text-sm mt-2 md:w-72 xl:w-80 lg:w-72 leading-relaxed text-center sm:text-left">
            Bringing you nature’s purest treasures – premium saffron & shilajit
            for health, wellness, and vitality.
          </p>
          <div className="bg-white w-24 h-12 flex flex-row justify-center items-center">
<img src={Fssai} alt="Logo" className="w-24 lg:w-28 xl:w-20 md:w-24 h-auto " />
          </div>
          
        </div>

        {/* Middle - Navigation */}
        <div className="flex flex-col space-y-3 text-center sm:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <Link to="/" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
            Home
          </Link>
          <Link to="/products" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
            Products
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
            About
          </Link>
          <Link to="/Blog" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
            Blogs
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-yellow-200 transition">
            Contact
          </Link>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <img src={sidetqo} alt="footerImg" className="w-24 sm:w-32 lg:w-40 h-auto rounded" />

          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="text-sm">Email: support@saffronshilajit.com</p>
            <p className="text-sm">Phone: +91 9160213146</p>
            <p className="text-sm">Mon - Fri: 10am - 5pm</p>
            <div className="flex justify-center sm:justify-start gap-4 mt-3">
              <a
                href="https://www.instagram.com/swacchh_products?igsh=OWo3NjJzMGc0dXF1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 text-2xl sm:text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 text-2xl sm:text-3xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/9160213146"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 text-2xl sm:text-3xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="relative text-white mt-10 pt-4 text-center text-xs sm:text-sm md:text-base border-t border-white/20">
        © {new Date().getFullYear()} Saffron & Shilajit. All Rights Reserved. Developed By Maxzen.Tech
      </p>
    </footer>
  );
};

export default Footer;