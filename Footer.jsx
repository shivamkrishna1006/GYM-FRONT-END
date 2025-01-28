import React from 'react';
import { FaDumbbell } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl shadow-lg'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-4 py-8 border-t-2 border-gray-300/10 text-white'>
          {/* Brand Section - Left Aligned */}
          <div className='col-span-1 md:col-span-3 py-8 px-4'>
            <div className='flex flex-col items-start space-y-4'>
              <div className='text-3xl flex items-center gap-2 font-extrabold uppercase text-gray-100'>
                <FaDumbbell />
                <p>Fit</p>
                <p className='text-primary font-semibold'>Nation</p>
              </div>
              <p className='text-sm text-gray-400'>
                At Fit Nation, we're dedicated to helping you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, our expert resources, workout plans, and community support will guide you every step of the way. Join us and take your fitness journey to the next level!
              </p>
              <div className='flex justify-start gap-6 mt-6'>
                <a href="#" aria-label="Location" className="text-3xl hover:text-primary transition">
                  <FaLocationArrow />
                </a>
                <a href="#" aria-label="Instagram" className="text-3xl hover:text-primary transition">
                  <IoLogoInstagram />
                </a>
                <a href="#" aria-label="YouTube" className="text-3xl hover:text-primary transition">
                  <FaYoutube />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-3xl hover:text-primary transition">
                  <CiLinkedin />
                </a>
                <a href="#" aria-label="Twitter" className="text-3xl hover:text-primary transition">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links - Right Aligned */}
          <div className='col-span-1 md:col-span-1 flex justify-end py-8 px-4'>
            <div>
              <h2 className='sm:text-xl text-2xl font-semibold text-left mb-6 text-gray-200'>
                Important Links
              </h2>
              <ul className='flex flex-col gap-4'>
                <li>
                  <a href="#" className='text-gray-300 hover:text-primary transition'>Home</a>
                </li>
                <li>
                  <a href="#" className='text-gray-300 hover:text-primary transition'>About</a>
                </li>
                <li>
                  <a href="#" className='text-gray-300 hover:text-primary transition'>Services</a>
                </li>
                <li>
                  <a href="#" className='text-gray-300 hover:text-primary transition'>Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='py-4 border-t border-gray-300/10 text-center text-sm text-gray-400'>
          <p>&copy; {new Date().getFullYear()} Fit Nation. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
