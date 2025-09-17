// import React from "react";
// import { motion } from "framer-motion";
// import sideone from "../assets/SA1.webp";
// import sidetqo from "../assets/SH2.png";
// import vec1 from "../assets/icon3.png";

// function Greenbodyone() {
//   return (
//     <div className="card shadow-lg bg-[#667D60] w-full h-auto md:h-[600px] flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 md:py-0 overflow-hidden">
//       {/* Left Content */}
//       <motion.div
//         className="flex flex-col text-white space-y-4 max-w-md mb-10 md:mb-0"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <motion.div
//           className="text-2xl md:text-3xl font-bold text-center md:text-left"
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           Go Organic
//         </motion.div>

//         <motion.div
//           className="text-lg md:text-2xl text-center md:text-left"
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           It’s always better when it’s natural. Eat organic & be healthy
//         </motion.div>

//         <motion.ul
//           className="text-base md:text-2xl font-semibold list-disc pl-5 space-y-2 text-left"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           <li>Donec feugiat ipsum sed enim ullamcorper</li>
//           <li>Nullam fermentum vel odio ac congue</li>
//           <li>Praesent tincidunt ante auctor tellus dictum</li>
//           <li>Suspendisse posuere vel massa quis sodale</li>
//         </motion.ul>
//       </motion.div>

//       {/* Right Content */}
//       <div className="flex-1 relative flex flex-col md:flex-row justify-center items-center gap-6">
//         {/* Vector Icon */}
//         <motion.div
//           className="absolute top-0 right-4 md:right-0"
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <img className="w-20 h-16 md:w-36 md:h-28" src={vec1} alt="Vector" />
//         </motion.div>

//         {/* Images */}
//         <div className="relative flex flex-col md:flex-row gap-6 items-center">
//           {/* Back Image */}
//           <motion.div
//             className="w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-md"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <img
//               src={sidetqo}
//               alt="Shilajit"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Front Image */}
//           <motion.div
//             className="w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-lg z-10"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.8 }}
//           >
//             <img
//               src={sideone}
//               alt="Saffron"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Greenbodyone;

import React from "react";
import { motion } from "framer-motion";
import sideone from "../assets/SA1.webp";
import sidetqo from "../assets/SH2.png";
import vec1 from "../assets/icon3.png";

function Greenbodyone() {
  return (
    <div className="card shadow-lg bg-[#667D60] w-full h-screen xl:h-[600px] flex flex-col md:flex-col xl:flex-row lg:flex-row justify-between items-center px-6 md:px-12 py-10 md:py-0 overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="flex flex-col text-white space-y-4 max-w-md mb-10 md:mb-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="text-2xl mt-10 md:text-3xl lg:text-5xl xl:text-5xl font-semibold text-center md:text-left"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >   
          Go Organic
        </motion.div>

        <motion.div
          className="text-lg md:text-2xl font-bold text-center md:text-left"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          It’s always better when it’s natural. Eat organic & be healthy
        </motion.div>

        <motion.ul
          className="text-base md:text-xl list-disc pl-5 space-y-2 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <li><span className="font-bold text">Shilajit:</span> Boosts energy, enhances immunity, and promotes overall vitality.</li>
          <li><span className="font-bold text"> Saffron:</span> Supports mood, improves skin health, and adds flavor to your life.</li>
          <li><span className="font-bold text"> 100% Natural & Pure:</span> No chemicals, no additives, just authentic goodness.</li>
          <li><span className="font-bold text"> Supports Well-being:</span> Helps detoxify the body and nourish it naturally.</li>
        </motion.ul>
      </motion.div>

      {/* Right Content */}
      <div className="flex-1 relative flex flex-col md:flex-row justify-center items-center mt-10 gap-6">
        {/* Vector Icon */}
        <motion.div
          className="absolute top-0 right-4 md:right-0"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img className="w-20 h-16 md:w-24 md:h-24" src={vec1} alt="Vector" />
        </motion.div>

        {/* Images */}
        <div className="relative flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6 items-center">
          {/* Back Image */}
          <motion.div
            className="w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={sidetqo}
              alt="Shilajit"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Front Image */}
          <motion.div
            className="w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-lg z-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img
              src={sideone}
              alt="Saffron"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Greenbodyone;