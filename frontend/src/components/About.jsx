

// import React from "react";
// import { motion } from "framer-motion";
// import shil1 from "../assets/shil1.jpg";
// import saf1 from "../assets/saf1.jpg";
// import shil2 from "../assets/shil2.jpg";
// import saf2 from "../assets/saf2.jpg";
// import icon from "../assets/icon.png";
// import icon3 from "../assets/icon3.png";
// import sh from "../assets/sh.jpg";
// import SH2 from "../assets/SH2.png";
// import SH3 from "../assets/SH3.webp";
// import shil3 from "../assets/shil3.jpg";
// import saf3 from "../assets/saf3.jpg";
// import SA4 from "../assets/SA4.webp";

// export default function About() {
//   return (
//     <div className="w-full">
//       {/* About Us Section */}
//       <section className="bg-[#667D60] text-white py-12 px-4 md:py-16 md:px-16 relative">
//         <img
//           src={icon3}
//           alt="Leaf Decoration"
//           className="absolute right-2 md:right-6 top-4 md:top-10 w-10 md:w-24 opacity-90"
//         />
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
//           {/* Left Content */}
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT US</h2>
//             <p className="text-black leading-relaxed text-sm md:text-base">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse varius enim in eros elementum tristique. Duis cursus,
//               mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
//               libero vitae erat.
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center">
//             <img
//               src={sh}
//               alt="About Us"
//               className="rounded-xl shadow-lg w-52 md:w-96"
//             />
//           </div>
//         </div>
//       </section>

//       {/* History Section */}
//       <section className="bg-[#fffaf3] py-12 px-4 md:py-16 md:px-16 relative">
//         <img
//           src={icon}
//           alt="Leaf Decoration"
//           className="absolute left-2 md:left-6 top-2 md:top-10 w-10 md:w-24 opacity-90"
//         />
//         <img
//           src={icon}
//           alt="leaf"
//           className="absolute -bottom-16 md:-bottom-44 right-2 md:right-6 w-10 md:w-24 opacity-90"
//         />
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
//           {/* Left Image */}
//           <div>
//             <img
//               src={saf3}
//               alt="History"
//               className="rounded-xl shadow-lg w-full max-w-xs md:max-w-full mx-auto"
//             />
//           </div>

//           {/* Right Text */}
//           <div>
//             <h3 className="text-xl md:text-2xl font-semibold mb-4">History</h3>
//             <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
//               1955 Beginning of Male – Lorem ipsum dolor sit amet, consectetur
//               adipiscing elit. Praesent viverra, nunc nec euismod ullamcorper,
//               velit nunc cursus justo, nec malesuada magna felis nec nisi.
//             </p>

//             {/* Small Images */}
//             <div className="flex justify-center md:justify-start space-x-4">
//               <img
//                 src={shil2}
//                 alt="Small 1"
//                 className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg shadow-md"
//               />
//               <img
//                 src={saf2}
//                 alt="Small 2"
//                 className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Stores Section */}
//       <section className="bg-[#667D60] py-12 px-4 md:py-16 md:px-16 text-white relative">
//         <motion.img
//           src={icon}
//           alt="Decorative"
//           className="absolute left-2 md:left-6 w-10 md:w-24 opacity-80 -translate-y-8 md:-translate-y-20 pointer-events-none"
//           animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-12">
//             Our Stores
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {/* Card 1 */}
//             <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
//               <img
//                 src={saf1}
//                 alt="Farm raised food"
//                 className="w-20 h-20 md:w-32 md:h-32 object-cover mx-auto rounded-full mb-4"
//               />
//               <h4 className="font-bold text-black text-base md:text-lg mb-2">
//                 Farm raised food
//               </h4>
//               <p className="text-black text-sm md:text-base">
//                 Pellentesque habitant morbi tristique senectus et netus et
//                 malesuada fames ac turpis egestas.
//               </p>
//             </div>

//             <img
//   src={icon3}
//   alt="Leaf Decoration"
//   className="absolute right-2 md:right-6 bottom-1 w-10 md:w-28 opacity-90"
// />


//             {/* Card 2 */}
//             <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
//               <img
//                 src={SH2}
//                 alt="100% organic food"
//                 className="w-20 h-20 md:w-32 md:h-32 object-cover mx-auto rounded-full mb-4"
//               />
//               <h4 className="font-bold text-black text-base md:text-lg mb-2">
//                 100% organic food
//               </h4>
//               <p className="text-black text-sm md:text-base">
//                 Pellentesque habitant morbi tristique senectus et netus et
//                 malesuada fames ac turpis egestas.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
//               <img
//                 src={SA4}
//                 alt="Grown naturally"
//                 className="w-20 h-20 md:w-32 md:h-32 object-cover mx-auto rounded-full mb-4"
//               />
//               <h4 className="font-bold text-black text-base md:text-lg mb-2">
//                 Grown naturally
//               </h4>
//               <p className="text-black text-sm md:text-base">
//                 Pellentesque habitant morbi tristique senectus et netus et
//                 malesuada fames ac turpis egestas.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Products Section */}
//       <section className="py-12 px-4 md:py-16 md:px-16 bg-[#fffaf3] relative">
//         <div className="max-w-7xl mx-auto">
//           <img
//             src={icon}
//             alt="Leaf Decoration"
//             className="absolute left-2 md:left-6 -translate-y-1 md:-translate-y-5 w-10 md:w-24 opacity-90"
//           />
//           <img
//   src={icon}
//   alt="Leaf Decoration"
//   className="absolute right-2 md:right-6 bottom-1 w-10 md:w-28 opacity-90"
// />
//           <h3 className="text-center text-xl md:text-2xl font-bold mb-8 md:mb-12">
//             OUR PRODUCTS
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
//             <img
//               src={SH3}
//               alt="Product 1"
//               className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
//             />
//             <img
//               src={SA4}
//               alt="Product 2"
//               className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
//             />
//             <img
//               src={SH2}
//               alt="Product 3"
//               className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
//             />
//             <img
//               src={saf2}
//               alt="Product 4"
//               className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
//             />
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import shil1 from "../assets/shil1.jpg";
import saf1 from "../assets/saf1.jpg";
import shil2 from "../assets/shil2.jpg";
import saf2 from "../assets/saf2.jpg";
import icon from "../assets/icon.png";
import icon3 from "../assets/icon3.png";
import sh from "../assets/sh.jpg";
import SH2 from "../assets/SH2.png";
import SH3 from "../assets/SH3.webp";
import SA4 from "../assets/SA4.webp";

