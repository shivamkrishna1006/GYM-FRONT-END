import React from 'react';
import { FaPlay } from "react-icons/fa";
import HeroImg from "./body.png"; // Correct relative path to the image
import { SlideLeft } from '../../../utility/animation';
import { motion} from 'framer-motion';
const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={SlideLeft(0.6)}
              initial="hidden"
              animate="visible"
  className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
>
  <h1>
    Empower Your <span className="text-primary">Body</span>{" "}
  </h1>
  <p>
    Energize Your <span className="text-primary">Mind</span>{" "}
  </p>
</motion.h1>
              <p className="text-xl lg:text-2xl text-gray-600 xl:max-w-[500px]">
                A fitness movement that is worth breaking a sweat for.
              </p>

              {/* Button Section */}
              <div className="flex justify-center gap-8 md:justify-start">
                <button
                  className="primary-btn flex items-center gap-2 mt-4"
                  aria-label="Enroll Now"
                >
                  Enroll Now
                </button>
                <button
                  className="ternary-btn flex items-center gap-2 mt-4"
                  aria-label="Enquire"
                >
                  <FaPlay /> Watch Now
                </button>
              </div>
            </div>
          </div>
          {/* End of Brand Info */}

          {/* Hero Image */}
          <div className="relative w-full">
          <img 
              src={HeroImg} 
              alt="Hero Image" 
              className="object-cover w-full h-full md:h-[500px] lg:h-[600px] xl:h-[700px] drop-shadow-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
