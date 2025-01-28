import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import { Testimonials as TestimonialData } from "../../mockdata/data"; // Mock data import

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div>
          <h1 className="text-left mb-10 max-w-[500px] space-y-2 mr-auto font-bold text-2xl">
            What Are The Customers Saying About Us
          </h1>
        </div>

        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10 relative">
                  {/* User Image */}
                  <img
                    src={data.userImg}
                    alt={`${data.name}'s image`}
                    className="rounded-full w-16 h-16"
                  />

                  <div className="flex justify-start items-center gap-5 mt-4">
                    <div>
                      <p className="text-xl font-bold text-black/80">{data.name}</p>
                      <p>{data.text}</p>
                    </div>
                  </div>

                  <div className="py-6 space-y-4">
                    <p>★★★★★</p> {/* Display rating here */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
