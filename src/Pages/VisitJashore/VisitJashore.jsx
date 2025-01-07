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
    {
      src: img1,
      title: "Benapole Gate",
      des: "Benapole  Municipality  constructed  this  56.5  feet  high gate in 2016. This gate has a signi cance as it is used as the gateway to Bangladesh.7373",
    },
    {
      src: img2,
      title: "Birsresto Nur Mohammad Graveyard",
      des: "Birsreshtha Lance Nayek Nur Mohammad Sheikh, along with six of his fellow freedom  ghters, was laid   to   rest   in   Kashipur,   a   small   village   near   Bangladesh-India  border  under  Sharsha  Upazilla  of Jashore district.2929",
    },
    {
      src: img9,
      title: "Flower Cultivation Godkhali",
      des: "At  present,  in  nearly  3000  hectares  of  land  at    Godkhali  of  Jhikorgacha  Upazilla  and  in  more  than one hundred other adjacent villages,  owers are being cultivated on a commercial basis. Local  ower  cultivators  are  producing  various  species  of     owers    such    as    rose,    tuberose,    orchid,                gladiolas, gerbera, etc. Having met the domestic needs,   the    owers   of   Jashore   are   now   being   exported too.3636",
    },
    {
      src: img12,
      title: "Jashore Medical College",
      des: "Jashore Medical College was established in 2010 in the Chanchra area of Jashore. It has 25 acres of land.  Every  year  it  o ers  70  students  for  having  MBBS   degree.     There   are   72   teachers   in   22              faculties   in   this   college.   Currently,   a   hospital   having  500  bed  is  under  construction  in  it’s  own  campus.6868",
    },
    {
      src: img5,
      title: "Collectorate Park",
      des: "In 1939, District Magistrate Niaj Mohammad Khan took  the  initiative  to  construct  this  park.  For  a  long  time  the  beautiful  park  has  been  known  to  the   people   of   Jashore   as   a   centre   of   pure                   entertainment and repose. 4646",
    },
    {
      src: img6,
      title: "DC Old Bunglow",
      des: "Formerly known as Satkhira House, this residence was  built  in  1895  on  24.75  acres  of  land  as  the  residence   of   the    rst   district   collector   of   this   subcontinent.  Now  dilapidated,  this  house  is  an  example   of   architectural   excellence.   Recently,   initiatives  have  been  taken  to  convert  this  silent  witness of time into a museum.6262",
    },
    { src: img7, title: "Dhiraj Vottacharjo House", des: "" },
    {
      src: img8,
      title: "Egaro Shiv Mondir",
      des: "Local  Zamindar  Nilkontho  Roy  built  Egaro  Shiva  Mandir   by   the   side   of   the   river   Bhairab   at                     Abhaynagar  in  the  middle  of  the  17th  century.  This  establishment  consists  of  eleven  separate  temples  and  has  a  great  architectural  value.  The  terracotta  artistry  of  the  walls  of  the  temples  is  magni cent.5353",
    },
    {
      src: img3,
      title: "Border Check Port",
      des: "Benapole   Check   Port   plays   a   vital   role   in   the              economy   of   Bangladesh.   It   is   situated   near   Bangladesh-India  border  at  Benapole  village  of  Sharsha  Upazilla.  90  percent  of  the  total  land  trade  between  Bangladesh  and  India  is  done  via  this port",
    },
    {
      src: img10,
      title: "Hammam Khana",
      des: "Mirzanagar     Hammamkhana     is     situated     at     Mirzanagar   village   of   Keshobpur   Upazilla.   In   1649, the then Fauzdar [administrator] of Jashore, Mirza   Safsi   Khan,   built   this   hammamkhana.         Modelled   on   Mughal   Architectural   style,   this   building has for domes.5959",
    },
    {
      src: img11,
      title: "IT Park",
      des: "This park is situated in the Najir Shonkorpur area of Jashore town. It has been built to provide the IT entrepreneurs    with    all    kinds    of    world-class            facilities. Besides, an earthquake-and                          disaster-proof  backup  server  section  has  been  built  to  save  the  data  of  the  national  server.              Honorable Prime Minister Sheikh Hasina                    inaugurated it on 10 December, 2017.7272",
    },
    {
      src: img4,
      title: "Cacra Shib Mondir",
      des: "Raja  Manohar  Roy  built  this  temple  in  1696.  The  walls    of    the    temple    are    ornamented  with terracotta tiles.5454",
    },
    {
      src: img13,
      title: "Jess Garden",
      des: "This  park  is  located  at  Bahadurpur  near  Jashore  town.  There  are  various  rides  for  the  children  in  the park.8181",
    },
    {
      src: img14,
      title: "Jhapa Baor",
      des: "Jhanpa  Baor  is  situated  at  Rajgonj  of  Manirampur  Upazilla  and  is  9  kilometers  in  length.  Local  people  have  shown  unique  entrepreneurship  and  engineer-ing  skill  by  building  a   oating  bridge  over  this  Baor.  One   can   have   exciting   boat   rides   along   the   vast   expanse of Baor water. ",
    },
    { src: img15, title: "Johorpur Bot Gacher Mela", des: "" },
    { src: img16, title: "Khanpur Shib Mondir", des: "" },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // const openModal = (image) => {
  //   setSelectedImage(image);
  //   document.getElementById("dynamic_modal").showModal();
  // };
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="mb-16 mx-5">
      <h2 className="text-3xl font-bold italic text-center my-8">
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
      <div>
        {selectedImage && isModalOpen && (
          <dialog id="dynamic_modal" className="modal" open>
            <div className="modal-box">
              <h3 className="font-bold uppercase text-lg">
                {selectedImage.title}
              </h3>
              <p className="py-4 text-justify">{selectedImage.des}</p>
              <div className="modal-action">
                <button className="btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>

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
