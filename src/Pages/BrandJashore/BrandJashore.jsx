// import { useState, useEffect } from "react";
// import homeImage from "../../assets/Branding/Bijoy Stomvo Monihar Area_02.jpg";
// import homeImage1 from "../../assets/Branding/Bijoy Vaskorjo Dhormotola_02.jpg";
// import homeImage2 from "../../assets/Branding/Flower Cultivation_Godkhali_01.jpg";
// import homeImage3 from "../../assets/Branding/Khejur Guur_03.jpg";
// import homeImage4 from "../../assets/Branding/Khejur Guur_04.jpg";
// import homeImage5 from "../../assets/Branding/Khejur Guur_09.jpg";
// import homeImage6 from "../../assets/Branding/Khejur Guur_19.jpg";


// const data = [
//   {
//     img: "homeImage",
//     heading: "Preface",
//     des: "Favourite motherland is Bangladesh which is diversified in case of beauty. History and tradition are very enriched. The diversity can be potential for economics.Present government has adopted very important initiative like potential traditions of different districts are tried to broaden through branding activities all over the world. District branding will help in order to achieve Vision 2021,SDG 2030, and Vision 2041.After considering history and tradition of Jashore different types of colourful flowers and date molasses have been selected as branding.",
//   },
//   {
//     heading: "Branding of Jashore district",
//     des: "District branding is selected after considering history and tradition, In the same, Jashore district branding has been selected. Jashore district branding is mainly in two cases like flower and molasses. Firstly, cultivation of different coloured flowers has been initiated from eighty decades. Different kinds of flowers  are cultivated in almost 100 villages in more than 3,500(Hector). Flowers are like Rose,Tuberose,Sunflower, Merrigold,Gardenea,Dahlia etc.Secondly, Date Juice in Jashore, Jashore is famous for Date Juice.  There are 4,62,525 date palms and 2,31,26,250 litres date juice is collected from date palms of 486.20 (Hector) land and from the juice 37,00,200 KG molasses is made.",
//   },
//   {
//     heading: "History of Jashore",
//     des: "The region now called Bangladesh was divided into small zones in ancient times, known as Vanga, Pandu, Samatata, Tamralipti, Banga, and others in history. It is assumed that Jashore was part of the Tamralipti and Vanga zones. Over time, Jashore's political, social, cultural, and geographical history underwent many transformations. Jashore district, formed from the fertile soil of the Ganga River, appears on ancient maps by Ptolemy. The region is also mentioned in historical texts such as the Mahabharata, Puranas, Vedas, and Ain-E-Akbari. Once, it was a dense jungle, later settled by the Anarya community, who cleared the forests for habitation.There are various theories regarding the origin of the name 'Jashore.' Some historians suggest it comes from the Arabic word 'Jesinrey,' meaning bamboo or wooden bridge. Jashore is one of the oldest districts in Bangladesh, established in 1786 during the British colonial period. The British created it as a distinct administrative unit to manage its intransigent and rebellious population. Initially, the district included areas now part of Khulna, Kushtia, Faridpur, Chuadanga, and parts of West Bengal in India.",
//   },
//   {
//     heading: "Liberation War in Jashore",
//     des: "First enemy- free district is Jashore across the country,Pakistani army became defeated in Jashore on 6 December 1971.Jashore has played an effective role in liberation war.The flag of independent Bangladesh is first hoisted from Jashore.",
//   },
//   {
//     heading: "Imam Bara",
//     des: "300 years old Murali Imam Bara is located in Ramnagar union under sadar Upazila. It was established by Hazi Muhammad Muhasin.It was made of bricks and this rectangle building is in north -south 60 feet,in east-west 50 feet and it is divided  in three rows with 10 pillars.",
//   },
//   {
//     heading: "Jashore Air Port",
//     des: "The construction of Jashore air port was started during second world war in 1942. It was built on 25( acre) land in 1946 but it was completely launched in1960.At present, non -government 4 air flights are available in this port.",
//   },
//   {
//     heading: "First Flower Cultivation",
//     des: "cultivation of different coloured flowers has been initiated from eighty decades.Basically, Sher Ali of Godthkhali village, Jikhorgacha Upazila, first started to cultivate commercially after bringing seeds from India in 1983. Different kinds of flowers  are cultivated in almost 100 villages in more than 3,500(Hector). Flowers are like Rose,Tuberose,Sunflower, Merrigold,Gardenea,Dahlia etc",
//   },
//   {
//     heading: "Date Molasses",
//     des: "Jashore is famous for Date molasses.   There are 4,62,525 date palms and 2,31,26,250 litres date juice is collected from date palms of 486.20 (Hector) land and from the juice 37,00,200 KG molasses is made.It is known from Jashore Khulna history by Satish Chandra Mitra that Date Molasses was made in East Bengal before 1900-1901 21 lakh 80 thousand 550 Mon(40 KG).17 lakh 9 thousand 960 Mon molasses was made in Jashore among them.New House of England made brown sugar from molasses of Chowgacha, Taherpur and created agitation.",
//   },
//   {
//     heading: "Collectorate Building",
//     des: "Jashore Collectorate was started in 1786 as the first Collectorate in sub -continent  .The name of Jashore Collectorate  is organically involved with history and tradition.It is located at Doratana in Jashore. The building is at present the office of DC(Deputy Commissioner).First floor of the present building was founded in 1885 and second floor in 1980.",
//   },
//   {
//     heading: "Old DC Residence",
//     des: "First residence  of Collector which is acquainted with Satkhira House was built in 1895.There is a yeard of 24.75(acre) adjacent to two storeyed building. It is very familiar and the biggest DC residence in Bangladesh. Then emperor of India toke lease two terms for 25 years from 1921.Local Public Works Department practically visits and declares it to be uninhabitable on 11 May 1995.",
//   },
//   {
//     heading: "Retreat Sirimoni",
//     des: "Retreat Sirimoni is an attractive parade of Benapole port.Two countries'protective teams an excellent parade display with national anthem and flag at the time of sunset.",
//   },
//   {
//     heading: "House of Michael Madhusudan Dutt",
//     des: "House of Michael Madhusudan  Dutt is situated on the bank of Copotakho river, Sagordari village, Keshobpur Upazila. There are some ancient one and two storeyed buildings in the house.",
//   },
//   {
//     heading: "Mirzanagar Hammamkhana",
//     des: "Hammamkhana was built in 1649  by Sopsi Khan who is Sha Suza's brother in law's son during emperor Akber.",
//   },
//   {
//     heading: "Modhu Mela",
//     des: "Modhumela is an important  part of traditional Jashore. The fair is organised by district administration at the end of January. Poetess Mankumari Basu, niece of Michael first started to commemorate in 1890 at Sagordari after poet's death.After that, the fair begins.",
//   },
//   {
//     heading: "Grave of Saint Meheruddin (Ra:)",
//     des: "The grave is almost  300 years old.It is said that saint Meheruddin (Ra:)is contemporary of saint Khan Jahan Ali(Ra:).It is established on 3.21(acre) land.",
//   },
//   {
//     heading: "Blackmouth Hanuman",
//     des: "Blackmouth Hanuman of rare species is almost vanished in Bangladesh. It is seen in Keshobpur, Ramchandrapur,Baliadanga.There are almost 500 Hanumans.",
//   },
// ];

