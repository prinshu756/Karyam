// src/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../data.json";

/* ICONS */
const IconBroom = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M455.5 32H56.5C31.3 32 10 53.3 10 78.5v4.3c0 10.9 5.5 21 14.8 26.6l103.2 60.1V400H10v72h492v-72h-98V170.8l103.2-60.1c9.3-5.6 14.8-15.7 14.8-26.6v-4.3c0-25.2-21.3-46.5-46.5-46.5z" />
  </svg>
);

const IconWrench = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M501 101.4L436.3 36.7c-9.4-9.4-24.6-9.4-33.9 0L247.9 190c-6.8-4-14.7-6.2-22.9-6.2-28.5 0-51.6 23.1-51.6 51.6s23.1 51.6 51.6 51.6c8.2 0 16.1-2.2 22.9-6.2l154.5 154.5c9.4 9.4 24.6 9.4 33.9 0l64.7-64.7c9.4-9.4 9.4-24.6 0-33.9L445.6 256.1c4-6.8 6.2-14.7 6.2-22.9 0-28.5-23.1-51.6-51.6-51.6s-51.6 23.1-51.6 51.6c0 8.2 2.2 16.1 6.2 22.9l19.4 33.4L466.7 93.6c9.4-9.4 9.4-24.6 0-33.9z" />
  </svg>
);

const IconHammer = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M487.3 124.7l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-37.4 37.4 113.9 113.9 37.4-37.4c9.4-9.4 9.4-24.6 0-33.9z" />
  </svg>
);

const IconPaintRoller = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M464 128h-32c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32z" />
  </svg>
);

const IconBug = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z" />
  </svg>
);

const IconSearch = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M416 208c0 45.9-14.9 88.3-40.8 122.7L502.8 459" />
  </svg>
);

/* CATEGORY DATA */
const categories = [
  { label: "House Cleaning", icon: <IconBroom /> },
  { label: "Plumbing & Repairs", icon: <IconWrench />, path: "/plumbing" },
  { label: "Woodwork & Building", icon: <IconHammer /> },
  { label: "Wall Painting", icon: <IconPaintRoller /> },
  { label: "Pest Control", icon: <IconBug /> },
];

