// import React from "react";
// // import card from "../assets/card.webp";
// import shil1 from "../assets/shil1.jpg";
// import saf1 from "../assets/saf1.jpg";
// import shil2 from "../assets/shil2.jpg";
// import saf2 from "../assets/saf2.jpg";
// import { motion } from "framer-motion";
// import saf3 from "../assets/saf3.jpg";
// import icon from "../assets/icon.png";
// import bg1 from "../assets/bg1.jpg";
// import prat from "../assets/prat.jpg";
// import icon2 from "../assets/icon2.png";
// import icon3 from "../assets/icon3.png";
// import { Link } from "react-router-dom";
// // import sa1 from "../assets/sa1.png";
// // import bg from "../assets/bg.jpg";
// // import logo from "../assets/logo.jpg";
// import sidethree from "../assets/SA4.webp"
// import vec2 from "../assets/icon.png"



// export default function HomePage() {
//   return (
//     <div>
      

//       {/* Hero Section */}

//       {/* Features Section */}

//       {/* ===== New Product Cards Section ===== */}



      



//       <section>
//   {/* <img
//     // src={icon}
//     alt="Leaf Decoration"
//     className="absolute right-6 top-10 transform -translate-y-1/2 w-16 md:w-24 opacity-90"
//   /> */}
//   <div className="card shadow-lg bg-[#FFF7EC] w-full h-full flex flex-col lg:flex-row justify-center gap-10 p-6 lg:p-20">
        
//         {/* Left Side */}
//         <div className="flex flex-col justify-center gap-6 lg:gap-10 items-center lg:items-start">
//           {/* Main Image */}
//           <div className="rounded-xl overflow-hidden">
//             <img 
//               src={sidethree} 
//               alt="Organic" 
//               className="w-full max-w-sm h-64 sm:h-80 lg:h-96 rounded-xl object-cover"
//             />
//           </div>
  
//           {/* Icon */}
//           <div>
//             <img 
//               className="w-20 h-16 sm:w-28 sm:h-20" 
//               alt="Icon" 
//               src={vec2} 
//             />
//           </div>
//         </div>
  
//         {/* Right Side */}
//         <div className="flex flex-col gap-6 mt-6 lg:mt-10 text-gray-800 max-w-lg">
//           {/* Section 1 */}
//           <div className="text-base sm:text-lg lg:text-xl font-semibold">
//             <div className="text-lg sm:text-xl lg:text-2xl font-bold">Go Organic</div>
//             <div>It’s always better when it’s natural.</div>
//             <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//             <div>Cras maximus, dolor nec placerat scelerisque, urna libero.</div>
//             <div>lacinia nisi, vitae viverra augue turpis eget dui.</div>
//             <div>Suspendisse pellentesque iaculis venenatis.</div>
//           </div>
  
//           {/* Section 2 */}
//           <div className="text-base sm:text-lg lg:text-xl font-semibold">
//             <div className="text-lg sm:text-xl lg:text-2xl font-bold">Logo-4</div>
//             <div>Eat clean and green</div>
//             <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//             <div>Cras maximus, dolor nec placerat scelerisque.</div>
//           </div>
  
//           {/* Section 3 */}
//           <div className="text-base sm:text-lg lg:text-xl font-semibold">
//             <div className="text-lg sm:text-xl lg:text-2xl font-bold">Logo-4</div>
//             <div>Eat clean and green</div>
//             <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//             <div>Cras maximus, dolor nec placerat scelerisque.</div>
//           </div>
  
//           {/* Section 4 */}
//           <div className="text-base sm:text-lg lg:text-xl font-semibold">
//             <div className="text-lg sm:text-xl lg:text-2xl font-bold">Logo-4</div>
//             <div>Eat clean and green</div>
//             <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//             <div>Cras maximus, dolor nec placerat scelerisque.</div>
//           </div>
//         </div>
//       </div>
// </section>


