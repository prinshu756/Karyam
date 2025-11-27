import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500); // Increased splash time for effect
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          // Added full screen, soft background, and centering classes
          className="fixed inset-0 z-50 flex items-center justify-center bg-teal-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            // Added text styling for the loader content
            className="text-center text-gray-800"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          >
            <h1 className="text-6xl font-extrabold text-teal-600 logo">Karyam</h1>
            <p className="mt-2 text-xl font-light tracking-wider">Connecting People...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}