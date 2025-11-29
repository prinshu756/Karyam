// src/pages/Categories.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../data.json";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  const categories = [
    "Cleaning", 
    "Plumbing", 
    "Carpentry", 
    "Painting", 
    "Beauty", 
    "Milkman", 
    "Electrical", 
    "Gardener"
  ];

  // Map categories to worker skills from data.json
  const categoryToSkillsMap = {
    "Cleaning": ["House Cleaning"],
    "Plumbing": ["Plumbing"],
    "Carpentry": ["Carpentry", "Woodwork"],
    "Painting": ["Painting"],
    "Beauty": [ "Beauty Services", "Salon" ],
    "Milkman": ["Milk Delivery", "Dairy Products"],
    "Electrical": ["Electrician"],
    "Gardener": ["Gardening", "Landscaping"],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    
    if (category === selectedCategory) {
      // Clear filter
      setFilteredWorkers([]);
      return;
    }

    // Filter workers based on category
    const matchingSkills = categoryToSkillsMap[category] || [];
    const workers = data.workers?.filter(worker => 
      worker.skills?.some(skill => matchingSkills.includes(skill))
    ) || [];
    
    setFilteredWorkers(workers);
  };

  const getBorderClass = (color) => {
    const colors = {
      orange: "border-orange-400",
      blue: "border-blue-400", 
      green: "border-green-400",
      pink: "border-pink-400",
      teal: "border-teal-400",
      purple: "border-purple-400",
    };
    return colors[color] || "border-gray-400";
  };

  return (
    <div className="page categories-page bg-gray-50 min-h-screen pt-16">
      {/* Hero Section */}
      <section className="container p-8 mx-auto hero small text-center">
        <motion.h1 
          className="text-4xl font-bold text-gray-900" 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
        >
          Categories
        </motion.h1>
        <p className="mt-2 text-lg text-gray-500">
          Browse common service categories and find trusted professionals.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="container p-8 mx-auto mt-8 categories">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Popular Services</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 category-grid">
          {categories.map((category, i) => (
            <motion.div
              className={`
                flex items-center justify-center p-6 text-xl font-semibold 
                transition-all duration-300 bg-white border rounded-xl shadow-md cursor-pointer
                ${selectedCategory === category 
                  ? "border-4 border-teal-600 bg-teal-50 shadow-2xl text-teal-800 scale-105" 
                  : "border-gray-200 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                }
              `}
              key={i}
              onClick={() => handleCategoryClick(category)}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {category}
              {selectedCategory === category && filteredWorkers.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                  {filteredWorkers.length}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filtered Workers Section */}
      {selectedCategory && filteredWorkers.length > 0 && (
        <section className="container p-8 mx-auto mt-16 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <span className="text-teal-600">"{selectedCategory}"</span> Professionals
              </h3>
              <p className="text-lg text-gray-600">
                {filteredWorkers.length} verified workers available near you
              </p>
            </div>
            <motion.button
              onClick={() => {
                setSelectedCategory(null);
                setFilteredWorkers([]);
              }}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-semibold text-sm shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Clear Filter
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredWorkers.map((worker, index) => (
              <motion.div
                key={worker.id}
                className={`
                  bg-white p-6 lg:p-8 rounded-2xl shadow-xl border-t-4 text-center group
                  hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
                  ${getBorderClass(worker.badgeColor)}
                `}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl lg:text-6xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {worker.emoji}
                </div>
                
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  {worker.shortName}
                </h4>
                
                <p className="text-gray-700 text-sm lg:text-base font-semibold mb-4">
                  {worker.role}
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs lg:text-sm font-semibold shadow-sm">
                    {worker.experienceLabel}
                  </span>
                  {worker.bisCertified && (
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 border-2 border-blue-200 rounded-full text-xs lg:text-sm font-medium shadow-sm">
                      BIS Certified
                    </span>
                  )}
                  <span className="text-xs lg:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {worker.location}
                  </span>
                </div>
                
                <a
                  href={`/workers/${worker.id}`}
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-bold text-sm lg:text-base group/link transition-all duration-300 hover:underline hover:decoration-2"
                >
                  View Profile
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* No workers message */}
      {selectedCategory && filteredWorkers.length === 0 && (
        <section className="container p-8 mx-auto mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200 max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No workers found for "{selectedCategory}"
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We're working to bring more professionals to this category soon.
            </p>
            <motion.button
              onClick={() => {
                setSelectedCategory(null);
                setFilteredWorkers([]);
              }}
              className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl shadow-lg hover:bg-teal-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Browse Other Categories
            </motion.button>
          </motion.div>
        </section>
      )}
    </div>
  );
}
