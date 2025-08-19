

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";

// function Header() {
//   const [openDropdown, setOpenDropdown] = useState(false);

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="card shadow-lg bg-[#667D60] w-full h-12"></div>

//       {/* Main Navbar */}
//       <div className="card shadow-lg bg-[#f8f5ee] w-full h-24">
//         <div className="flex flex-row justify-between items-center px-10 h-full">
//           {/* Logo */}
//           <div>
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="h-20 w-auto cursor-pointer"
//               />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex flex-row justify-center items-center space-x-10 font-bold text-gray-700 relative">
//             <Link to="/" className="hover:text-green-600 transition">
//               Home
//             </Link>

//             {/* Products Dropdown - Click to Open */}
//             <div className="relative">
//               <button
//                 className="hover:text-green-600 transition flex items-center"
//                 onClick={() => setOpenDropdown(!openDropdown)}
//               >
//                 Products ▾
//               </button>

//               {openDropdown && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
//                   <Link
//                     to="/productDetail1"
//                     className="block px-4 py-2 text-gray-700 hover:bg-green-100"
//                     onClick={() => setOpenDropdown(false)} // closes after click
//                   >
//                     Saffron
//                   </Link>
//                   <Link
//                     to="/productDetail2"
//                     className="block px-4 py-2 text-gray-700 hover:bg-green-100"
//                     onClick={() => setOpenDropdown(false)} // closes after click
//                   >
//                     Shilajit
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/about" className="hover:text-green-600 transition">
//               About Us
//             </Link>
//             <Link to="/blog" className="hover:text-green-600 transition">
//               Blog
//             </Link>
//             <Link to="/contact" className="hover:text-green-600 transition">
//               Contact Us
//             </Link>
//           </div>

//           {/* Login Button */}
//           <div>
//             <Link to="/login">
//               <button className="bg-[#667D60] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
//                 Log In
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="card shadow-lg bg-[#667D60] w-full h-12"></div>

      {/* Main Navbar */}
      <div className="card shadow-lg bg-[#f8f5ee] w-full h-24">
        <div className="flex flex-row justify-between items-center px-10 h-full">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row justify-center items-center space-x-10 font-bold text-gray-700 relative">
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>

            {/* Products with dropdown */}
            <div className="relative flex items-center">
              {/* Main link to Products page */}
              <Link
                to="/products"
                className="hover:text-green-600 transition"
                onClick={() => setOpenDropdown(false)} // close dropdown if open
              >
                Products
              </Link>

              {/* Arrow button to toggle dropdown */}
              <button
                className="ml-1 text-gray-700 hover:text-green-600 transition"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                ▾
              </button>

              {openDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <Link
                    to="/productDetail1"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Saffron
                  </Link>
                  <Link
                    to="/productDetail2"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Shilajit
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="hover:text-green-600 transition">
              About Us
            </Link>
            <Link to="/blog" className="hover:text-green-600 transition">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-green-600 transition">
              Contact Us
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <Link to="/login">
              <button className="bg-[#667D60] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
