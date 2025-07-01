import {
  FaMapMarkerAlt,
  FaRegClock,
  FaHotel,
  FaPlaneArrival,
  FaCar,
  FaMicrophoneAlt,
  FaFish,
  FaCamera,
  FaUtensils,
  FaFlag,
  FaRegCalendarAlt,
  FaBed,
  FaDollarSign,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";
import deluxeImg from "../../assets/Jashore Deluxe.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function JashoreDeluxe() { 
  return (
    <div className="space-y-4 bg-gradient-to-br from-white to-blue-50 text-gray-800 font-sans">
      {/* Hero Section */}
          <motion.div
      className="space-y-4 bg-gradient-to-br from-white to-blue-50 text-gray-800 font-sans"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.section
        className="relative h-[500px] mb-14 text-white text-center bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${deluxeImg})` }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl font-bold mb-4">Jashore Deluxe</h1>
          <p className="text-lg">3 Days / 2 Nights Cultural & Heritage Retreat</p>
        </div>
      </motion.section>

      <motion.section className="py-10 px-4 max-w-5xl mx-auto" variants={fadeInUp}>
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="mb-4">
          This tour is proudly organized by the District Administration,
          Jashore, ensuring a highly secure and scam-free experience through
          direct coordination with government agencies. Travelers benefit from
          24/7 on-ground support from the Nezarat Deputy Collector.
        </p>
      </motion.section>

      <motion.section className="border rounded-lg bg-white py-8 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4" variants={fadeInUp}>
        <div>
          <strong>
            <FaMapMarkerAlt className="inline mr-2" />
            Location:
          </strong>{" "}
          Jashore, Bangladesh
        </div>
        <div>
          <strong>
            <FaRegClock className="inline mr-2" />
            Duration:
          </strong>{" "}
          4 Days / 3 Nights
        </div>
        <div>
          <strong>
            <FaHotel className="inline mr-2" />
            Accommodation:
          </strong>{" "}
          Jashore IT Park Hotel & Resort
        </div>
        <div>
          <strong>
            <FaPlaneArrival className="inline mr-2" />
            Arrival:
          </strong>{" "}
          Via Jashore Airport (Pickup included)
        </div>
        <div>
          <strong>
            <FaCar className="inline mr-2" />
            Transport:
          </strong>{" "}
          Private Sedan / Toyota Axio / SUV
        </div>
        <div>
          <strong>
            <FaMicrophoneAlt className="inline mr-2" />
            Guided Support:
          </strong>{" "}
          Dedicated cultural guide
        </div>
      </motion.section>

      <motion.section className="border rounded-lg py-10 px-4 max-w-5xl mx-auto" variants={fadeInUp}>
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>🏢 Colonial-Era Collectorate Building Excursion</li>
          <li>
            📍 Heritage Journey: Bharat Rajar Deol, Chachra Shiva Temple, Imam
            Bara
          </li>
          <li>🌺 Benapol Port Visit</li>
          <li>🌳 Baor Excursions & Jashore Stitch Artisan Hour</li>
        </ul>
      </motion.section>

      <motion.section className="border rounded-lg py-10 px-4 max-w-5xl mx-auto bg-purple-50 " variants={fadeInUp}>
        <h2 className="text-xl font-semibold mb-4"> Signature Add-ons</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <FaFish className="inline mr-2" />
            Baor Fishing with villagers
          </li>
          <li>
            <FaCamera className="inline mr-2" />
            Personal photographer for the day
          </li>
          <li>
            <FaUtensils className="inline mr-2" />
            Traditional village lunch
          </li>
          <li>
            <FaFlag className="inline mr-2" />
            Benapol Flag Retreat Ceremony
          </li>
        </ul>
      </motion.section>

      <motion.section className="py-10 px-4 max-w-5xl mx-auto" variants={fadeInUp}>
        <h2 className="text-2xl font-bold mb-6">
          <FaRegCalendarAlt className="inline mr-2" />
          Itinerary Details
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">🔸 Day 1</h3>
            <p>
              Arrival, temple visits, Collectorate, local snacks, dinner at
              Circuit House
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🔸 Day 2</h3>
            <p>
              Poet’s Sagardari, boat ride, Bharat Raja's Deul, dinner at Luxury
              Dine
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🔸 Day 3</h3>
            <p>
              Godkhali flower fields, Khejur Gur Festival, check-out and airport
              drop
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-10 px-4 max-w-5xl mx-auto bg-gray-50 rounded" variants={fadeInUp}>
        <h2 className="text-2xl font-bold mb-4">
          <FaBed className="inline mr-2" />
          Stay Info
        </h2>
        <p>
          Deluxe Rooms & Executive Suites at Jashore IT Park Hotel & Resort.
          Includes rooftop restaurant, garden views, and business lounge.
        </p>
      </motion.section>
    </motion.div>

      {/* Transport Options */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          <FaCar className="inline mr-2" />
          Transport Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded shadow">
            <h3 className="font-semibold">Private Sedan</h3>
            <p>4-seater, best for solo or couples</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-semibold">Toyota Axio</h3>
            <p>Compact car, ideal for 2 guests</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-semibold">SUV</h3>
            <p>Spacious for families or groups</p>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-10 px-4 max-w-5xl mx-auto bg-indigo-100 rounded text-indigo-800">
        <h2 className="text-2xl font-bold mb-2">
          <FaDollarSign className="inline mr-2" />
          Price
        </h2>
        <p>
          USD 350 for 2 persons (approx.) – final price varies by customization.
          Group discounts available.
        </p>
      </section>

      {/* Booking */}
      <section className="py-10 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          <FaPhoneAlt className="inline mr-2" />
          Booking & Contact
        </h2>
        <p>
          <strong>Tour Name:</strong> Jashore Deluxe
        </p>
        <p>
          <strong>Presented by:</strong> District Administration, Jashore
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://www.chjashore.online"
            className="text-blue-600 underline"
          >
            www.chjashore.online
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:dcjessore@gmail.com"
            className="text-blue-600 underline"
          >
            <FaEnvelope className="inline mr-2" />
            dcjessore@gmail.com
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/8801733909222"
            className="text-blue-600 underline"
          >
            +8801733909222
          </a>
        </p>
        <p className="mt-2 text-sm italic hover:text-sky-700 cursor-pointer">
          Tour details may adjust due to valid circumstances
        </p>
      </section>
    </div>
  );
}