// const carouselImages = [homeImage, homeImage1, homeImage2, homeImage3,homeImage4,homeImage5,homeImage6];

// const BrandJashore = () => {
//   const [currentSlider, setCurrentSlider] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(
//       () =>
//         setCurrentSlider((prev) =>
//           prev === carouselImages.length - 1 ? 0 : prev + 1
//         ),
//       2000
//     );
//     return () => clearInterval(intervalId);
//   }, []);

//   const prevSlider = () => {
//     setCurrentSlider(
//       currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
//     );
//   };

//   const nextSlider = () => {
//     setCurrentSlider(
//       currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="h-60 w-full md:h-[470px] lg:h-[640px] relative overflow-hidden">
//         {/*  arrow left */}
//         <button
//           onClick={prevSlider}
//           className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
//         >
//           <svg
//             className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
//             viewBox="0 0 1024 1024"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
//           </svg>
//         </button>
//         {/* arrow right */}
//         <button
//           onClick={nextSlider}
//           className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
//         >
//           <svg
//             className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
//             viewBox="0 0 1024 1024"
//             xmlns="http://www.w3.org/2000/svg"
//             transform="rotate(180)"
//           >
//             <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
//           </svg>
//         </button>
//         {/* dots */}
//         <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
//           {carouselImages.map((img, idx) => (
//             <button
//               key={`${img}_${idx}`}
//               onClick={() => setCurrentSlider(idx)}
//               className={`rounded-full duration-500 bg-white ${
//                 currentSlider === idx ? "w-8" : "wz-2"
//               } h-2`}
//             ></button>
//           ))}
//         </div>
//         {/* Carousel container */}
//         <div
//           className="ease-linear duration-500 flex transform-gpu"
//           style={{ transform: `translateX(-${currentSlider * 100}%)` }}
//         >
//           {/* sliders */}
//            {carouselImages.map((slide, idx) => (
//             <img
//               key={slide}
//               src={slide}
//               className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[640px] object-cover"
//               alt={`Slider - ${idx + 1}`}
//             />
            