//       <section className="relative py-16 sm:py-20 bg-[#667D60]">
//   {/* Top left decorative image */}
//   <img
//     src={icon2}
//     alt="Decorative"
//     className="absolute top-6 left-6 w-20 sm:w-28 md:w-32 opacity-80 pointer-events-none"
//   />

//   {/* Bottom left background image */}
//   <img
//     src={bg1}
//     alt="Decorative design"
//     className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-[450px] lg:w-[400px] opacity-20 pointer-events-none"
//   />

//   {/* Bottom right decorative image */}
//   <img
//     src={icon3}
//     alt="Decorative"
//     className="absolute bottom-6 right-6 sm:right-20 w-20 sm:w-28 md:w-24 opacity-80 pointer-events-none"
//   />

//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
//     {/* Left Text */}
//     <div className="md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left">
//       <p className="text-xs sm:text-sm text-green-200 font-bold uppercase tracking-widest">
//         Ancient Health Secrets
//       </p>
//       <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-md">
//         Harness the power of nature's finest.
//       </h2>
//       <p className="text-base sm:text-lg text-gray-100 leading-relaxed drop-shadow-sm">
//         Explore the profound health benefits of
//         <span className="font-semibold text-yellow-300"> Saffron </span>
//         and{" "}
//         <span className="font-semibold text-yellow-300">
//           Shilajit Resin
//         </span>
//         , two powerful supplements sourced from nature's purest environments.
//       </p>

//       {/* Benefits */}
//       <div className="grid text-left grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
//         {[
//           "Saffron for Mood - Enhances mood, reduces stress, and promotes relaxation.",
//           "Shilajit for Vitality - Boosts energy levels and supports physical performance.",
//         ].map((point, index) => (
//           <div key={index}>
//             <h3 className="text-white font-semibold text-base sm:text-lg">
//               {index + 1}. {point.split(" - ")[0]}
//             </h3>
//             <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
//               {point.split(" - ")[1]}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Right Images with animation */}
//     <div className="md:w-1/2 relative h-auto md:h-[450px] flex justify-center items-center mt-10 md:mt-0">
//   {/* Mobile: stacked images */}
//   <div className="flex flex-col items-center gap-6 md:hidden">
//     <motion.img
//       src={saf2}
//       alt="Organic 1"
//       className="rounded-xl shadow-2xl w-48 sm:w-56"
//       initial={{ opacity: 0, y: -30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     />
//     <motion.img
//       src={shil2}
//       alt="Organic 2"
//       className="rounded-xl shadow-2xl w-48 sm:w-56"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1, delay: 0.3 }}
//     />
//   </div>

//   {/* Desktop: overlapping images */}
//   <div className="hidden md:block relative h-[450px] w-full">
//     <motion.img
//       src={saf2}
//       alt="Organic 1"
//       className="rounded-xl shadow-2xl w-64 md:w-72 absolute -top-12 right-0"
//       initial={{ opacity: 0, y: -50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1.5, ease: "easeInOut" }}
//     />
//     <motion.img
//       src={shil2}
//       alt="Organic 2"
//       className="rounded-xl shadow-2xl w-64 md:w-72 absolute bottom-0 left-0"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
//     />
//   </div>
// </div>

//   </div>
// </section>

// <section className="relative py-16 sm:py-20 bg-[#f8f5ee] max-w-full mx-auto px-4 sm:px-8 rounded-xl shadow-lg overflow-hidden">
//   {/* Decorative leaf on right side */}
//   {/* Decorative leaf on right side */}
// {/* Decorative leaf on right side */}
// <motion.img
//   src={icon}
//   alt="Leaf Decoration"
//   className="absolute right-2 sm:right-10 
//              top-[80%] sm:top-1/2 
//              transform -translate-y-1/2 
//              w-12 sm:w-24 opacity-90"
//   initial={{ rotate: -20, opacity: 0, x: 50 }}
//   whileInView={{ rotate: 0, opacity: 1, x: 0 }}
//   transition={{ duration: 1 }}
//   viewport={{ once: true }}
// />



