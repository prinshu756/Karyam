import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const loc = useLocation();

  return (
    <motion.header
      // Floating, soft background, shadow, fixed position
      className="sticky top-0 z-40 w-full p-4 bg-white/90 shadow-md backdrop-blur-sm"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-3xl font-bold text-teal-600 logo">
          <Link to="/">Karyam</Link>
        </div>

        <div className="flex items-center w-1/3 max-w-md search-bar">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            aria-label="search"
            className="px-4 py-3 text-white transition-colors duration-200 bg-teal-500 rounded-r-full hover:bg-teal-600"
          >
            <FaSearch className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex space-x-6 text-gray-700">
          {/* Active link styling using Tailwind */}
          <Link className={`hover:text-teal-600 transition-colors duration-150 ${loc.pathname === "/" ? "font-bold text-teal-600" : ""}`} to="/">Home</Link>
          <Link className={`hover:text-teal-600 transition-colors duration-150 ${loc.pathname === "/how-it-works" ? "font-bold text-teal-600" : ""}`} to="/how-it-works">How It Works</Link>
          <Link className={`hover:text-teal-600 transition-colors duration-150 ${loc.pathname === "/categories" ? "font-bold text-teal-600" : ""}`} to="/categories">Categories</Link>
          <Link className={`hover:text-teal-600 transition-colors duration-150 ${loc.pathname === "/login" ? "px-3 py-1 text-white bg-teal-500 rounded-full hover:bg-teal-600" : ""}`} to="/login">Login</Link>
          <Link className={`hover:text-teal-600 transition-colors duration-150 ${loc.pathname === "/signup" ? "px-3 py-1 text-white bg-teal-700 rounded-full hover:bg-teal-800" : ""}`} to="/signup">Sign Up</Link>
        </nav>
      </div>
    </motion.header>
  );
}