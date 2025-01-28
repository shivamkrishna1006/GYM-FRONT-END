import React from 'react';
import { motion } from 'framer-motion';
import { SlideLeft } from '../../utility/animation';

const Banner2 = () => {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase"
          >
            Get upto 45% Discount by being one of the First 1000 Customers
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            HURRY UP! Offer valid till the 1000th Customer
          </motion.p>
          {/* Buttons placed below the heading and paragraph */}
          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn">Enquire More</button>
            <button className="primary-btn border-2 border-primary font-bold px-5 rounded-lg">
              Avail
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
