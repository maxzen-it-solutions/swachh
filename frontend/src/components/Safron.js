import React, { useState, useEffect } from "react";
import Saffron from "../assets/saf-v1.mp4";
import Shila from "../assets/PixVerse_V5_Image_Text_360P (1).mp4";

const slides = [
  { video: Saffron, title: "Saffron" },
  { video: Shila, title: "Shilajit" },
];

function Safron() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[32rem] overflow-hidden shadow-xl rounded-xl">
      {/* Slide */}
      <div className="absolute inset-0">
        <video
          key={slides[current].video}
          src={slides[current].video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="uppercase font-extrabold tracking-wide text-4xl sm:text-6xl md:text-7xl text-white drop-shadow-xl text-center px-4">
          {slides[current].title}
        </h1>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Safron;
