import React from "react";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 page auth-page">
      <motion.section 
        // Card styling: centered, white background, rounded, shadow
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl form-container" 
        initial={{ y: 8, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Create Account</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Pretend signup successful!"); }} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-600">Full Name</label>
            <input type="text" placeholder="Enter your full name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">Email</label>
            <input type="email" placeholder="Enter your email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">Password</label>
            <input type="password" placeholder="Enter your password" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-3 text-lg font-semibold text-white transition-colors duration-200 bg-teal-600 rounded-lg hover:bg-teal-700 cta-btn"
          >
            Sign Up
          </button>
        </form>
      </motion.section>
    </div>
  );
}