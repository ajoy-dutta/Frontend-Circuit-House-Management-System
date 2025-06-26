import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import MMHome from "../../assets/Attraction/2 Keshabpur/Michael Modhusudhan Dutt Home Premises/Michael Modhusudhan Home Premises_07.jpg";
import MMHome1 from "../../assets/Attraction/2 Keshabpur/Michael Modhusudhan Dutt Home Premises/Michael Modhusudhan Home Premises_03.jpg";
import MMHome2 from "../../assets/Attraction/2 Keshabpur/Michael Modhusudhan Dutt Home Premises/Michael Modhusudhan Home Premises_06.jpg";
import Kopotakkho from "../../assets/Attraction/2 Keshabpur/Kapatakkha River/Kopotakkho River_04.jpg";
import Kopotakkho1 from "../../assets/Attraction/2 Keshabpur/Kapatakkha River/Kopotakkho River_02.jpg";
import Kopotakkho2 from "../../assets/Attraction/2 Keshabpur/Kapatakkha River/Kopotakkho River_03.jpg";
import MMNagar from "../../assets/Attraction/2 Keshabpur/Mirzanagar Hammam Khana/Hammam Khana_01.jpg";
import MMNagar1 from "../../assets/Attraction/2 Keshabpur/Mirzanagar Hammam Khana/Hammam Khana_05.jpg";
import MMNagar2 from "../../assets/Attraction/2 Keshabpur/Mirzanagar Hammam Khana/Hammam Khana_03.jpg";
import Bharat from "../../assets/Attraction/2 Keshabpur/Relics of Bharat Bhaina/Vorot Vayna Buddha Bihar_06.jpg";
import Bharat1 from "../../assets/Attraction/2 Keshabpur/Relics of Bharat Bhaina/Vorot Vayna Buddha Bihar_03.jpg";
import Bharat2 from "../../assets/Attraction/2 Keshabpur/Relics of Bharat Bhaina/Vorot Vayna Buddha Bihar_08.jpg";
import Sekhpura from "../../assets/Attraction/2 Keshabpur/Shekhapura Mosque/Sekhpura Moszid_01.jpg";
import Sekhpura1 from "../../assets/Attraction/2 Keshabpur/Shekhapura Mosque/Sekhpura Moszid_03.jpg";
import Sekhpura2 from "../../assets/Attraction/2 Keshabpur/Shekhapura Mosque/Sekhpura Moszid_04.jpg";
import pirMM from "../../assets/Attraction/2 Keshabpur/Shrine of Pir Meheruddin/Pir Meheruddin Mazar_01.jpg";
import pirMM1 from "../../assets/Attraction/2 Keshabpur/Shrine of Pir Meheruddin/Pir Meheruddin Mazar_02.jpg";
import pirMM2 from "../../assets/Attraction/2 Keshabpur/Shrine of Pir Meheruddin/Pir Meheruddin Mazar_03.jpg";