export default function About() {
  const [mainImage, setMainImage] = useState(shil2);

  return (
    <div className="w-full">

      {/* About Us Section */}
      <section className="bg-[#667D60] text-white py-12 px-4 md:py-16 md:px-16 relative">
        <img
          src={icon3}
          alt="Leaf Decoration"
          className="absolute right-2 md:right-6 top-4 md:top-10 w-10 md:w-24 opacity-90"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-4">ABOUT US</h2>
            <p className="leading-relaxed text-sm md:text-lg text-white">
              We are dedicated to bringing you the purest Kashmiri Saffron and Himalayan Shilajit, 
              harvested directly from nature’s heartlands. Our mission is simple – deliver premium, 
              authentic, and organic wellness products that enrich your health, vitality, and lifestyle.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={sh}
              alt="About Us"
              className="rounded-xl shadow-lg w-52 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-[#fffaf3] py-12 px-4 md:py-16 md:px-16 relative">
      {/* Decorative Icons */}
      <img
        src={icon}
        alt="Leaf Decoration"
        className="absolute left-2 md:left-0 md:top-4 -translate-y-1 md:-translate-y-5 w-10 md:w-20 opacity-90"
      />
      <img
        src={icon}
        alt="Leaf"
        className="absolute -bottom-16 md:-bottom-44 right-2 md:right-6 w-10 md:w-24 opacity-90"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* Left - Main Image */}
<div className="w-full h-96">
  <img
    src={mainImage}
    alt="History Main"
    className="w-full h-full object-cover px-6 rounded-xl "
  />
</div>

        {/* Right - Text + Thumbnails */}
        <div>
          <h3 className="text-xl flex flex-col md:justify-start items-center md:text-4xl font-bold mb-4">History</h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-lg xl:text-base lg:text-base">
            Our journey began in 1955, with a vision to preserve traditional methods of harvesting
            and delivering nature’s finest remedies. For generations, Kashmiri farmers and Himalayan
            gatherers have trusted these natural treasures – and today, we continue that legacy
            with pride and authenticity.
          </p>

          {/* ✅ Thumbnails (3 images now) */}
          <div className="flex justify-center md:justify-center space-x-4">
            {[shil2, saf2, SA4].map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumb ${index}`}
                onClick={() => setMainImage(thumb)}
                className={`w-14 h-14 md:w-20 md:h-20 rounded-lg shadow-md cursor-pointer border-2 
                  ${mainImage === thumb ? "border-[#c49a6c]" : "border-transparent"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Our Stores Section */}
      <section className="bg-[#667D60] py-12 px-4 md:py-16 md:px-16  text-white relative">
        <motion.img
          src={icon}
          alt="Decorative"
          className="absolute left-2 md:left-4 -translate-y-1 md:-translate-y-5 w-10 md:w-20 opacity-90"
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-12">
            Our Stores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
              <img
                src={saf1}
                alt="Farm raised food"
                className="w-20 h-20 md:w-32 md:h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-black text-base md:text-lg mb-2">
                Farm raised food
              </h4>
              <p className="text-black text-sm md:text-base">
                Our saffron is handpicked from Kashmir’s fertile fields, nurtured naturally 
                without harmful chemicals – ensuring unmatched purity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
              <img
                src={SH2}
                alt="100% organic food"
                className="w-20 h-20 md:w-32 md:h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-black text-base md:text-lg mb-2">
                100% organic food
              </h4>
              <p className="text-black text-sm md:text-base">
                Shilajit is sourced from the untouched Himalayan mountains, carefully purified 
                to retain its natural minerals and energy-boosting compounds.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
              <img
                src={SA4}
                alt="Grown naturally"
                className="w-20 h-20 md:w-32 md:h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-black text-base md:text-lg mb-2">
                Grown naturally
              </h4>
              <p className="text-black text-sm md:text-base">
                Every product is harvested in harmony with nature, preserving both tradition 
                and authenticity for your health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-12 px-4 md:py-16 md:px-16 bg-[#fffaf3] relative">
        <div className="max-w-7xl mx-auto">
          <img
            src={icon}
            alt="Leaf Decoration"
            className="absolute left-2 md:left-4 -translate-y-1 md:-translate-y-5 w-10 md:w-20 opacity-90"
          />
          <img
            src={icon}
            alt="Leaf Decoration"
            className="absolute right-2 md:right-3 bottom-1 w-10 md:w-20 opacity-90"
          />
          <h3 className="text-center text-xl md:text-2xl font-bold mb-8 md:mb-12">
            OUR PRODUCTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <img
              src={SH3}
              alt="Product 1"
              className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
            />
            <img
              src={SA4}
              alt="Product 2"
              className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
            />
            <img
              src={SH2}
              alt="Product 3"
              className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
            />
            <img
              src={saf2}
              alt="Product 4"
              className="rounded-lg shadow-md w-full h-32 md:h-64 object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}