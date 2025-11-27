import React from "react";
import { motion } from "framer-motion";

export default function Categories() {
  const cats = ["Cleaning", "Plumbing", "Carpentry", "Painting", "Beauty", "Pest Control", "Electrical", "Gardening"];

  return (
    <div className="page categories-page bg-gray-50 min-h-screen pt-16">
      <section className="container p-8 mx-auto hero small text-center">
        <motion.h1 
          className="text-4xl font-bold text-gray-900" 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
        >
          Categories
        </motion.h1>
        <p className="mt-2 text-lg text-gray-500">Browse common service categories.</p>
      </section>

      <section className="container p-8 mx-auto mt-8 categories">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Popular Services</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 category-grid">
          {cats.map((c, i) => (
            <motion.div
              className="flex items-center justify-center p-6 text-xl font-semibold text-teal-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-md cursor-pointer"
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)", backgroundColor: "#F0FDF4" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {c}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}