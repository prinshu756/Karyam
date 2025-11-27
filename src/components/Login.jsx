import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  // no TS generic here in JS:
  const [role, setRole] = useState("worker"); // "worker" | "consumer"

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pretend ${role === "worker" ? "Worker" : "Consumer"} login successful!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 page auth-page">
      <motion.section
        className="w-full max-w-sm p-6 sm:p-8 bg-white rounded-xl shadow-2xl form-container"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Role Toggle */}
        <div className="mb-6 flex gap-2 bg-gray-100 p-1 rounded-full">
          <button
            type="button"
            onClick={() => setRole("worker")}
            className={`flex-1 px-3 py-2 text-sm sm:text-base font-semibold rounded-full transition 
              ${role === "worker" ? "bg-teal-600 text-white" : "bg-transparent text-gray-600 hover:bg-gray-200"}`}
          >
            Worker Login
          </button>
          <button
            type="button"
            onClick={() => setRole("consumer")}
            className={`flex-1 px-3 py-2 text-sm sm:text-base font-semibold rounded-full transition 
              ${role === "consumer" ? "bg-teal-600 text-white" : "bg-transparent text-gray-600 hover:bg-gray-200"}`}
          >
            Consumer Login
          </button>
        </div>

        <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-center text-gray-800">
          {role === "worker" ? "Worker Login" : "Consumer Login"}
        </h2>
        <p className="mb-6 text-center text-xs sm:text-sm text-gray-500">
          {role === "worker"
            ? "Sign in to find local jobs and manage your work."
            : "Sign in to hire trusted local workers around you."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 text-sm sm:text-lg font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors duration-200 cta-btn"
          >
            Login as {role === "worker" ? "Worker" : "Consumer"}
          </button>
        </form>
      </motion.section>
    </div>
  );
}
