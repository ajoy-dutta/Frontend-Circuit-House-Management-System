import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import flowerGarden from "../../assets/Attraction/Jhikargacha/Flower Garden Godkhali/Flower Cultivation_Godkhali_01.jpg";
import flowerGarden1 from "../../assets/Attraction/Jhikargacha/Flower Garden Godkhali/Flower Cultivation_Godkhali_12.jpg";
import flowerGarden2 from "../../assets/Attraction/Jhikargacha/Flower Garden Godkhali/Flower Cultivation_Godkhali_11.jpg";
import flowerMarket from "../../assets/Attraction/Jhikargacha/Flower Market/Flower Market_06.jpg";
import flowerMarket1 from "../../assets/Attraction/Jhikargacha/Flower Market/Flower Market_01.jpg";
import flowerMarket9 from "../../assets/Attraction/Jhikargacha/Flower Market/Flower Market_06.jpg";
import jsroad from "../../assets/Attraction/Jhikargacha/Jashore Road/Jessore Road_01.jpg";
import jsroad1 from "../../assets/Attraction/Jhikargacha/Jashore Road/Jessore Road_02.jpg";
import jsroad4 from "../../assets/Attraction/Jhikargacha/Jashore Road/Jessore Road_04.jpg";
import LazyLoad from "react-lazyload";

export default function Jhikargacha() {
  const images = [
    {
      src: flowerGarden,
      subImg1: flowerGarden1,
      subImg2: flowerGarden2,
      title: "Flower Garden of Godkhali ",
      upazila: "Jhikargacha",
      description:
        "Step into the mesmerizing flower fields of Godkhali, Jhikargacha, where vast seas of marigolds, roses, gladiolus, tuberoses, and more carpet the land in brilliant hues. Sprawling across hundreds of hectares in nearly 90 villages, this is Bangladesh’s true “flower capital,” supplying over 70–80 % of the nation’s blooms. Visiting in peak season (December–February) means witnessing this breathtaking floral spectacle and supporting the livelihoods of thousands of local farming families thriving through this vibrant economy.",
      mapLink: (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8026103891907!2d89.05458377983504!3d23.0676971608834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff3e5e42a8d48d%3A0xfc29da49e31f09c3!2sGodkhali%20Flower%20Garden!5e0!3m2!1sen!2sbd!4v1750921276231!5m2!1sen!2sbd" width="100%"
          height="80%"
          style={{ border: 0 }} 
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      ),
    },
    {
      src: flowerMarket,
      subImg1: flowerMarket1,
      subImg2: flowerMarket9,
      title: "Flower Market of Godkhali ",
      upazila: "Jhikargacha",
      description:
        "The Godkhali flower market in Jhikargacha is a soul-stirring spectacle, where each dawn unveils a riot of color and fragrance across sprawling stalls. Here, vibrant roses, gerberas, tuberoses, gladioli, chrysanthemums, and marigolds are traded in bulk—supplying roughly 65–80 % of Bangladesh’s flower needs  ",
      mapLink: (
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.4485780908967!2d89.05576727505385!3d23.08066931415814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff3fe2e4685d4d%3A0x4430a45ab3101a37!2sGodkhali%20Flower%20Market!5e0!3m2!1sen!2sbd!4v1750921429933!5m2!1sen!2sbd" width="100%"
          height="80%"
          style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      ),
    },
    {
      src: jsroad,
      subImg1: jsroad1,
      subImg2: jsroad4,
      title: "Jashore Road",
      upazila: "Jhikargacha",
      description:
        "Jashore Road—often referred to by its historic name—forms a vital artery in the region, stretching from Jessore town to the Benapole border on the N706 highway. As the eastern extension of India’s iconic Jessore Road (part of AH1 and NH 112/N 12), it connects Kolkata to Jessore via Petrapole–Benapole . Beyond commerce, the road carries deep heritage: lined with centuries-old trees planted during the British era by Zamindar Kali Poddar’s family, the road’s canopy once shaded thousands of 1971 refugees and inspired Allen Ginsberg’s poem “September on Jessore Road”. These iconic tree-lined stretches are now proud symbols of national memory.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4838035233!2d88.73194357504981!3d22.93240291968756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276006740e057%3A0xd6f15542578173e9!2sJessore%20Rd!5e0!3m2!1sen!2sbd!4v1750921184449!5m2!1sen!2sbd"
          width="100%"
          height="80%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
                Jhikargacha
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
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center mt-16 items-center z-50 overflow-auto p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-6 md:p-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Title */}
                <h2 className="text-lg md:text-xl font-bold text-center mb-4 uppercase">
                  {selectedImage.title}
                </h2>

              {/* Images with animation */}
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
  <LazyLoad
    className="w-full md:w-1/2"
  
    offset={100}
    once
    placeholder={
      <div className="w-full 
      h-48 bg-gray-200 animate-pulse rounded border" />
    }
  >
<motion.img
  src={selectedImage.subImg1}
  alt="Main"
  className="w-full 
  rounded border"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
/>

  </LazyLoad>

  <LazyLoad
  
    offset={100}
    once
    placeholder={
      <div className="w-full 
      h-48 bg-gray-200 animate-pulse rounded border" />
    }
  >
    <motion.img
      src={selectedImage.subImg2}
      alt="Sub 1"
      className="w-full 
      rounded border"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    />
  </LazyLoad>
</div>


                {/* Description and Map */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <textarea
                    rows={6}
                    className="md:col-span-2 px-3 py-2 text-sm text-justify resize-none"
                    readOnly
                    value={selectedImage.description}
                  />
                  <div className=" p-2 overflow-auto">
                    {selectedImage.mapLink}
                  </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-end mt-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-sm text-white rounded hover:bg-red-600"
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