//   {/* Quote Icon */}
//   <motion.div
//     className="text-green-600 text-6xl sm:text-9xl mb-4 sm:mb-6"
//     initial={{ scale: 0, opacity: 0 }}
//     whileInView={{ scale: 1, opacity: 1 }}
//     transition={{ duration: 0.8, type: "spring" }}
//     viewport={{ once: true }}
//   >
//     &#10078;
//   </motion.div>

//   {/* Quote Text */}
//   <motion.div
//     className="flex flex-col items-center text-center"
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1, delay: 0.3 }}
//     viewport={{ once: true }}
//   >
//     <p className="text-base sm:text-2xl font-semibold text-gray-900 max-w-md sm:max-w-5xl leading-relaxed mb-6 sm:mb-8 px-2">
//       I’ve been using{" "}
//       <span className="italic text-green-700 font-semibold">Saffron</span>{" "}
//       to lift my mood and it’s truly helped me feel calmer every day.
//       Alongside it,{" "}
//       <span className="italic text-green-700 font-semibold">
//         Shilajit Resin
//       </span>{" "}
//       has given me natural energy and stamina like never before. Together,
//       they feel like nature’s perfect balance for both mind and body.
//     </p>

//     {/* Profile Section */}
//     <motion.div
//       className="flex flex-col items-center gap-3 sm:gap-4"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <motion.img
//         src={prat}
//         alt="Profile"
//         className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-[#f8f5ee]"
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
//         viewport={{ once: true }}
//       />
//       <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//         Veera Pratap
//       </h3>
//     </motion.div>
//   </motion.div>
// </section>





// <section className="relative py-16 bg-[#6b7b57] overflow-hidden">
//   {/* Decorative Image - Top Left */}
//   <motion.img
//     src={icon}
//     alt="Decorative"
//     className="absolute top-6 left-6 w-16 sm:top-10 sm:left-10 sm:w-32 md:w-24 
//                opacity-80 pointer-events-none"
//     animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
//     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//   />

//   {/* Background Image - Bottom Right */}
//   <motion.img
//     src={bg1}
//     alt="Background"
//     className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-96 lg:w-[500px] 
//                opacity-40 pointer-events-none filter brightness-50"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 2, ease: "easeOut" }}
//     animate={{ y: [0, 15, 0] }}
//   />

//   <div className="relative max-w-7xl mx-auto px-6">
//     {/* Section Title */}
//     <motion.h2
//       className="text-center text-2xl md:text-3xl font-bold text-white mb-12"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       RECENT NEWS
//     </motion.h2>

//     {/* Cards Row */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* Saffron Card */}
//       <motion.div
//         className="flex flex-col items-center"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         <img
//           src={saf1}
//           alt="Saffron"
//           className="rounded-xl shadow-lg w-full md:w-96 h-64 object-cover"
//         />
//         <p className="text-gray-100 text-center mt-4 leading-relaxed max-w-sm">
//           Naturally grown saffron with rich aroma and taste. Known for its
//           calming effect and vibrant color, saffron has been treasured for
//           centuries as a natural wellness booster.
//         </p>
//       </motion.div>

//       {/* Shilajit Resin Card */}
//       <motion.div
//         className="flex flex-col items-center"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.4 }}
//       >
//         <img
//           src={shil1}
//           alt="Shilajit Resin"
//           className="rounded-xl shadow-lg w-full md:w-96 h-64 object-cover"
//         />
//         <p className="text-gray-100 text-center mt-4 leading-relaxed max-w-sm">
//           Pure Shilajit resin packed with natural minerals and energy. It helps
//           in boosting stamina, improving focus, and maintaining overall body
//           strength naturally.
//         </p>
//       </motion.div>
//     </div>
//   </div>
// </section>


//       <section className="py-20 bg-[#FFF7EC] relative overflow-hidden">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//     {/* Decorative Leaf */}
//     <img
//       src={icon}
//       alt="Leaf Decoration"
//       className="absolute right-4 top-2 w-14 sm:w-20 md:w-24 opacity-80 pointer-events-none"
//     />

