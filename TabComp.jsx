import React, { useState } from "react";
import { ProductsData } from "../../mockdata/data";
import { motion } from "framer-motion";

const TabComp = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  // Filter the cards based on the active tab
  const filterCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <div className="container my-12 md:my-16">
      {/* Tabs */}
      <div className="flex space-x-4 mb-8 p-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filtered Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 border rounded shadow-sm hover:shadow-lg transition space-y-4"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold">{card.title}</h2>
            <p className="text-gray-600">{card.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TabComp;
