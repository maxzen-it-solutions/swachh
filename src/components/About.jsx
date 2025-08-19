import React from "react";
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
import shil3 from "../assets/shil3.jpg";
import saf3 from "../assets/saf3.jpg";
import SA4 from "../assets/SA4.webp";

export default function About() {
  return (
    <div className="w-full">
      {/* About Us Section */}
      <section className="bg-[#667D60] text-white py-16 px-6 md:px-16">
        <img
          src={icon3}
          alt="Leaf Decoration"
          className="absolute right-6 transform -translate-y-1/2 w-24 opacity-90"
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
            <p className="text-black leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={sh} // replace with your image path
              alt="About Us"
              className="rounded-xl shadow-lg w-96"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-cream py-16 px-6 md:px-16 bg-[#fffaf3]">
        <img
          src={icon}
          alt="Leaf Decoration"
          className="absolute left-6 transform -translate-y-1/2 w-24 opacity-90"
        />
        <img
          src={icon}
          alt="leaf"
          className="absolute -bottom-44 right-6 w-24 opacity-90"
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div>
            <img src={saf3} alt="History" className="rounded-xl shadow-lg" />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">History</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              1955 Beginning of Male – Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent viverra, nunc nec euismod ullamcorper,
              velit nunc cursus justo, nec malesuada magna felis nec nisi.
            </p>

            {/* Small Images */}
            <div className="flex space-x-4">
              <img
                src={shil2}
                alt="Small 1"
                className="w-20 h-20 object-cover rounded-lg shadow-md"
              />
              <img
                src={saf2}
                alt="Small 2"
                className="w-20 h-20 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Stores Section */}
      <section className="bg-[#667D60] py-16 px-6 md:px-16 text-white">
        <motion.img
          src={icon}
          alt="Decorative"
          className="absolute left-6 w-24 opacity-80 -translate-y-20 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-4xl font-bold mb-12">Our Stores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
              <img
                src={saf1}
                alt="Farm raised food"
                className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-black text-lg mb-2">
                Farm raised food
              </h4>
              <p className="text-black">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>
            <img
              src={icon3}
              alt="Leaf Decoration"
              className="absolute right-6 transform translate-y-56 w-24 opacity-90"
            />

            {/* Card 2 */}
            <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
              <img
                src={SH2}
                alt="100% organic food"
                className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-black text-lg mb-2">
                100% organic food
              </h4>
              <p className="text-black">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fff7ef] rounded-lg shadow-md p-6 text-center">
              <img
                src={SA4}
                alt="Grown naturally"
                className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-black text-lg mb-2">
                Grown naturally
              </h4>
              <p className="text-black">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 px-6 md:px-16 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto">
            <img
            src={icon}
            alt="Leaf Decoration"
            className="absolute left-6 transform -translate-y-5 w-24 opacity-90"
          />
          <img
            src={icon}
            alt="Leaf Decoration"
            className="absolute right-6 transform translate-y-72 w-24 opacity-90"
          />
          <h3 className="text-center text-2xl font-bold mb-12">OUR PRODUCTS</h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            <img
              src={SH3}
              alt="Product 1"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img
              src={SA4}
              alt="Product 2"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img
              src={SH2}
              alt="Product 3"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img
              src={saf2}
              alt="Product 4"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
