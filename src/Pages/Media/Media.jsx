import React from "react";
import januaryImg from "../../assets/Slider/Khejur Guur_06.jpg";
import deluxeImg from "../../assets/Rooms/CircuitHouse_11.jpg";

export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">Visit Jashore</h1>
      <p className="text-center text-lg text-gray-700 mb-10">
        Select one of our two tour packages:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Jashore in January */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={januaryImg}
            alt="Jashore in January"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-indigo-700">Jashore in January</h2>
            <p className="text-gray-600 mt-2">
              Enjoy flower festivals, winter scenery, and peaceful village life.
            </p>
          </div>
        </div>

        {/* Jashore Deluxe */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={deluxeImg}
            alt="Jashore Deluxe"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-indigo-700">Jashore Deluxe</h2>
            <p className="text-gray-600 mt-2">
              A luxury tour with premium hospitality, cuisine, and guided site visits.
            </p>
          </div>
        </div>
      </div>

      {/* 📌 Detailed description BELOW the cards */}
      <div className="mt-12 max-w-4xl mx-auto text-center text-gray-700 text-base leading-relaxed bg-white p-6 rounded-xl shadow-md">
        <p>
          Discover the essence of Jashore with two beautifully curated tour packages. 
          Whether you prefer the rustic charm of January’s blooming flower fields and molasses huts, 
          or the elegance of a deluxe experience with historical site visits, fine dining, and comfortable stays — 
          we have something perfect for every traveler. Both packages offer guided support, local cuisine, and 
          memorable experiences rooted in the heart of southwestern Bangladesh.
        </p>
      </div>
    </div>
  );
}