//     <div className="flex flex-col md:flex-row items-center md:items-start bg-[#667D60] gap-8 rounded-lg shadow-xl p-6 md:p-12">
//       {/* Left Image Column */}
//       <div className="w-full md:w-1/2">
//         <motion.img
//           src={saf3}
//           alt="Healthy lifestyle"
//           className="rounded-lg w-full h-64 sm:h-80 md:h-auto object-cover"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         />
//       </div>

//       {/* Right Content Column */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-6 text-center md:text-left">
//         <p className="text-lg sm:text-xl font-bold uppercase text-white">
//           Follow Us
//         </p>
//         <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
//           Transform your wellness journey with nature.
//         </h2>
//         <p className="text-sm sm:text-base text-white">
//           Integrate the potent benefits of pure Saffron and authentic Shilajit Resin 
//           into your daily routine. Sourced from pristine environments, our products 
//           are designed to support your mental clarity, physical energy, and overall 
//           well-being.
//         </p>
//         <Link to="./products">
//           <button className="bg-[#FFF7EC] text-black font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-orange-300 transition duration-300">
//             Explore Products
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>


  
      

//     </div>
//   );
// }
import React from "react";
// import card from "../assets/card.webp";
import shil1 from "../assets/shil1.jpg";
import saf1 from "../assets/saf1.jpg";
import shil2 from "../assets/shil2.jpg";
import saf2 from "../assets/saf2.jpg";
import { motion } from "framer-motion";
import saf3 from "../assets/saf3.jpg";
import icon from "../assets/icon.png";
import bg1 from "../assets/bg1.jpg";
import prat from "../assets/prat.jpg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import { Link } from "react-router-dom";
// import sa1 from "../assets/sa1.png";
// import bg from "../assets/bg.jpg";
// import logo from "../assets/logo.jpg";
import sidethree from "../assets/SA4.webp"
import vec2 from "../assets/icon.png"



