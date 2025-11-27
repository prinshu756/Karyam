import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { num: 1, title: "Search", description: "Find a service or person in your area using filters and location." },
    { num: 2, title: "Connect", description: "Message and agree on time, price, and job details directly." },
    { num: 3, title: "Complete", description: "Get the job done, then leave ratings and reviews for trust." },
  ];

  const stepVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="page how-page bg-gray-50 min-h-screen pt-16">
      <section className="container p-8 mx-auto hero small text-center">
        <motion.h1 
          className="text-4xl font-bold text-gray-900"
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h1>
        <p className="mt-2 text-lg text-gray-500">Quick steps to get service or to provide help.</p>
      </section>

      <section className="container p-8 mx-auto mt-8 how-steps">
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              className="p-8 text-center bg-white rounded-xl shadow-lg border-t-4 border-teal-500" 
              key={index}
              variants={stepVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 text-5xl font-extrabold text-teal-500">{step.num}.</div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}