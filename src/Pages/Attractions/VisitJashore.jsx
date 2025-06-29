import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import chachramondir from "../../assets/Attraction/Sadar/Chanchra Shiv Mandir/Cacra Shib Mondir_01.jpg";
import chachramondir1 from "../../assets/Attraction/Sadar/Chanchra Shiv Mandir/Cacra Shib Mondir_05.jpg";
import collectorate from "../../assets/Attraction/Sadar/Collectorate Building/Collectorate Bhaban_01.jpg";
import collectorate1 from "../../assets/Attraction/Sadar/Collectorate Building/Collectorate Bhaban_05.jpg";
import dcOldBuilding from "../../assets/Attraction/Sadar/DC Old Bungalow/DC Old Bunglow_02.jpg";
import dcOldBuilding1 from "../../assets/Attraction/Sadar/DC Old Bungalow/DC Old Bunglow_03.jpg";
import itPark from "../../assets/Attraction/Sadar/Jashore IT Park/IT Park_01.jpg";
import itPark1 from "../../assets/Attraction/Sadar/Jashore IT Park/IT Park_03.jpg";
import itPark2 from "../../assets/Attraction/Sadar/Jashore IT Park/IT Park_04.jpg";
import pouroPark from "../../assets/Attraction/Sadar/Poura Park/Pouro Park_03.jpg";
import pouroPark1 from "../../assets/Attraction/Sadar/Poura Park/Pouro Park_05.jpg";
import pouroPark2 from "../../assets/Attraction/Sadar/Poura Park/Pouro Park_09.jpg";
import ramkrisno from "../../assets/Attraction/Sadar/Ram Krishna Ashram/Ramkrisno Mission_01.jpg";
import ramkrisno1 from "../../assets/Attraction/Sadar/Ram Krishna Ashram/Ramkrisno Mission_04.jpg";
import Keshobpur from "./Keshobpur";
import Jhikargacha from "./Jhirgacha";
import Sharsha from "./Sharsha";
import Monirampur from "./Monirampur";
import Abhaynagar from "./Avhaynagar";
import Bagherpara from "./Bagherpara";
import Chaugacha from "./Chaugacha";
import LazyLoad from "react-lazyload";

