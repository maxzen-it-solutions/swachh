// import React from 'react'
// import sidethree from "../assets/SA4.webp"
// import vec2 from "../assets/icon.png"
// import shil1 from "../assets/shil1.jpg";
// import saf1 from "../assets/saf1.jpg";
// import { Link } from "react-router-dom";

// function Creambodyone() {
//   return (
//     <section className="py-20 bg-[#FFF7EC]">

//     <div className="max-w-xl mx-auto px-2 sm:px-6 lg:px-8">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
//           Our Premium Products
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
//           {/* Product Card 1 */}
//           <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105  p-4 sm:p-6 text-center">
//             <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Shilajit Resin</h3>
//             <div className="overflow-hidden rounded-2xl mb-4">
//               <img
//                 src={shil1}
//                 alt="Shilajit Resin"
//                 className="w-full object-contain max-h-60 sm:max-h-80 "
//               />
//             </div>
//             <Link to="./products">
//             <button className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-orange-400 text-white hover:bg-orange-700">
//              Buy Now
//             </button></Link>
//           </div>
    
//           {/* Product Card 2 */}
//           <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105  p-4 sm:p-6 text-center">
//             <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Saffron</h3>
//             <div className="overflow-hidden rounded-2xl mb-4">
//               <img
//                 src={saf1}
//                 alt="Saffron"
//                 className="w-full object-contain max-h-60 sm:max-h-80 "
//               />
//             </div>
//             <button className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-orange-400 text-white hover:bg-orange-700">
//               <Link to="./products">Buy Now</Link>
//             </button>
            
//           </div>
//         </div>
//       </div>
//       </section>

//   )
// }

// export default Creambodyone
import React from 'react'
import sidethree from "../assets/SA4.webp"
import vec2 from "../assets/icon.png"
import shil1 from "../assets/shil1.jpg";
import saf1 from "../assets/saf1.jpg";
import { Link } from "react-router-dom";

function Creambodyone() {
  return (
    <section className="py-20 bg-[#FFF7EC]">

    <div className="max-w-xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Our Premium Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Product Card 1 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105  p-4 sm:p-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Shilajit Resin</h3>
            <div className="overflow-hidden rounded-2xl mb-4">
              <img
                src={shil1}
                alt="Shilajit Resin"
                className="w-full object-contain max-h-60 sm:max-h-80 "
              />
            </div>
            <Link to="./products">
            <button className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-orange-400 text-white hover:bg-orange-700">
             Buy Now
            </button></Link>
          </div>
    
          {/* Product Card 2 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105  p-4 sm:p-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Saffron</h3>
            <div className="overflow-hidden rounded-2xl mb-4">
              <img
                src={saf1}
                alt="Saffron"
                className="w-full object-contain max-h-60 sm:max-h-80 "
              />
            </div>
            <button className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-orange-400 text-white hover:bg-orange-700">
              <Link to="./products">Buy Now</Link>
            </button>
            
          </div>
        </div>
      </div>
      </section>

  )
}

export default Creambodyone