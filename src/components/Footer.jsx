import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg" 
import bg from "../assets/bg.jpg"// only if you use react-router

const Footer = () => {
  return (
    <footer
      className="relative text-white py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }} // change path to your footer background image
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#667D60] bg-opacity-90"></div>
    
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Left - Logo & Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src={logo}  // replace with your logo path
            alt="Saffron & Shilajit Logo" 
            className="w-16 h-16 mb-3"
          />
          <h2 className="text-2xl font-bold">Saffron & Shilajit</h2>
          <p className="text-sm mt-2 leading-relaxed text-center md:text-left">
            Bringing you nature’s purest treasures – premium saffron & shilajit 
            for health, wellness, and vitality.
          </p>
        </div>
    
        {/* Middle - Navigation */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-200 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-200 transition">Contact</Link>
          <Link to="/blogs" className="hover:text-yellow-200 transition">Blogs</Link>
          <Link to="/products" className="hover:text-yellow-200 transition">Products</Link>
        </div>
    
        {/* Right - Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-sm mt-2">Email: support@saffronshilajit.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Mon - Fri: 10am - 5pm</p>
        </div>
      </div>
    
      {/* Bottom Bar */}
      {/* <div className="relative border-t border-gray-400 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Saffron & Shilajit. All Rights Reserved.
      </div> */}
    </footer>
  );
};

export default Footer;
