import React, { useState } from "react";
import kanthaImg from "../../assets/Stich Work_14.jpg";
import molassesImg from "../../assets/Slider/Khejur Guur_06.jpg";
import goodiesImg from "../../assets/Stich Work_14.jpg";

const storeItems = [
  {
    title: "Nakshi Kantha",
    image: kanthaImg,
    description: "Traditional hand-stitched quilt showcasing Bangladeshi heritage.",
    contactInfo: "Phone: +880123456789 | Email: orders@jashorestore.com"
  },
  {
    title: "Date Molasses",
    image: molassesImg,
    description: "Pure winter molasses (Khejur Gur) from Jashore's villages.",
    contactInfo: "Phone: +880987654321 | WhatsApp: +880199999999"
  },
  {
    title: "Jashore Goody Bags",
    image: goodiesImg,
    description: "Gift packs including local snacks, crafts, and heritage treats.",
    contactInfo: "Facebook: fb.com/jashoregoodies | Phone: +880111222333"
  },
];

export default function Store() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContact = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">Our Store</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {storeItems.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
              index === 2 ? "md:col-span-2 mx-auto" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-indigo-700">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>

              <button
                className="mt-4 text-blue-600 hover:underline transition"
                onClick={() => toggleContact(index)}
              >
                {activeIndex === index ? "Hide contact details" : "For order, click here"}
              </button>

              {activeIndex === index && (
                <div className="mt-3 p-3 border border-gray-200 rounded bg-gray-100 text-sm text-gray-700">
                  {item.contactInfo}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

