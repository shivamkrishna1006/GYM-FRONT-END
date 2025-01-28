

import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./components/Navbarx/Navbarx";
import Hero from "./components/Navbarx/Hero/Hero";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
const bgStyle = {
  backgroundColor: "#606060",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const Banner1Data = {
  image: Img1,
  title: "Get Fit with Our Exclusive Gym Offer!",
  subtitle: "Join now and get 45% OFF! Limited time offer for the first 1000 customers.",
  link: "#",
  alt: "Gym promotion banner",
  bgColor: "#a0a0a0"
};

const Banner2Data = {
  image: Img2,
  title: "Get Fit with Our Exclusive Gym Offer!",
  subtitle: "Join now and get 45% OFF! Limited time offer for the first 1000 customers.",
  link: "#",
  alt: "Gym promotion banner",
};


function App() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>

      {/* Equipments Section */}
      <Equipments />

      {/* Banner Section */}
      <Banner key="banner1" {...Banner1Data} />

      {/* Tabs Section */}
      <div className="tab-comp">
        <TabComp />
      </div>

      {/* Testimonials Section */}
      <div className="testimonials my-12">
        <Testimonials />
      </div>
      <div>
        <Banner2 />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
