

import { useState } from "react";
import img1 from "../../assets/Benapole Gate_02.jpg";
import img2 from "../../assets/Birsresto Nur Mohammad Graveyard_02.jpg";
import img3 from "../../assets/Border Check Port_06.jpg";
import img4 from "../../assets/Cacra Shib Mondir_04.jpg";
import img5 from "../../assets/Collectorate Park_04.jpg";
import img6 from "../../assets/DC Old Bunglow_02.jpg";
import img7 from "../../assets/Dhiraj Vottacharjo House_13.jpg";
import img8 from "../../assets/Egaro Shiv Mondir_03.jpg";
import img9 from "../../assets/Flower Cultivation_Godkhali_09.jpg";
import img10 from "../../assets/Hammam Khana_01.jpg";
import img11 from "../../assets/IT Park_03.jpg";
import img12 from "../../assets/Jashore Medical College_01.jpg";
import img13 from "../../assets/Jess Garden_01.jpg";
import img14 from "../../assets/Jhapa Baor_03.jpg";
import img15 from "../../assets/Johorpur Bot Gacher Mela_04.jpg";
import img16 from "../../assets/Khanpur Shib Mondir_01.jpg";

const VisitJashore = () => {
  const images = [
    { src: img1, title: "Benapole Gate" },
    { src: img2, title: "Birsresto Nur Mohammad Graveyard" },
    { src: img9, title: "Flower Cultivation Godkhali" },
    { src: img12, title: "Jashore Medical College" },
    { src: img5, title: "Collectorate Park" },
    { src: img6, title: "DC Old Bunglow" },
    { src: img7, title: "Dhiraj Vottacharjo House" },
    { src: img8, title: "Egaro Shiv Mondir" },
    { src: img3, title: "Border Check Port" },
    { src: img10, title: "Hammam Khana" },
    { src: img11, title: "IT Park" },
    { src: img4, title: "Cacra Shib Mondir" },
    { src: img13, title: "Jess Garden" },
    { src: img14, title: "Jhapa Baor" },
    { src: img15, title: "Johorpur Bot Gacher Mela" },
    { src: img16, title: "Khanpur Shib Mondir" },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    document.getElementById("dynamic_modal").showModal();
  };

  return (
    <div className="mb-16 mx-5">
      <h2 className="text-5xl font-bold italic text-center my-14">
        Meet Our Jashore
      </h2>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-4">
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

      {/* Dynamic Modal */}
      {selectedImage && (
        <dialog id="dynamic_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold uppercase text-lg">
              {selectedImage.title}
            </h3>
            <p className="py-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
              cupiditate. Cum itaque rerum expedita delectus accusamus aliquam quam ipsam
              voluptatibus ratione nobis voluptate maxime dolorem earum, minima, facilis
              similique libero adipisci laudantium quibusdam laboriosam suscipit, sint aliquid?
              Porro, ratione dolor!
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center my-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="btn btn-outline mx-2"
        >
          Previous
        </button>
        <span className="font-bold text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn btn-outline mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VisitJashore;