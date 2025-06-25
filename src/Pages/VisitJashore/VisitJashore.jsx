import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  
} from "react-icons/fa";

// Import images
import chachramondir from "../../assets/Attraction/Sadar/Cacra Shib Mondir/Cacra Shib Mondir_01.jpg";
import chachramondir1 from "../../assets/Attraction/Sadar/Cacra Shib Mondir/Cacra Shib Mondir_03.jpg";
import chachramondir2 from "../../assets/Attraction/Sadar/Cacra Shib Mondir//Cacra Shib Mondir_05.jpg";
import collectorate from "../../assets/Attraction/Sadar/Collectorate Building/Collectorate Bhaban_01.jpg";
import collectorate1 from "../../assets/Attraction/Sadar/Collectorate Building/Collectorate Bhaban_05.jpg";
import collectorate2 from "../../assets/Attraction/Sadar/Collectorate Building/Collectorate Bhaban_08.jpg";
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

const VisitJashore = () => {
const images = [
  {
    src: collectorate,
    subImg1: collectorate1 ,
    subImg2: collectorate2,
    title: "Collectorate Building ",
    upazila: "Jashore Sadar",
    description: "The Jashore Collectorate Building stands as a remarkable symbol of colonial-era architecture and administrative heritage in Bangladesh. Built during the British period, it is one of the oldest collectorate buildings in the country, reflecting neoclassical design with grand columns, high ceilings, and spacious courtyards. Visitors are drawn not only to its architectural elegance but also to its role in shaping regional governance. Preserved with care, the Collectorate remains a compelling site for history enthusiasts and cultural tourists alike.",
    mapLink: "https://maps.app.goo.gl/d8MS483uwbUNWVZQ8 "
  },
  {
    src: chachramondir,
    subImg1: chachramondir1,
    subImg2: chachramondir2,
    title: "Chanchra Shib Mondir",
    upazila: "Jashore Sadar",
    description: "Nestled about 4 km from Jessore’s Bhairab Chattar, the Chanchra Shiv Mandir is a beautifully preserved 17th‑century temple built in 1696 AD by Raja Manohar Roy. Its facade boasts three graceful arched entrances and richly decorated terracotta plaques that depict mythological and local motifs.",
    mapLink: "https://maps.app.goo.gl/yir8XvwMBuBF1MX87 "
  },
  {
    src: dcOldBuilding,
    subImg1: dcOldBuilding1,
    subImg2: dcOldBuilding,
    title: "DC Old Bungalow",
    upazila: "Benapole",
    description: "Major customs and immigration checkpoint on the Bangladesh-India border.",
    mapLink: "https://goo.gl/maps/bordercheck"
  },
  {
    src: itPark,
    subImg1: itPark1,
    subImg2: itPark2,
    title: "Jashore IT Park",
    upazila: "Jashore Sadar",
    description: "The Jashore IT Park, established in 2017, stands not only as a center of innovation but also as an architectural and environmental gem in southwestern Bangladesh. The park’s modern glass-and-steel structures rise gracefully above landscaped gardens, water features, and tree-lined walkways, offering a rare fusion of technology and natural beauty. The lakeside amphitheater, scenic courtyards, and open plazas provide serene spaces for reflection, collaboration, and events. ",
    mapLink: "https://maps.app.goo.gl/eNvTm3Ssj4wGchcb9"
  },
  {
    src: pouroPark,
    subImg1: pouroPark1,
    subImg2: pouroPark2,
    title: "Paura Park",
    upazila: "Jashore Sadar",
    description: "Paura Park or Jashore Municipal Park is located at the very heart of Jashore town. Known for its scenic beauty and safe envionment, this park hosts Baishakhi Festival (celebration of Bengali New Year) every year.",
    mapLink: "https://maps.app.goo.gl/xCsV67pfcgSqm7pRA"
  },
  {
    src: ramkrisno,
    subImg1: ramkrisno1,
    subImg2: ramkrisno,
    title: "Ram Krishna Ashram",
    upazila: "Jashore Sadar",
    description: "The Ramakrishna Ashrama & Mission in Jashore is a serene spiritual retreat and active community center.  Located at 2, Ashrama Road, it features a temple complex where daily worship, bhajans, and religious classes are held, alongside celebrations of key festivals honoring Sri Ramakrishna, Sarada Devi, and Swami Vivekananda.",
    mapLink: "https://maps.app.goo.gl/j5ybDnCALbPbr3uB9 "
  },
]

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



  return (
    <div className="flex items-center justify-between gap-2 w-full">
  {/* Sadar Button */}
  <div className="shrink-0">
    <button className="flex flex-col justify-center items-center px-2 py-[70px] gap-5 border rounded bg-white hover:bg-gray-100">
      <FaChevronLeft className="rotate-180 text-gray-600" />
      <span className="[writing-mode:vertical-rl] rotate-180 text-base font-medium">
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
      <div
        key={index}
        className="flex flex-col items-center rounded-tl-3xl rounded-br-3xl bg-[#f3cdba5d]"
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
      </div>
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




  );
};

export default VisitJashore;
