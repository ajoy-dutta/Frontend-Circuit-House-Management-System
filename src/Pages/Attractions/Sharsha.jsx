import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import benapol from "../../assets/Attraction/Sharsha/Benapole Gate/Benapole Gate_01.jpg";
import benapol1 from "../../assets/Attraction/Sharsha/Benapole Gate/Benapole Gate_02.jpg";
import BNM from "../../assets/Attraction/Sharsha/Birsresto Nur Mohammad Graveyard/Birsresto Nur Mohammad Graveyard_05.jpg";
import BNM1 from "../../assets/Attraction/Sharsha/Birsresto Nur Mohammad Graveyard/Birsresto Nur Mohammad Graveyard_01.jpg";
import BNM2 from "../../assets/Attraction/Sharsha/Birsresto Nur Mohammad Graveyard/Birsresto Nur Mohammad Graveyard_02.jpg";
import BCP from "../../assets/Attraction/Sharsha/Border Checkpoint/Border Check Port_01.jpg";
import BCP1 from "../../assets/Attraction/Sharsha/Border Checkpoint/Border Check Port_05.jpg";
import LazyLoad from "react-lazyload";

export default function Sharsha() {
  const images = [
    {
      src: benapol,
      subImg1: benapol1,
      subImg2: benapol,
      title: "Benapole Gate ",
      upazila: "Sharsha",
      description:
        "Benapole Municipality constructed this 56.5 feet high gate in 2016. This gate has a significance as it is used as the gateway to India. It is located in the Benapole port area of Sharsha Upazila, Jashore District, Bangladesh. The gate is a symbol of the friendship between Bangladesh and India, and it serves as a reminder of the historical ties between the two countries.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3532.5927271353794!2d88.9289828!3d23.0524128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff377cae5826c5%3A0xa2bf574c3fb07c33!2zU2hhaGlkIEFiZHVsbGFoIEdhdGUt4Ka24Ka54KeA4KamIOCmhuCmrOCnjeCmpuCngeCmsuCnjeCmsuCmvuCmuSDgppfgp4fgpofgpp8!5e1!3m2!1sen!2sbd!4v1750923940289!5m2!1sen!2sbd"
          width="100%"
          height="80%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      src: BNM2,
      subImg1: BNM1,
      subImg2: BNM1,
      title: "Graveyard of Bir Shrestha Lance Naik Nur Mohammad Sheikh ",
      upazila: "Sharsha",
      description:
        "The Graveyard of Bir Shrestha Lance Naik Nur Mohammad Sheikh, located in Sharsha Upazila of Jashore, is a solemn tribute to Bangladesh’s highest military hero. Lance Naik Nur Mohammad sacrificed his life on September 5, 1971, providing covering fire at Goalhati in Jessore  to ensure his comrades’ escape during a pivotal moment of the Liberation War of Bangladesh—his bravery earning him the nation’s esteemed Bir Sreshtho (Valiant of Highest Order) honor . His final resting place, marked by a simple yet dignified grave and serene surroundings, is a place of national reverence.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469410.6832928545!2d88.37955888906247!3d23.19679379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff24ce280ca2d3%3A0xb224043879c10c59!2sBirshrestha%20Lance%20Naik%20Nur%20Mohammad%20Sheikh%20Grave!5e0!3m2!1sen!2sbd!4v1750924119857!5m2!1sen!2sbd"
          width="100%"
          height="80%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      src: BCP,
      subImg1: BCP1,
      subImg2: BCP,
      title: "Benapole Border Crossing",
      upazila: "Sharsha",
      description:
        "The Benapole Border Checkpoint, located in Sharsha Upazila of Jashore, is the largest and busiest land port in Bangladesh and a vital gateway for trade and people-to-people contact with India, linking to Petrapole on the Indian side. Every day, thousands of travelers and cargo trucks pass through this critical point, making it a lifeline for economic exchange between the two nations. But beyond commerce, Benapole holds symbolic significance. Since 2013, it hosts a daily retreat ceremony, modeled after the Wagah Border ceremony, where border guards from both countries lower their national flags in a synchronized display of discipline, dignity, and mutual respect. This ceremonial event, full of marching, music, and patriotic fervor, draws spectators and tourists alike, adding a unique cultural experience to this strategic frontier.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.588070651022!2d88.87923628091814!3d23.038892334301234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff37eec2be9985%3A0xb780646e30327ca3!2sBenapole-Petrapole%20Border!5e0!3m2!1sen!2sbd!4v1750924238159!5m2!1sen!2sbd"
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
                Sharsha
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
                <LazyLoad
                  offset={100}
                  once
                  height={200}
                  placeholder={
                    <div className="rounded-tl-3xl  p-1 h-48 bg-gray-200 animate-pulse" />
                  }
                >
                  <img
                    className="rounded-tl-3xl bg-[#FEB38D] p-1"
                    src={image.src}
                    alt={image.title}
                  />
                </LazyLoad>

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
                    offset={100}
                    once
                    
                    placeholder={
                      <div className="w-full  h-48 bg-gray-200 animate-pulse rounded border" />
                    }
                  >
                    <motion.img
                      src={selectedImage.subImg1}
                      alt="Main"
                      className="w-full  rounded border"
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
                      <div className="w-full  h-48 bg-gray-200 animate-pulse rounded border" />
                    }
                  >
                    <motion.img
                      src={selectedImage.subImg2}
                      alt="Sub 1"
                      className="w-full  rounded border"
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