export default function HomePage() {
  return (
    <div>
      

      {/* Hero Section */}

      {/* Features Section */}

      {/* ===== New Product Cards Section ===== */}



      



      <section>
  {/* <img
    // src={icon}
    alt="Leaf Decoration"
    className="absolute right-6 top-10 transform -translate-y-1/2 w-16 md:w-24 opacity-90"
  /> */}
  <div className="card shadow-lg bg-[#FFF7EC] w-full h-full flex flex-col lg:flex-row justify-center gap-10 p-6 lg:p-20">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center gap-6 lg:gap-10 items-center lg:items-start">
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden">
            <img 
              src={sidethree} 
              alt="Organic" 
              className="w-full max-w-sm h-64 sm:h-80 lg:h-96 rounded-xl object-cover"
            />
          </div>
  
          {/* Icon */}
          <div>
            <img 
              className="w-20 h-16 sm:w-28 sm:h-20" 
              alt="Icon" 
              src={vec2} 
            />
          </div>
        </div>
  
        {/* Right Side */}
        <div className="flex flex-col gap-6 mt-6 lg:mt-10 text-gray-800 max-w-lg">
          {/* Section 1 */}
          <div className="text-base sm:text-lg lg:text-xl font-semibold">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Go Organic</div>
            <div>It’s always better when it’s natural.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Cras maximus, dolor nec placerat scelerisque, urna libero.</div>
            <div>lacinia nisi, vitae viverra augue turpis eget dui.</div>
            <div>Suspendisse pellentesque iaculis venenatis.</div>
          </div>
  
          {/* Section 2 */}
          <div className="text-base sm:text-lg lg:text-xl font-semibold">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Logo-4</div>
            <div>Eat clean and green</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Cras maximus, dolor nec placerat scelerisque.</div>
          </div>
  
          {/* Section 3 */}
          <div className="text-base sm:text-lg lg:text-xl font-semibold">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Logo-4</div>
            <div>Eat clean and green</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Cras maximus, dolor nec placerat scelerisque.</div>
          </div>
  
          {/* Section 4 */}
          <div className="text-base sm:text-lg lg:text-xl font-semibold">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Logo-4</div>
            <div>Eat clean and green</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Cras maximus, dolor nec placerat scelerisque.</div>
          </div>
        </div>
      </div>
</section>


      <section className="relative py-16 sm:py-20 bg-[#667D60]">
  {/* Top left decorative image */}
  {/* <img
    src={icon2}
    alt="Decorative"
    className="absolute top-6 left-6 w-20 sm:w-28 md:w-32 opacity-80 pointer-events-none"
  /> */}

  {/* Bottom left background image */}
  <img
    src={bg1}
    alt="Decorative design"
    className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-[450px] lg:w-[400px] opacity-20 pointer-events-none"
  />

  {/* Bottom right decorative image */}
  <img
    src={icon3}
    alt="Decorative"
    className="absolute bottom-6 right-6 sm:right-20 w-20 sm:w-28 md:w-24 opacity-80 pointer-events-none"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
    {/* Left Text */}
    <div className="md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left">
      <p className="text-xs sm:text-sm text-green-200 md:text-xl font-bold uppercase tracking-widest">
        Ancient Health Secrets
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-md">
        Harness the power of nature's finest.
      </h2>
      <p className="text-base sm:text-lg lg:text-lg text-gray-100 leading-relaxed drop-shadow-sm">
        Explore the profound health benefits of
        <span className="font-semibold text-yellow-300"> Saffron </span>
        and{" "}
        <span className="font-semibold text-yellow-300">
          Shilajit Resin
        </span>
        , two powerful supplements sourced from nature's purest environments.
      </p>

      {/* Benefits */}
      <div className="grid text-left grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {[
          "Saffron for Mood - Enhances mood, reduces stress, and promotes relaxation.",
          "Shilajit for Vitality - Boosts energy levels and supports physical performance.",
        ].map((point, index) => (
          <div key={index}>
            <h3 className="text-white font-bold md:text-2xl text-base sm:text-lg">
              {index + 1}. {point.split(" - ")[0]}
            </h3>
            <p className="text-gray-200 text-base sm:text-lg lg:text-lg leading-relaxed">
              {point.split(" - ")[1]}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Images with animation */}
    <div className="md:w-1/2 relative h-auto md:h-[450px] flex justify-center items-center mt-10 md:mt-0">
  {/* Mobile: stacked images */}
  <div className="flex flex-col items-center gap-6 md:hidden">
    <motion.img
      src={saf2}
      alt="Organic 1"
      className="rounded-xl shadow-2xl w-48 sm:w-56"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
    <motion.img
      src={shil2}
      alt="Organic 2"
      className="rounded-xl shadow-2xl w-48 sm:w-56"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    />
  </div>

  {/* Desktop: overlapping images */}
  <div className="hidden md:block relative h-[450px] w-full">
    <motion.img
      src={saf2}
      alt="Organic 1"
      className="rounded-xl shadow-2xl w-64 md:w-72 absolute -top-12 right-0"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.img
      src={shil2}
      alt="Organic 2"
      className="rounded-xl shadow-2xl w-64 md:w-72 absolute bottom-0 left-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
    />
  </div>
</div>

  </div>
</section>

<section className="relative py-16 sm:py-20 bg-[#f8f5ee] max-w-full mx-auto px-4 sm:px-8 rounded-xl shadow-lg overflow-hidden">
  {/* Decorative leaf on right side */}
  {/* Decorative leaf on right side */}
{/* Decorative leaf on right side */}
<motion.img
  src={icon}
  alt="Leaf Decoration"
  className="absolute right-2 sm:right-10 
             top-[80%] sm:top-1/2 
             transform -translate-y-1/2 
             w-12 sm:w-24 opacity-90"
  initial={{ rotate: -20, opacity: 0, x: 50 }}
  whileInView={{ rotate: 0, opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
/>



  {/* Quote Icon */}
  <motion.div
    className="text-green-600 text-6xl sm:text-9xl mb-4 sm:mb-6"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring" }}
    viewport={{ once: true }}
  >
    &#10078;
  </motion.div>

  {/* Quote Text */}
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <p className="text-base sm:text-2xl font-semibold text-gray-900 max-w-md sm:max-w-5xl leading-relaxed mb-6 sm:mb-8 px-2">
      I’ve been using{" "}
      <span className="italic text-green-700 font-semibold">Saffron</span>{" "}
      to lift my mood and it’s truly helped me feel calmer every day.
      Alongside it,{" "}
      <span className="italic text-green-700 font-semibold">
        Shilajit Resin
      </span>{" "}
      has given me natural energy and stamina like never before. Together,
      they feel like nature’s perfect balance for both mind and body.
    </p>

    {/* Profile Section */}
    <motion.div
      className="flex flex-col items-center gap-3 sm:gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.img
        src={prat}
        alt="Profile"
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-[#f8f5ee]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
        viewport={{ once: true }}
      />
      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
        Veera Pratap
      </h3>
    </motion.div>
  </motion.div>
</section>





<section className="relative py-16 bg-[#6b7b57] overflow-hidden">
  {/* Decorative Image - Top Left */}
  <motion.img
    src={icon}
    alt="Decorative"
    className="absolute top-6 left-6 w-16 sm:top-10 sm:left-10 sm:w-32 md:w-24 
               opacity-80 pointer-events-none"
    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Background Image - Bottom Right */}
  <motion.img
    src={bg1}
    alt="Background"
    className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-96 lg:w-[500px] 
               opacity-40 pointer-events-none filter brightness-50"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, ease: "easeOut" }}
    animate={{ y: [0, 15, 0] }}
  />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Section Title */}
    <motion.h2
      className="text-center text-2xl md:text-3xl font-bold text-white mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      RECENT NEWS
    </motion.h2>

    {/* Cards Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Saffron Card */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src={saf1}
          alt="Saffron"
          className="rounded-xl shadow-lg w-full md:w-96 h-64 object-cover"
        />
        <p className="text-gray-100 text-center md:text-lg mt-4 leading-relaxed max-w-sm">
          Naturally grown saffron with rich aroma and taste. Known for its
          calming effect and vibrant color, saffron has been treasured for
          centuries as a natural wellness booster.
        </p>
      </motion.div>

      {/* Shilajit Resin Card */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          src={shil1}
          alt="Shilajit Resin"
          className="rounded-xl shadow-lg w-full md:w-96 h-64 object-cover"
        />
        <p className="text-gray-100 text-center md:text-lg mt-4 leading-relaxed max-w-sm">
          Pure Shilajit resin packed with natural minerals and energy. It helps
          in boosting stamina, improving focus, and maintaining overall body
          strength naturally.
        </p>
      </motion.div>
    </div>
  </div>
</section>


      <section className="py-20 bg-[#FFF7EC] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    {/* Decorative Leaf */}
    <img
      src={icon}
      alt="Leaf Decoration"
      className="absolute right-4 top-2 w-14 sm:w-20 md:w-24 opacity-80 pointer-events-none"
    />

    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#667D60] gap-8 rounded-lg shadow-xl p-6 md:p-12">
      {/* Left Image Column */}
      <div className="w-full md:w-1/2">
        <motion.img
          src={saf3}
          alt="Healthy lifestyle"
          className="rounded-lg w-full h-64 sm:h-80 md:h-auto object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Right Content Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-6 text-center md:text-left">
        <p className="text-lg sm:text-xl font-bold uppercase text-white">
          Follow Us
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
          Transform your wellness journey with nature.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white">
          Integrate the potent benefits of pure Saffron and authentic Shilajit Resin 
          into your daily routine. Sourced from pristine environments, our products 
          are designed to support your mental clarity, physical energy, and overall 
          well-being.
        </p>
        <Link to="./products">
          <button className="bg-[#FFF7EC] text-black font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-orange-300 transition duration-300">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>


  
      

    </div>
  );
}