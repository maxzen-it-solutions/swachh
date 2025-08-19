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
import bg from "../assets/bg.jpg";
import logo from "../assets/logo.jpg";



export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      {/* <nav className="bg-[#FFF7EC] text-[#667D60] px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between font-semibold items-center">
          <h1 className="text-2xl font-bold">Swachh</h1>
          <ul className="hidden md:flex gap-6">
            <li>
              <Link to="/Homepage" className="hover:text-[#667D60]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/Products" className="hover:text-[#667D60]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-[#667D60]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* Hero Section */}

      {/* Features Section */}

      {/* ===== New Product Cards Section ===== */}



      



      <section className="py-20 bg-[#FFF7EC]">
        <img
          src={icon}
          alt="Leaf Decoration"
          className="absolute right-6  transform -translate-y-1/2 w-24 opacity-90"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Premium Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Card 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-yellow-300/40 p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Shilajit Resin</h3>
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={shil1}
                  alt="Shilajit Resin"
                  className="w-full object-contain max-h-80 transition-transform duration-700 hover:scale-110"
                />
              </div>
              <button className="px-6 py-2 bg-[#FDF6ED] text-black font-medium rounded-full hover:bg-yellow-600 transition duration-300">
                Buy Now
              </button>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-yellow-300/40 p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Saffron</h3>
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={saf1}
                  alt="Saffron"
                  className="w-full object-contain max-h-80 transition-transform duration-700 hover:scale-110"
                />
              </div>
              <button className="px-6 py-2 bg-[#FDF6ED] text-black font-medium rounded-full hover:bg-yellow-600 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#667D60]">
        <img
          src={icon2} // replace with your decorative image path
          alt="Decorative"
          className="absolute top-10 left-10 w-32 md:w-32 opacity-80 pointer-events-none"
        />
        {/* Decorative background image - bottom left */}
        <img
          src={bg1}
          alt="Decorative design"
          className="absolute bottom-0 left-0 w-72 md:w-[450px] lg:w-[400px] opacity-20 pointer-events-none"
        />
        <img
          src={icon3} // replace with your decorative image path
          alt="Decorative"
          className="absolute bottom-10 right-60 w-32 md:w-24 opacity-80 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-8">
            <p className="text-sm text-green-200 font-bold uppercase tracking-widest">
              Ancient Health Secrets
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-md">
              Harness the power of nature's finest.
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed drop-shadow-sm">
              Explore the profound health benefits of
              <span className="font-semibold text-yellow-300"> Saffron </span>
              and{" "}
              <span className="font-semibold text-yellow-300">
                {" "}
                Shilajit Resin
              </span>
              , two powerful supplements sourced from nature's purest
              environments.
            </p>

            <div className="grid text-left grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              {[
                "Saffron for Mood - Enhances mood, reduces stress, and promotes relaxation.",
                "Shilajit for Vitality - Boosts energy levels and supports physical performance.",
              ].map((point, index) => (
                <div key={index}>
                  <h3 className="text-white font-semibold text-lg">
                    {index + 1}. {point.split(" - ")[0]}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {point.split(" - ")[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images with smooth animation */}
          <div className="md:w-1/2 relative h-[450px] flex justify-center items-center">
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
      </section>

      <section className="relative py-20 bg-[#f8f5ee] max-5xl mx-auto px-8 rounded-xl shadow-lg overflow-hidden">
        {/* Decorative leaf on right side */}
        <motion.img
          src={icon}
          alt="Leaf Decoration"
          className="absolute right-10 top-1/2 transform -translate-y-1/2 w-24 opacity-90"
          initial={{ rotate: -20, opacity: 0, x: 50 }}
          whileInView={{ rotate: 0, opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Quote Icon */}
        <motion.div
          className="text-green-600 text-9xl mb-6"
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
          <p className="text-2xl font-bold text-gray-900 max-w-5xl leading-relaxed mb-8">
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
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={prat}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-4 border-[#f8f5ee]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              viewport={{ once: true }}
            />
            <h3 className="text-xl font-bold text-gray-900">Veera Pratap</h3>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-16 bg-[#6b7b57] overflow-hidden">
        {/* Decorative Image - Top Left */}
        <motion.img
          src={icon}
          alt="Decorative"
          className="absolute top-10 left-10 w-32 md:w-32 opacity-80 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Background Image - Bottom Right */}
        <motion.img
          src={bg1}
          alt="Background"
          className="absolute bottom-0 right-0 w-60 md:w-96 lg:w-[500px] opacity-40 pointer-events-none filter brightness-50"
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
              <p className="text-gray-100 text-center mt-4 leading-relaxed max-w-sm">
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
              <p className="text-gray-100 text-center mt-4 leading-relaxed max-w-sm">
                Pure Shilajit resin packed with natural minerals and energy. It
                helps in boosting stamina, improving focus, and maintaining
                overall body strength naturally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <img
            src={icon}
            alt="Leaf Decoration"
            className="absolute right-10 transform -translate-y-1/2 w-24 opacity-90"
          />

          <div className=" flex flex-col md:flex-row items-center md:items-start bg-[#667D60] gap-8 rounded-lg shadow-xl p-6 md:p-12">
            {/* Left Image Column */}
            <div className="md:w-1/2 ">
              <motion.img
                src={saf3} // Use an image of people with a healthy lifestyle or a product shot
                alt="Healthy lifestyle"
                className="rounded-lg w-full h-auto object-cover"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Right Content Column */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-6">
              <p className="text-xl font-bold uppercase text-white">
                Follow Us
              </p>
              <h2 className="text-3xl font-bold text-white">
                Transform your wellness journey with nature.
              </h2>
              <p className="text-white">
                Integrate the potent benefits of pure Saffron and authentic
                Shilajit Resin into your daily routine. Sourced from pristine
                environments, our products are designed to support your mental
                clarity, physical energy, and overall well-being.
              </p>
              <button className="bg-green-500 text-white font-medium py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>

  
      

    </div>
  );
}
