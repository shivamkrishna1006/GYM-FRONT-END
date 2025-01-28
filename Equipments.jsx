import React from 'react';
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import  {motion} from "framer-motion"

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "Yoga is a practice that combines physical postures, breathing exercises, and meditation to improve health and well-being. It originated as a spiritual practice thousands of years ago.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Dumbbells",
    desc: "Dumbbells are versatile weights used for strength training, targeting various muscle groups and improving overall fitness levels.",
    icon: <FaDumbbell />,
    delay: 0.5,
  },
  {
    id: 3,
    title: "Gym Bag",
    desc: "A gym bag is a convenient way to carry workout essentials like clothes, water bottles, and equipment to your fitness sessions.",
    icon: <GiGymBag />,
    delay: 0.7,
  },
];

const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid gap-6 font-playfair grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">What we offer you ?</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          {EquipmentData.map((item) => {
            return (
              <div
                key={item.id} // Added key to prevent React warnings
                className="space-y-4 p-6 bg-gray-100 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <div className='text-4xl'>{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equipments;

