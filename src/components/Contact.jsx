import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import SH2 from "../assets/SH2.png";
import icon3 from "../assets/icon3.png";
import saf3 from "../assets/saf3.jpg";
import icon from "../assets/icon.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div>
    <section className="bg-[#667D60] py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">CONTACT US</h2>
          <p className="text-white leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vestibulum urna augue. Duis sit amet maximus commodo hendrerit lorem
            maximus mi.
          </p>

          {/* Leaf Icon */}
          <div className="mt-6 relative">
            <motion.img
              src={icon3}
              alt="Leaf Icon"
              className="absolute -bottom-15 left-0 w-24 opacity-80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={SH2}
            alt="spices"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#FDF6ED] py-16 mt-12">
        <div className="mt-6 relative">
            <motion.img
                        src={icon}
                        alt="Leaf Right"
                        className="absolute right-6 top-0 transform -translate-y-1/2 w-16 md:w-20 opacity-80 rotate-180"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true }}
                      />
          </div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Left - Blog / Info */}
          <div>
            <h2 className="text-center text-3xl font-bold mb-6">Ask us</h2>
            <div className="flex flex-col items-center text-center">
              <img
                src={saf3}
                alt="blog"
                className="w-60 h-60 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-black bg-[#667D60] max-w-sm">
                We're here to help! If you have any questions about our website
                please email <b>web@email.com</b>, fill out the form or call{" "}
                <b>+44 650.800.3124</b>. <br />
                Monday to Friday, 10am-5pm
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="NAME"
              className="w-full bg-[#667D60] text-white px-4 py-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="E MAIL"
              className="w-full bg-[#667D60] text-white px-4 py-3 focus:outline-none"
            />
            <input
              type="text"
              placeholder="SUBJECT"
              className="w-full bg-[#667D60] text-white px-4 py-3 focus:outline-none"
            />
            <textarea
              placeholder="MESSAGE"
              rows="4"
              className="w-full bg-[#667D60] text-white px-4 py-3 focus:outline-none"
            ></textarea>
            <button className="bg-[#667D60] hover:bg-[#4e5f48] transition-colors duration-300 text-white px-6 py-3 w-full">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
    <section className="py-20 px-6 md:px-10 bg-[#667D60] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Location */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FDF6ED] p-8 rounded-lg text-center hover:shadow-xl transition"
        >
          <FaMapMarkerAlt className="text-3xl mx-auto text-[#667D60]" />
          <h3 className="text-xl mt-4 mb-2 text-black font-semibold">Location</h3>
          <p className="text-[#667D60]">123 Main Street, Tech City, India</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FDF6ED] p-8 rounded-lg text-center hover:shadow-xl transition"
        >
          <FaPhoneAlt className="text-3xl mx-auto text-[#667D60]" />
          <h3 className="text-xl mt-4 mb-2 text-black font-semibold">Call Us Anytime</h3>
          <p className="text-[#667D60]">+91 9542108787</p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FDF6ED] p-8 rounded-lg text-center hover:shadow-xl transition"
        >
          <FaEnvelope className="text-3xl mx-auto text-[#667D60]" />
          <h3 className="text-xl mt-4 mb-2 text-black font-semibold">Send Us Email</h3>
          <p className="text-[#667D60]">Swachh.co</p>
        </motion.div>
      </div>
    </section>

    <section className="w-full h-96">
        <iframe
          className="w-full h-full"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.389664134884!2d73.91534917506523!3d18.555330582557347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10d0d8d3c0f%3A0x71e18571c68cd55!2sPune%20University!5e0!3m2!1sen!2sin!4v1690900347051!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
    </div>

  );
};

export default Contact;