//           ))}
//         </div>
//       </div>

//       <div className="space-y-5 my-10 px-5">
//       {data.map((item,index)=>(
//         <div className="space-y-1" key={index}>
//         <div className="font-bold underline font-serif text-xl">{item.heading}</div>
//         <div className="font-serif text-justify text-lg">{item.des}</div>
//       </div>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default BrandJashore;
import { useState, useEffect } from "react";
import homeImage from "../../assets/Branding/Bijoy Stomvo Monihar Area_02.jpg";
import homeImage1 from "../../assets/Branding/Bijoy Vaskorjo Dhormotola_02.jpg";
import homeImage2 from "../../assets/Branding/Flower Cultivation_Godkhali_01.jpg";
import homeImage3 from "../../assets/Branding/Khejur Guur_03.jpg";
import homeImage4 from "../../assets/Branding/Khejur Guur_04.jpg";
import homeImage5 from "../../assets/Branding/Khejur Guur_09.jpg";
import homeImage6 from "../../assets/Branding/Khejur Guur_19.jpg";

const data = [
  // data objects here remain unchanged
];

const carouselImages = [homeImage, homeImage1, homeImage2, homeImage3, homeImage4, homeImage5, homeImage6];

const BrandJashore = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider((prev) =>
          prev === carouselImages.length - 1 ? 0 : prev + 1
        ),
      2000
    );
    return () => clearInterval(intervalId);
  }, []);

  const prevSlider = () => {
    setCurrentSlider(
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  };

  const nextSlider = () => {
    setCurrentSlider(
      currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-60 w-full md:h-[470px] lg:h-[640px] relative overflow-hidden">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </svg>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((img, idx) => (
            <button
              key={`${img}_${idx}`}
              onClick={() => setCurrentSlider(idx)}
              className={`rounded-full duration-500 bg-white ${
                currentSlider === idx ? "w-8" : "w-2"
              } h-2`}
            ></button>
          ))}
        </div>
        {/* Carousel container */}
        <div
          className="ease-linear duration-500 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {carouselImages.map((slide, idx) => (
            <div key={slide} className="min-w-full flex items-center">
              <img
                src={slide}
                className="w-1/2 h-60 bg-black/20 sm:h-96 md:h-[640px] object-cover"
                alt={`Slider - ${idx + 1}`}
              />
              <div className="w-1/2 p-5 text-white bg-black/60">
                <div className="font-bold text-xl mb-2">{data[idx]?.heading}</div>
                <p className="text-lg">{data[idx]?.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5 my-10 px-5">
        {data.map((item, index) => (
          <div className="space-y-1" key={index}>
            <div className="font-bold underline font-serif text-xl">{item.heading}</div>
            <div className="font-serif text-justify text-lg">{item.des}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandJashore;
             