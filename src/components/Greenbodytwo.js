import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { GiPlantSeed, GiFarmer } from "react-icons/gi";

import sidefive from "../assets/SA1.webp";
import sidefour from "../assets/SH3.webp";
import vec1 from "../assets/icon3.png";
import vec3 from "../assets/Vec3.png";
import vec4 from "../assets/vec4.png";
import { RiDoubleQuotesL } from "react-icons/ri";

function OrganicSection() {
  return (
    <section className="bg-[#5a6d53]  py-12 px-6">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center ">
          <div className="relative  w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            <div>
              {/* First Image (background one) */}
              <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={sidefour}
                  alt="Black Food"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second Image (front overlapping) */}
              <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={sidefive}
                  alt="Saffron"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="ml-40 mb-36">
            <RiDoubleQuotesL size={80} />
          </div>

          <div className="text-xl text-[#FFF7EC] font-semibold ml-24 mt-40">
            <div>There is an enormous amount of </div>
            <div>interest in raw and organic foods, but </div>
            <div>more recently it is superfoods. People</div>
            <div>want to know more about chia seeds,</div>
            <div>mocha, raw chocolate and cocoa, and </div>
            <div>what they can do for you.</div>
          </div>
          <div>
            <img src={vec1} alt="Black" className="w-36 h-28 ml-20 mb-40" />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-10">
          <div className="">
            <div className="mr-10 mb-10">
              <RiDoubleQuotesL size={80} />
            </div>
            <div>
              <div className="text-xl text-[#FFF7EC] font-semibold ml-36 mt-20">
                <div>There is an enormous amount of </div>
                <div>interest in raw and organic foods, but </div>
                <div>more recently it is superfoods. People</div>
                <div>want to know more about chia seeds,</div>
                <div>mocha, raw chocolate and cocoa, and </div>
                <div>what they can do for you.</div>
              </div>

              <div>
                <img
                  src={vec1}
                  alt="Black"
                  className="w-36 h-28 -ml-20 mt-10"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] ml-36">
              <div>
                {/* First Image (background one) */}
                <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={sidefour}
                    alt="Black Food"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Second Image (front overlapping) */}
                <div className="relative bottom-0 right-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={sidefive}
                    alt="Saffron"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-start gap-20">
  {/* First Item */}
  <div className="flex flex-col items-center text-center max-w-sm">
    <img src={vec3} alt="Farm Raised" className="w-24 h-24 mb-6" />
    <div className="font-semibold text-xl text-[#FFF7EC] space-y-2">
      <div>Farm raised food</div>
      <div>Pellentesque habitant tristique senectus et netus</div>
      <div>et malesuada ac turpis egestas. Suspendisse vel</div>
      <div>orci quis metus aliquam porta a eu dui. Integer</div>
      <div>tempor enim non nibh convallis maximus.</div>
    </div>
  </div>

  {/* Second Item */}
  <div className="flex flex-col items-center text-center max-w-sm">
    <img src={vec4} alt="Organic Food" className="w-24 h-24 mb-6" />
    <div className="font-semibold text-xl text-[#FFF7EC] space-y-2">
      <div>100% organic food</div>
      <div>Pellentesque habitant tristique senectus et netus et</div>
      <div>malesuada ac turpis egestas. Suspendisse vel orci</div>
      <div>quis metus aliquam porta a eu dui. Integer tempor</div>
      <div>enim non nibh convallis maximus.</div>
    </div>
  </div>

  {/* Third Item */}
  <div className="flex flex-col items-center text-center">
    <img src={vec1} alt="Vector Icon" className="w-36 h-28 mt-6" />
  </div>
</div>

      </div>
    </section>
  );
}

export default OrganicSection;
