import React, { useState } from "react";
import SA3 from "../assets/SA3.webp";
import saf1 from "../assets/saf1.jpg";
import SH2 from "../assets/SH2.png";
import SA1 from "../assets/SA1.webp";
import icon3 from "../assets/icon3.png";
import shil3 from "../assets/shil3.jpg";
import SA4 from "../assets/SA4.webp";
import icon from "../assets/icon.png";
import { motion } from "framer-motion";

function Products() {
  const [saffronWeight, setSaffronWeight] = useState("");
  const [shilajitWeight, setShilajitWeight] = useState("");

  const saffronPrices = {
    "10grams": 500,
    "50grams": 2000,
    "100grams": 3500,
    "1kg": 50000,
  };

  const shilajitPrices = {
    "10grams": 300,
    "50grams": 1200,
    "100grams": 2000,
    "1kg": 5000,
  };

  return (
    <div className="w-full">
      {/* ===== Section 1: Our Products ===== */}
      <section className="bg-[#667D60] text-white py-14 px-6 md:px-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side Text */}
          <div>
            <h1 className="text-6xl font-bold mb-6 font-serif">OUR PRODUCTS</h1>
            <ul className="list-decimal ml-10 space-y-3 text-3xl font-bold font-serif">
              <li>SAFFRON</li>
              <li>SHILAJIT RESIN</li>
            </ul>
          </div>

          {/* Decorative Image */}
          <img
            src={icon3}
            alt="Decorative"
            className="absolute left-1/2 top-1/2 w-32 md:w-24 opacity-80 pointer-events-none transform -translate-x-[150%] translate-y-[20%]"
          />

          {/* Right Side Images */}
          <div className="flex gap-6">
            <div className="w-72 md:w-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src={SA1}
                alt="Saffron"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-72 md:w-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src={SH2}
                alt="Shilajit Resin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Items ===== */}
      <section className="bg-[#FFF7EC] py-12 px-6 md:px-16">
        <img
          src={icon} // replace with your decorative image path
          alt="Decorative"
          className="absolute left-20 w-32 md:w-24 opacity-80 pointer-events-none -translate-x-[60%] translate-y-[-25%] "
        />
        <h2 className="text-3xl font-bold text-center mb-10">Items</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Saffron Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
            <motion.div
              className="w-full h-64 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 50 }} // fade + slide up on load
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }} // zoom effect on hover
            >
              <motion.img
                src={SA4}
                alt="Saffron"
                className="w-full h-full object-cover"
                animate={{ y: [0, -10, 0] }} // floating animation
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <h3 className="text-xl font-bold mt-4">SAFFRON</h3>
            <p className="text-gray-700">Starting from Rs: 500 / 10g</p>

            {/* Dropdown + Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <select
                value={saffronWeight}
                onChange={(e) => setSaffronWeight(e.target.value)}
                className="border rounded-lg p-2"
              >
                <option value="">Select Weight</option>
                {Object.keys(saffronPrices).map((weight) => (
                  <option key={weight} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>

              <div className="flex gap-3">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex-1"
                  disabled={!saffronWeight}
                >
                  {saffronWeight
                    ? `Buy - Rs ${saffronPrices[saffronWeight]}`
                    : "Buy"}
                </button>
                <button
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex-1"
                  disabled={!saffronWeight}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Shilajit Resin Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
            <motion.div
              className="w-full h-64 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={shil3}
                alt="Shilajit Resin"
                className="w-full h-full object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <h3 className="text-xl font-bold mt-4">SHILAJIT RESIN</h3>
            <p className="text-gray-700">Starting from Rs: 300 / 10g</p>

            {/* Dropdown + Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <select
                value={shilajitWeight}
                onChange={(e) => setShilajitWeight(e.target.value)}
                className="border rounded-lg p-2"
              >
                <option value="">Select Weight</option>
                {Object.keys(shilajitPrices).map((weight) => (
                  <option key={weight} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>

              <div className="flex gap-3">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex-1"
                  disabled={!shilajitWeight}
                >
                  {shilajitWeight
                    ? `Buy - Rs ${shilajitPrices[shilajitWeight]}`
                    : "Buy"}
                </button>
                <button
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex-1"
                  disabled={!shilajitWeight}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl bg-[#5B7553] font-bold text-center py-10 tracking-wide">
          PRODUCT DETAILS
        </h2>

        {/* Product 1 - Saffron */}
        <div className="relative bg-[#5B7553] text-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Decorative Icons */}
          <img
            src={icon}
            alt="leaf"
            className="absolute top-6 left-6 w-12 opacity-80"
          />
          <img
            src={icon3}
            alt="leaf"
            className="absolute bottom-6 right-6 w-12 opacity-80"
          />

          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={SA3}
              alt="Saffron"
              className="rounded-2xl w-80 h-64 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-bold text-center mt-4">SAFFRON</h3>
          </div>

          {/* Product Quote */}
          <div className="max-w-xl text-lg leading-relaxed font-serif">
            <p className="relative">
              <span className="absolute -left-6 -top-4 text-5xl">“</span>
              There is an enormous amount of interest in raw and organic foods,
              but more recently it is superfoods. People want to know more about
              chia seeds, mocha, raw chocolate and cocoa, and what they can do
              for you.
            </p>
          </div>
        </div>

        {/* Product 2 - Shilajit Resin */}
        <div className="relative bg-[#FFF7EC] text-gray-900 px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Decorative Icons */}
          <img
            src={icon}
            alt="leaf"
            className="absolute bottom-6 left-6 w-12 opacity-80"
          />
          <img
            src={icon}
            alt="leaf"
            className="absolute top-6 right-6 w-12 opacity-80"
          />

          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={shil3}
              alt="Shilajit Resin"
              className="rounded-2xl w-72 h-72 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-bold text-center mt-4">
              SHILAJIT RESIN
            </h3>
          </div>

          {/* Product Quote */}
          <div className="max-w-xl text-lg leading-relaxed font-serif">
            <p className="relative">
              <span className="absolute -left-6 -top-4 text-5xl">“</span>
              There is an enormous amount of interest in raw and organic foods,
              but more recently it is superfoods. People want to know more about
              chia seeds, mocha, raw chocolate and cocoa, and what they can do
              for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