export default function Keshobpur() {
  const images = [
    {
      src: MMHome,
      subImg1: MMHome1,
      subImg2: MMHome2,
      title: "Michael Modhusudhan Dutt Home Premises ",
      upazila: "Keshobpur",
      description:
        "The ancestral home of Poet Michael Madhusudan Dutt is situated by the river Kapotaksha at Sagordari village of Keshobpur Upazilla. This epic poet of Bengali literature was born here in 1824. The two-storied building and the adjacent pond of the poet's time have now been preserved as a museum named 'Madhupalli'.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.548929322509!2d89.1633755!3d22.819172099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff68ae482e0da7%3A0x5e03bc86c407c7b5!2sMichael%20Madhusudan%20Datta%20Memorial!5e0!3m2!1sen!2sbd!4v1750917998456!5m2!1sen!2sbd"
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
      src: Kopotakkho,
      subImg1: Kopotakkho1,
      subImg2: Kopotakkho2,
      title: "Kapatakkha River",
      upazila: "Keshobpur",
      description:
        "The Kapotakkha River—also known as Kopotakkho—holds deep cultural, historical, and ecological significance in Jashore and the greater southwest region of Bangladesh. The river is immortalized in Bengali literature, especially through the poetry of Michael Madhusudan Dutt, one of Bengal’s greatest literary figures and a native of Sagardari village in Jashore. The river once served as an important artery for trade and agriculture, supporting local livelihoods and shaping settlement patterns in the region. Though the river has become shallower and narrower over the years due to siltation and poor maintenance, it still plays a role in irrigation and seasonal fishing. ",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58820.96021957756!2d89.08674966744073!3d22.865003585059473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff689346e29517%3A0x7041099e8b3fe34a!2sKopotakkho%20River!5e0!3m2!1sen!2sbd!4v1750918120201!5m2!1sen!2sbd"
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
      src: MMNagar,
      subImg1: MMNagar1,
      subImg2: MMNagar2,
      title: "Mirzanagar Hammamkhana (Bathhouse)",
      upazila: "Keshobpur",
      description:
        "Mirzanagar Hammamkhana is situated at Mirzanagar village of Keshobpur Upazilla. In 1649, the then Fauzdar [administrator] of Jashore, Mirza Safsi Khan, built this hammamkhana. Modelled on Mughal Architectural style, this building has four domes",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4198042570574!2d89.1468859!3d22.897881700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff696155b30b1d%3A0x9b8d4dc9aae67f36!2z4Ka54Ka-4Kau4KeN4Kau4Ka-4Kau4KaW4Ka-4Kao4Ka-!5e0!3m2!1sen!2sbd!4v1750918243414!5m2!1sen!2sbd"
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
      src: Bharat,
      subImg1: Bharat1,
      subImg2: Bharat2,
      title: "Relics of Bharat Bhaina",
      upazila: "Keshobpur",
      description:
        "Bharat Bhaina (locally known as Bharater Deul or Bharat Rajar Deul) is a remarkably ancient archaeological site in Keshabpur Upazila, Jashore. This mound is the remains of an early historic Buddhist stupa-temple, dating to the 3rd–5th century AD, making it one of the oldest known sites in southwestern Bangladesh. ",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28301.217715753104!2d89.34179644999999!3d22.8588114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff76e0766734a5%3A0xe449404b10fbd9ee!2sBharat%20Bhaina!5e1!3m2!1sen!2sbd!4v1750919134864!5m2!1sen!2sbd"
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
      src: pirMM1,
      subImg1: pirMM,
      subImg2: pirMM2,
      title: "Shrine of Pir Meheruddin (R)",
      upazila: "Keshobpur",
      description:
        "The Shrine of Pir Meheruddin (R) is situated at Meherpur village of Keshobpur Upazilla. This establishment, built on 3.23 acres of land, is attractively surrounded by century-old banyan trees.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.641022397749!2d89.12484047504765!3d22.8527670226442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff69517b000241%3A0xcd537ac89b3d40ec!2sPir%20Meheruddin%20Dargah!5e0!3m2!1sen!2sbd!4v1750919514874!5m2!1sen!2sbd"
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
      src: Sekhpura,
      subImg1: Sekhpura1,
      subImg2: Sekhpura2,
      title: "Shekhapura Mosque",
      upazila: "Keshobpur",
      description:
        "Shekhpura Mosque was built during the rule of Emperor Aurangazeb. It is situated at Sagordari union of Keshorpur Upazilla. At present, it is an archaeological site preserved by the Department of Archaeology. The Epic Poet Michael Madhusudan Dutt came at this mosque to learn Persian language.",
      mapLink: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0220254669666!2d89.21165247505628!3d23.16939621083362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff112eafe11e53%3A0x6ee4ee8ca0740174!2sSheikhpura%20Jame%20Mosque.!5e0!3m2!1sen!2sbd!4v1750919465756!5m2!1sen!2sbd"
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
              <span className="[writing-mode:vertical-rl] rotate-180 text-base font-semibold">
                Keshobpur
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