const VisitJashore = () => {
  const images = [
    {
      src: collectorate,
      subImg1: collectorate1,
      subImg2: collectorate,
      title: "Collectorate Building ",
      upazila: "Jashore Sadar",
      description:
        "The Jashore Collectorate Building stands as a remarkable symbol of colonial-era architecture and administrative heritage in Bangladesh. Built during the British period, it is one of the oldest collectorate buildings in the country, reflecting neoclassical design with grand columns, high ceilings, and spacious courtyards. Visitors are drawn not only to its architectural elegance but also to its role in shaping regional governance. Preserved with care, the Collectorate remains a compelling site for history enthusiasts and cultural tourists alike.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.5910226454935!2d89.2080553!3d23.166549800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff112ce03d78cf%3A0x5803e0f19053ba21!2sJashore%20Collectorate%20Bhaban!5e1!3m2!1sen!2sbd!4v1750911314006!5m2!1sen!2sbd"
          width="100%"
          height="80%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      src: chachramondir,
      subImg1: chachramondir1,
      subImg2: chachramondir,
      title: "Chanchra Shib Mondir",
      upazila: "Jashore Sadar",
      description:
        "Nestled about 4 km from Jessore’s Bhairab Chattar, the Chanchra Shiv Mandir is a beautifully preserved 17th‑century temple built in 1696 AD by Raja Manohar Roy. Its facade boasts three graceful arched entrances and richly decorated terracotta plaques that depict mythological and local motifs.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.173335285753!2d89.2041477!3d23.1444495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff110ec781119d%3A0xecc4c01b2c42528e!2sChanchra%20Shiva%20Temple!5e1!3m2!1sen!2sbd!4v1750913850610!5m2!1sen!2sbd"
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
      src: dcOldBuilding,
      subImg1: dcOldBuilding1,
      subImg2: dcOldBuilding,
      title: "DC Old Bungalow",
      upazila: "Jashore Sadar",
      description:
        "Formerly known as Satkhira House, this residence was built in 1895 on 24.75 acres of land as the residence of the first district collector of this subcontinent.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.5088991613293!2d89.1999086!3d23.169664999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff11067496c997%3A0xa2a8e4d424b0866e!2zREMgQnVuZ2Fsb3csIEphc2hvcmXgpaQg4Kah4Ka_4Ka44Ka_IOCmrOCmvuCmguCmsuCniywg4Kav4Ka24KeL4Kaw!5e1!3m2!1sen!2sbd!4v1750914001129!5m2!1sen!2sbd"
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
      src: itPark,
      subImg1: itPark1,
      subImg2: itPark2,
      title: "Jashore IT Park",
      upazila: "Jashore Sadar",
      description:
        "The Jashore IT Park, established in 2017, stands not only as a center of innovation but also as an architectural and environmental gem in southwestern Bangladesh. The park’s modern glass-and-steel structures rise gracefully above landscaped gardens, water features, and tree-lined walkways, offering a rare fusion of technology and natural beauty. The lakeside amphitheater, scenic courtyards, and open plazas provide serene spaces for reflection, collaboration, and events. ",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28236.062118672962!2d89.1818838848221!3d23.169708025799423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff1045c66e238d%3A0x397efd1d68956163!2sJashore%20Software%20Technology%20Park%2C%20Jashore!5e1!3m2!1sen!2sbd!4v1750914116996!5m2!1sen!2sbd"
          width="100%"
          height="80%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          // eslint-disable-next-line react/no-unknown-property
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      src: pouroPark,
      subImg1: pouroPark1,
      subImg2: pouroPark2,
      title: "Paura Park",
      upazila: "Jashore Sadar",
      description:
        "Paura Park or Jashore Municipal Park is located at the very heart of Jashore town. Known for its scenic beauty and safe envionment, this park hosts Baishakhi Festival (celebration of Bengali New Year) every year.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.627298964051!2d89.204421!3d23.1651736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff146cc5e43053%3A0xa0ca5a8f831305c0!2sJashore%20Municipal%20Park!5e1!3m2!1sen!2sbd!4v1750914141449!5m2!1sen!2sbd"
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
      src: ramkrisno,
      subImg1: ramkrisno1,
      subImg2: ramkrisno,
      title: "Ram Krishna Ashram",
      upazila: "Jashore Sadar",
      description:
        "The Ramakrishna Ashrama & Mission in Jashore is a serene spiritual retreat and active community center.  Located at 2, Ashrama Road, it features a temple complex where daily worship, bhajans, and religious classes are held, alongside celebrations of key festivals honoring Sri Ramakrishna, Sarada Devi, and Swami Vivekananda.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.8674431006207!2d89.2114927!3d23.1560614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10f56c2aaf57%3A0x385f947ec4f84d3!2sRamakrishna%20Math%20and%20Ramakrishna%20Mission!5e1!3m2!1sen!2sbd!4v1750914158486!5m2!1sen!2sbd"
          width="100%"
          height="80%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
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
    <div className="space-y-4">
      {/* Jashore Sadar Attractions */}
      <div>
        <div className="flex items-center justify-between gap-2 w-full">
          {/* Sadar Button */}
          <div className="shrink-0">
            <button className="bg-black text-white flex flex-col justify-center items-center px-2 py-[70px] gap-5 border rounded-r-xl hover:bg-gray-100 hover:text-gray-950">
              <FaChevronLeft className="rotate-180" />
              <span className="[writing-mode:vertical-rl] rotate-180 text-xl font-semibold">
                Jashore Sadar
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
                    <div className="bg-gray-200 h-48 w-full animate-pulse rounded-tl-3xl" />
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
                      <div className="w-full  aspect-video bg-gray-200 animate-pulse rounded border" />
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
                      <div className="w-full aspect-video bg-gray-200 animate-pulse rounded border" />
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
                    rows={8}
                    className="md:col-span-2  py-2 text-sm text-justify resize-none"
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
      <Keshobpur></Keshobpur>
      <Jhikargacha></Jhikargacha>
      <Sharsha></Sharsha>
      <Monirampur></Monirampur>
      <Abhaynagar></Abhaynagar>
      <Bagherpara></Bagherpara>
      <Chaugacha></Chaugacha>
    </div>
  );
};

export default VisitJashore;
