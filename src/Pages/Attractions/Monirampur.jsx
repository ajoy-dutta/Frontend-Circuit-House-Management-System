
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import jhapa from "../../assets/Attraction/Manirampur/Jhanpa Baor/Jhapa Baor_03.jpg";
import jhapa1 from "../../assets/Attraction/Manirampur/Jhanpa Baor/Jhapa Baor_05.jpg";
import jhapa2 from "../../assets/Attraction/Manirampur/Jhanpa Baor/Jhapa Baor_08.jpg";


export default function Monirampur() {
  const images = [
    {
      src: jhapa,
      subImg1: jhapa1,
      subImg2: jhapa2,
      title: "Jhapa Baor",
      upazila: "Monirampur",
      description:
        "Jhapa Baor (Jhanpa Baor) is a stunning crescent-shaped oxbow lake nestled near Rajganj Bazaar in Monirampur, just a 30‑minute journey from Jashore town. Stretching approximately 6 km, this serene waterbody offers a peaceful escape framed by lush greenery. Visitors can enjoy gentle boat rides, observe local fishermen at work, and capture tranquil reflections of sky and trees—perfect for photographers and nature lovers. A unique feature here is the floating bridges—built by local youth using plastic drums and iron sheets, connecting villages and easing travel across the lake..",
      mapLink: (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29385.44317595649!2d89.1138048596954!3d22.980392929030753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff6ae0d1c8ab03%3A0x5dfa26a289a4debb!2sJhanpa%20Baor!5e0!3m2!1sen!2sbd!4v1750928748069!5m2!1sen!2sbd" width="100%"
          height="80%"
          style={{ border: 0 }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      ),
    },
  
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const currentImages = images.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between gap-2 w-full">
          {/* Sadar Button */}
          <div className="shrink-0">
            <button className="bg-black text-white flex flex-col justify-center items-center px-2 py-[70px] gap-5 border rounded-r-xl hover:bg-gray-100 hover:text-gray-950">
              <FaChevronLeft className="rotate-180" />
              <span className="[writing-mode:vertical-rl] rotate-180 text-xl font-semibold">
                Monirampur
              </span>
            </button>
          </div>

          {/* Prev Button */}
          <div className="shrink-0 flex items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="px-[6px] py-[6px] bg-gray-500 rounded-full disabled:opacity-50"
            >
              <FaChevronLeft className="text-white" />
            </button>
          </div>

          {/* Card Grid */}
          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-grow">
            {currentImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center rounded-tl-3xl rounded-br-3xl bg-[#f3cdba5d] shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  className="rounded-tl-3xl bg-[#FEB38D] p-1"
                  src={image.src}
                  alt={image.title}
                />
                <div className="py-5">
                  <button
                    className="btn uppercase btn-ghost text-base font-semibold"
                    onClick={() => openModal(image)}
                  >
                    {image.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <div className="shrink-0 flex items-center">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={currentPage === totalPages - 1}
              className="px-[6px] py-[6px] bg-sky-900 rounded-full disabled:opacity-50"
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center mt-10 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg w-full  md:max-w-5xl p-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Title */}
                <h2 className="text-xl font-bold text-center mb-4 uppercase">
                  {selectedImage.title}
                </h2>

                {/* Images with animation */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <motion.img
                    src={selectedImage.subImg1}
                    alt="Main"
                    className="w-1/3 rounded border"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.img
                    src={selectedImage.subImg2}
                    alt="Sub 1"
                    className="w-1/3 rounded border"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 p-4">
                  {/* Description */}
                  <textarea
                    rows={8}
                    className="col-span-2 px-3 text-justify mb-4"
                  >
                    {selectedImage.description}
                  </textarea>
                  {/* Map */}
                  <div>{selectedImage.mapLink}</div>
                </div>

                {/* Close Button */}
                <div className="flex justify-end mt-4">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
