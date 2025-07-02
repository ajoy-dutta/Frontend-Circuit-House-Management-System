import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import tree from "../../assets/Attraction/Bagherpara/Johorpur Banyan Tree/Johorpur Bot Gacher Mela_02.jpg";
import tree1 from "../../assets/Attraction/Bagherpara/Johorpur Banyan Tree/Johorpur Bot Gacher Mela_01.jpg";
import tree2 from "../../assets/Attraction/Bagherpara/Johorpur Banyan Tree/Johorpur Bot Gacher Mela_05.jpg";
import mandir from "../../assets/Attraction/Bagherpara/Kaluadanga Shiv Mandir/Kaludanga Shib Mondir_01.jpg";
import mandir1 from "../../assets/Attraction/Bagherpara/Kaluadanga Shiv Mandir/Kaludanga Shib Mondir_04.jpg";
import mandir2 from "../../assets/Attraction/Bagherpara/Kaluadanga Shiv Mandir/Kaludanga Shib Mondir_06.jpg";
import LazyLoad from "react-lazyload";

export default function Bagherpara() {
  const images = [
    {
      src: tree,
      subImg1: tree1,
      subImg2: tree2,
      title: "Johorpur Banyan Tree ",
      upazila: "Bagherpara",
      description:
        "The century-old Banyan Tree, located in Johorpur Union of Bagherpara Upazila, Jashore, stands as a monumental testament to nature's resilience and the rich cultural tapestry of the region.This century-old tree has become a central figure in local folklore and daily life. The tree's unique fruit, resembling dried grapes, attracts a myriad of birds, adding to the area's biodiversity. ",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938294.172054896!2d87.791657878125!3d23.271759499999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff25000c570675%3A0xb73fcb9ceb9d60b9!2zQmFueWFuIHRyZWUsIOCmrOCmn-Cml-CmvuCmmw!5e0!3m2!1sen!2sbd!4v1750931916803!5m2!1sen!2sbd"
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
      src: mandir,
      subImg1: mandir1,
      subImg2: mandir2,
      title: "Kaluadanga Shiv Mandir ",
      upazila: "Bagherpara",
      description:
        "The Kaluadanga Shiv Mandir, also known as the Kaluadanga Temple, stands as a testament to Jashore’s ancient religious and architectural heritage. Located in Bagharpara, the temple remains a cherished local pilgrimage site. Pilgrims and visitors gather especially during Shivaratri and full/new moons, while the peaceful rural setting, dotted with neem, coconut, and betel-nut trees, lends the temple a serene atmosphere.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234776.12850663826!2d89.19773123364637!3d23.156436341368988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffa8274d7280b9%3A0x8992d286a519bf79!2sKaludanga%20Temple!5e0!3m2!1sen!2sbd!4v1750932039147!5m2!1sen!2sbd"
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
   const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 3;
    return 4;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


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
                Bagherpara
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
                  height={200}
                  offset={100}
                  once
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
                <div className="flex flex-row items-center justify-center gap-4 mb-4">
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
