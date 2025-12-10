import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    loc.pathname === path ? "font-semibold text-teal-600" : "text-gray-700";

  return (
    <motion.header
      className="fixed top-0 z-40 w-full bg-white/95 shadow-sm backdrop-blur-sm"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 16 }}
    >
      {/* main bar with reduced height */}
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5">
        {/* Left: logo */}
        <div className="sticky flex items-center">
          <Link to="/" className="inline-flex items-center">
            <img
              src="Karyam3.webp"
              alt="Karyam Logo"
              className="w-24 sm:w-28 h-auto"
            />
          </Link>
        </div>

        {/* Center: search (hidden on small screens) */}
        <div className="hidden md:flex items-center w-1/3 max-w-md">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-3 py-1.5 border border-gray-300 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            aria-label="search"
            className="px-3 py-2 text-white text-sm transition-colors duration-200 bg-teal-500 rounded-r-full hover:bg-teal-600"
          >
            <FaSearch className="w-4 h-4" />
          </button>
        </div>

        {/* Right: desktop nav */}
        <nav className="hidden md:flex items-center space-x-5 text-xs sm:text-sm lg:text-base">
          <Link
            className={`hover:text-teal-600 transition-colors ${isActive("/")}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`hover:text-teal-600 transition-colors ${isActive(
              "/how-it-works"
            )}`}
            to="/how-it-works"
          >
            How It Works
          </Link>
          <Link
            className={`hover:text-teal-600 transition-colors ${isActive(
              "/categories"
            )}`}
            to="/categories"
          >
            Categories
          </Link>
          <Link
            className={`transition-colors ${
              loc.pathname === "/login"
                ? "px-3 py-1 text-xs sm:text-sm text-white bg-teal-500 rounded-full hover:bg-teal-600"
                : "hover:text-teal-600"
            }`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`transition-colors ${
              loc.pathname === "/signup"
                ? "px-3 py-1 text-xs sm:text-sm text-white bg-teal-700 rounded-full hover:bg-teal-800"
                : "hover:text-teal-600"
            }`}
            to="/signup"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-1.5 rounded-full border border-gray-200 text-gray-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white/95 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Mobile search */}
            <div className="px-4 pt-2 pb-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Search services..."
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                aria-label="search"
                className="p-2 rounded-full bg-teal-500 text-white"
              >
                <FaSearch className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile links */}
            <nav className="px-4 pb-3 flex flex-col space-y-1 text-sm">
              <Link
                onClick={() => setOpen(false)}
                className={`py-1.5 ${isActive("/")}`}
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className={`py-1.5 ${isActive("/how-it-works")}`}
                to="/how-it-works"
              >
                How It Works
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className={`py-1.5 ${isActive("/categories")}`}
                to="/categories"
              >
                Categories
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className={`py-1.5 ${
                  loc.pathname === "/login"
                    ? "text-white bg-teal-500 rounded-full text-center"
                    : "text-teal-600"
                }`}
                to="/login"
              >
                Login
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className={`py-1.5 ${
                  loc.pathname === "/signup"
                    ? "text-white bg-teal-700 rounded-full text-center"
                    : "text-teal-700"
                }`}
                to="/signup"
              >
                Sign Up
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