export default function Home() {
  const workers = data.workers; // ram + pooja from data.json

  const ram = workers.find((w) => w.id === "ram");
  const pooja = workers.find((w) => w.id === "pooja");

  return (
    <div className="min-h-screen bg-[#f8f5ef] overflow-x-hidden font-sans">
      {/* HERO SECTION (unchanged) */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative mt-16 sm:mt-20 md:mt-24 mb-12 sm:mb-16 md:mb-20">
            <div
              className="
                absolute inset-0 
                rounded-2xl sm:rounded-3xl 
                bg-[url('https://i.imgur.com/B5KfN1h.jpeg')] 
                bg-cover bg-center bg-no-repeat
              "
            />
            <div className="relative z-10 backdrop-brightness-75/90 bg-black/40 p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Karyam
              </motion.h1>

              <motion.h2
                className="
                  mt-3 
                  text-base sm:text-lg md:text-2xl lg:text-3xl 
                  font-semibold text-[#FFF6AA] 
                  max-w-xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Connecting hardworking skilled workers with local job opportunities.
              </motion.h2>

              <motion.div
                className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-white text-sm sm:text-base md:text-lg max-w-lg">
                  Find trusted workers for cleaning, repairs, and daily help.
                </p>

                <p className="text-white text-sm sm:text-base md:text-lg max-w-lg">
                  OR — If you have a skill, start earning today.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <Link
                    to="/search"
                    className="
                      w-full sm:w-auto text-center
                      px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 
                      text-sm sm:text-base md:text-lg 
                      font-bold bg-blue-500 text-white 
                      rounded-xl hover:bg-blue-600 
                      transition shadow-xl
                    "
                  >
                    Find a Worker Near You
                  </Link>

                  <Link
                    to="/signup"
                    className="
                      w-full sm:w-auto text-center
                      px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 
                      text-sm sm:text-base md:text-lg 
                      font-bold bg-orange-400 text-gray-900 
                      rounded-xl hover:bg-orange-500 
                      transition shadow-xl
                    "
                  >
                    I Want Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SKILLS (unchanged) */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 mt-4 sm:mt-6 md:mt-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-10 md:mb-12">
          Popular Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              className="
                p-4 sm:p-5 md:p-7 lg:p-8 
                bg-white rounded-2xl sm:rounded-3xl 
                shadow-md border border-gray-200 
                hover:shadow-2xl flex flex-col items-center 
                cursor-pointer transition
              "
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#FFF6AA] rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow">
                {React.cloneElement(c.icon, {
                  className:
                    "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-gray-900",
                })}
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 text-center">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEARCH SECTION (unchanged) */}
      <section className="mt-14 sm:mt-16 md:mt-24 container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="
            bg-white border-2 border-black 
            shadow-2xl rounded-2xl sm:rounded-3xl 
            p-5 sm:p-7 md:p-10 lg:p-12
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-6 sm:mb-8 text-center">
            Find the Right Professional
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            <motion.input
              whileHover={{ scale: 1.02 }}
              className="w-full p-3 sm:p-4 border-2 border-black rounded-xl text-black bg-white shadow-md text-sm sm:text-base"
              placeholder="📍 City, Area or Pin Code"
            />

            <motion.select
              whileHover={{ scale: 1.02 }}
              className="w-full p-3 sm:p-4 border-2 border-black rounded-xl text-black bg-white shadow-md text-sm sm:text-base"
            >
              <option>All Skills</option>
              <option>House Cleaning</option>
              <option>Plumbing</option>
              <option>Electrician</option>
              <option>Carpentry</option>
              <option>Painting</option>
            </motion.select>

            <motion.select
              whileHover={{ scale: 1.02 }}
              className="w-full p-3 sm:p-4 border-2 border-black rounded-xl text-black bg-white shadow-md text-sm sm:text-base"
            >
              <option>Budget Range</option>
              <option>₹50 - ₹200</option>
              <option>₹200 - ₹500</option>
              <option>₹500 - ₹1000</option>
              <option>₹1000+</option>
            </motion.select>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
                w-full flex items-center justify-center gap-2 
                bg-black text-white font-bold 
                p-3 sm:p-4 rounded-xl 
                text-sm sm:text-base md:text-lg shadow-xl
              "
            >
              <IconSearch className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              Search
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* TRUSTED WORKERS (uses data.json + routes /workers/:id) */}
      <section className="mt-16 sm:mt-20 md:mt-24 pb-16 sm:pb-20 md:pb-24 container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 sm:mb-3">
          Trusted Local Workers
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-xl text-xs sm:text-sm md:text-base">
          Skilled professionals near you, verified & ready to help.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Ram card */}
          {ram && (
            <motion.div
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-t-4 border-orange-400 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">
                {ram.emoji}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {ram.shortName}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                {ram.role}
              </p>
              <div className="flex items-center justify-center gap-2 mb-5 sm:mb-6">
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-[10px] sm:text-xs md:text-sm">
                  {ram.experienceLabel}
                </span>
                {ram.bisCertified && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-300 rounded-full text-[10px] sm:text-xs md:text-sm">
                    BIS Certified
                  </span>
                )}
              </div>
              <Link
                className="text-blue-600 font-medium text-xs sm:text-sm md:text-base underline"
                to={`/workers/${ram.id}`}
              >
                View Profile
              </Link>
            </motion.div>
          )}

          {/* Pooja card */}
          {pooja && (
            <motion.div
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-t-4 border-blue-400 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">
                {pooja.emoji}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {pooja.shortName}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                {pooja.role}
              </p>
              <div className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-[10px] sm:text-xs md:text-sm mb-5 sm:mb-6 inline-block">
                {pooja.experienceLabel}
              </div>
              <Link
                className="text-blue-600 font-medium text-xs sm:text-sm md:text-base underline"
                to={`/workers/${pooja.id}`}
              >
                View Profile
              </Link>
            </motion.div>
          )}

          {/* CTA card stays same */}
          <motion.div
            className="bg-blue-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-blue-300 border-dashed text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl sm:text-6xl md:text-7xl mb-2 sm:mb-3 text-blue-600">
              💡
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700 mb-1 sm:mb-2">
              Got a Skill?
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6">
              Join and start earning today.
            </p>
            <Link
              className="
                inline-block 
                px-5 py-2.5 sm:px-6 sm:py-3 
                bg-blue-600 text-white rounded-xl 
                hover:bg-blue-700 font-bold 
                text-xs sm:text-sm md:text-base
              "
              to="/signup"
            >
              List Your Skill
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
