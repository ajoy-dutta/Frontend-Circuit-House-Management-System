import React from "react";
import januaryImg from "../../assets/winter.jpg";
import deluxeImg from "../../assets/Jashore Deluxe.jpg";
import { Link } from "react-router-dom";

export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-100 p-6">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-4 drop-shadow-sm">
        🌸 Visit Jashore
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Choose your dream escape — rustic winter magic or cultural luxury?
      </p>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* January Tour Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <img
            src={januaryImg}
            alt="Jashore in January"
            className="w-full h-72 object-cover object-center"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">Jashore in January</h2>
            <p className="text-gray-600">
              Immerse in blooming flower fields, winter delicacies, and the poetic spirit of rural Bengal.
            </p>
            <Link
              to="/jashore-winter"
              className="inline-block mt-6 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all"
            >
              Show Details
            </Link>
          </div>
        </div>

        {/* Deluxe Tour Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <img
            src={deluxeImg}
            alt="Jashore Deluxe"
            className="w-full h-72 object-cover object-center"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">Jashore Deluxe</h2>
            <p className="text-gray-600">
              Enjoy a premium heritage experience with luxury dining, guided visits, and top-tier hospitality.
            </p>
            <Link
              to="/jashore-delux"
              className="inline-block mt-6 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Description */}
      <div className="mt-16 max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-2xl shadow-lg">
        <p>
          Discover the charm of Jashore with two beautifully curated tour packages. Whether you love the vibrant
          spirit of winter festivals and flower fields or the elegance of a high-end cultural retreat, both
          experiences are deeply rooted in Jashore’s heritage, hospitality, and heart.
        </p>
      </div>
    </div>
  );
}
