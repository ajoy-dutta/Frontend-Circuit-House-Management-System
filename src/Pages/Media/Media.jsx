import React from "react";
import { motion } from "framer-motion";
import januaryImg from "../../assets/winter.jpg";
import deluxeImg from "../../assets/Jashore Deluxe.jpg";
import { Link } from "react-router-dom";

import background from "../../assets/Branding/Collectorate Bhaban_05.jpg";

export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 ">
      {/* Heading */}
      <section
        className="relative h-[350px] mb-14 text-white text-center bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl font-bold mb-4">Visit Jashore</h1>
          <p className="text-lg">
            Choose your dream escape — rustic winter magic or cultural luxury
          </p>
        </div>
      </section>

      {/* Tour Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* January Tour Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300"
      >
        <img
          src={januaryImg}
          alt="Jashore in January"
          className="w-full h-60 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-sky-700 mb-2">
            Jashore in January
          </h2>
          <p className="text-gray-600">
            Immerse in blooming flower fields, winter delicacies, and the poetic spirit of rural Bengal.
          </p>
          <Link
            to="/jashore-winter"
            className="inline-block mt-6 text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 px-6 py-2 rounded-full font-semibold transition-all"
          >
            Show Details
          </Link>
        </div>
      </motion.div>

      {/* Deluxe Tour Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300"
      >
        <img
          src={deluxeImg}
          alt="Jashore Deluxe"
          className="w-full h-60 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-sky-700 mb-2">Jashore Deluxe</h2>
          <p className="text-gray-600">
            Enjoy a premium heritage experience with luxury dining, guided
            visits, and top-tier hospitality.
          </p>
          <Link
            to="/jashore-delux"
            className="inline-block mt-6 text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 px-6 py-2 rounded-full font-semibold transition-all"
          >
            Show Details
          </Link>
        </div>
      </motion.div>
    </div>

      {/* Footer Description */}
      <div className="mt-16 max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-2xl shadow-lg">
        <p>
          Discover the charm of Jashore with two beautifully curated tour
          packages. Whether you love the vibrant spirit of winter festivals and
          flower fields or the elegance of a high-end cultural retreat, both
          experiences are deeply rooted in Jashore’s heritage, hospitality, and
          heart.
        </p>
      </div>
    </div>
  );
}
