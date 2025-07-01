import { useCallback, useEffect, useState } from "react";
import homeImage1 from "../../assets/Branding/Bijoy Vaskorjo Dhormotola_02.jpg";
import homeImage2 from "../../assets/Branding/Flower Cultivation_Godkhali_01.jpg";
import homeImage6 from "../../assets/Branding/Khejur Guur_19.jpg";
import Jashore from "../../assets/Branding/explore Jashore.jpg";
import stitch from "../../assets/Stich Work_14.jpg"
import collectroate from "../../assets/Branding/Collectorate Bhaban_05.jpg";
import VisitJashore from "../Attractions/VisitJashore";

export const Carousels = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      img: collectroate, //Boddhyovumi sankarpur_02
      heading: "At a Glance",
      des: "Jashore stands out as a district where history, culture, and progress converge. It holds a unique place in history as the first district officially established under British rule in India, marking the beginning of colonial administrative organization in the subcontinent. Renowned as the birthplace of poet Michael Madhusudan Dutt, it carries the legacy of Bengal’s literary awakening. Jashore was also the first district liberated in the 1971 Liberation War, a milestone that cements its role in Bangladesh’s national identity. Today, Jashore thrives with fertile lands, a flourishing flower economy, and strategic trade access through Benapole Land Port, standing as a proud symbol of heritage, progress, and resilience.",
    },
    // {
    //   img: collectroate, //colectrorate building
    //   heading: "Branding of Jashore district",
    //   des: "District branding is selected after considering history and tradition, In the same, Jashore district branding has been selected. Jashore district branding is mainly in two cases like flower and molasses. Firstly, cultivation of different coloured flowers has been initiated from eighty decades. Different kinds of flowers  are cultivated in almost 100 villages in more than 3,500(Hector). Flowers are like Rose,Tuberose,Sunflower, Merrigold,Gardenea,Dahlia etc.Secondly, Date Juice in Jashore, Jashore is famous for Date Juice.  There are 4,62,525 date palms and 2,31,26,250 litres date juice is collected from date palms of 486.20 (Hector) land and from the juice 37,00,200 KG molasses is made.",
    // },
    {
      img: homeImage1,
      heading: "Jashore Through History",
      des: "Jashore’s history is deeply entwined with the political and cultural evolution of Bengal. It was the first district formally established by the British East India Company in 1781, marking a foundational moment in the administrative structuring of British India. Under British administration, Jashore became a significant center for governance, education, and intellectual discourse, laying the groundwork for its cultural prominence. It later emerged as a stronghold of nationalist sentiment, and in 1971, it earned historical distinction as the first district to be liberated during the Bangladesh Liberation War. In the post-independence era, Jashore has evolved into a dynamic hub of agriculture, trade, and education. The establishment of the Jashore Export Processing Zone (EPZ) and the strategic importance of Benapole Land Port, the largest in Bangladesh, have positioned the district as a critical gateway for cross-border commerce with India. Today, Jashore continues to balance its rich historical legacy with a forward-looking vision, playing a vital role in the socio-economic landscape of modern Bangladesh.",
    },
    // {
    //   img: homeImage,
    //   heading: "Liberation War in Jashore",
    //   des: "First enemy- free district is Jashore across the country,Pakistani army became defeated in Jashore on 6 December 1971.Jashore has played an effective role in liberation war.The flag of independent Bangladesh is first hoisted from Jashore.",
    // },
    // {
    //   img: imambara, //imam bara
    //   heading: "Imam Bara",
    //   des: "300 years old Murali Imam Bara is located in Ramnagar union under sadar Upazila. It was established by Hazi Muhammad Muhasin.It was made of bricks and this rectangle building is in north -south 60 feet,in east-west 50 feet and it is divided  in three rows with 10 pillars.",
    // },
    // {
    //   img: airport,
    //   heading: "Jashore Air Port",
    //   des: "The construction of Jashore air port was started during second world war in 1942. It was built on 25( acre) land in 1946 but it was completely launched in1960.At present, non -government 4 air flights are available in this port.",
    // },
    {
      img: homeImage2,
      heading: "The Land of Flowers",
      des: "Known as the 'Land of Flowers,' Jashore enchants visitors with its vibrant, blooming fields—especially in Jhikargacha, where sprawling farms of marigolds, roses, gladiolus, and seasonal blooms paint the landscape in vivid hues. Each morning, the Jhikargacha flower market bursts to life as local cultivators and traders gather to auction fresh blossoms destined for festivals, homes, and national export. Tourists can stroll through flower farms at sunrise, engage with the passionate growers, and witness the lively marketplace in full swing. With fragrant air, colorful vistas, and the warm hospitality of flower farmers, Jashore offers a serene escape perfect for photography, relaxation, and an immersive floral experience.",
    },
    {
      img: homeImage6,
      heading: "Date Molasses",
      des: "Jashore is widely famous for its traditional date molasses (khejur gur), a winter delicacy deeply rooted in the region’s rural heritage. Produced by extracting sap from date palm trees during the cold months, this rich, dark syrup is carefully boiled in clay ovens to preserve its natural flavor and aroma. High-quality molasses is widely used in making pithas (rice cakes), sweets, and desserts. Tourists in Winter can witness the age-old process firsthand, savor the warm, earthy taste of fresh molasses, and take home a delicious symbol of Bengali tradition.",
    },
    // {
    //   img: collectrorate,
    //   heading: "Collectorate Building",
    //   des: "Jashore Collectorate was started in 1786 as the first Collectorate in sub -continent  .The name of Jashore Collectorate  is organically involved with history and tradition.It is located at Doratana in Jashore. The building is at present the office of DC(Deputy Commissioner).First floor of the present building was founded in 1885 and second floor in 1980.",
    // },
    {
      img: stitch,
      heading: "Jashore Stitch: Weaving Stories",
      des: "Delicate yet bold, Jashore Stitch is one of Bengal’s best-kept artistic secrets—a centuries-old embroidery tradition quietly thriving in the rural heartlands of Jashore. Characterized by bold, geometric and floral motifs, this artisanal craft is typically embroidered on cotton or silk using vibrant threads. Practiced primarily by rural women, Jashore Stitch is more than decorative—it is a form of storytelling and heritage preservation passed down through generations.",
    },
    {
      img: Jashore,
      heading: "Explore Jashore",
      des: "To visit Bangladesh without exploring Jashore is to miss the soul of the country. Here, history breathes through colonial relics, poetry flows by the banks of the Kopotakkho, and fields bloom with a thousand colors. From the birthplace of Michael Madhusudan Dutt to the vibrant flower markets of Jhikargacha, Jashore offers an experience that is raw, beautiful, and deeply human. It’s not just a destination—it’s the heart of Bengal’s story. Book your package now.",
    },
    // {
    //   img: MichaelMadhusudanDutt,
    //   heading: "House of Michael Madhusudan Dutt",
    //   des: "House of Michael Madhusudan  Dutt is situated on the bank of Copotakho river, Sagordari village, Keshobpur Upazila. There are some ancient one and two storeyed buildings in the house.",
    // },
    // {
    //   img: hammamkana,
    //   heading: "Mirzanagar Hammamkhana",
    //   des: "Hammamkhana was built in 1649  by Sopsi Khan who is Sha Suza's brother in law's son during emperor Akber.",
    // },
    // {
    //   img: Modhumela,
    //   heading: "Modhu Mela",
    //   des: "Modhumela is an important  part of traditional Jashore. The fair is organised by district administration at the end of January. Poetess Mankumari Basu, niece of Michael first started to commemorate in 1890 at Sagordari after poet's death.After that, the fair begins.",
    // },
    // {
    //   img: PirMeheruddinMazar,
    //   heading: "Grave of Saint Meheruddin (Ra:)",
    //   des: "The grave is almost  300 years old.It is said that saint Meheruddin (Ra:)is contemporary of saint Khan Jahan Ali(Ra:).It is established on 3.21(acre) land.",
    // },
    // {
    //   img: kaloMhuk,
    //   heading: "Blackmouth Hanuman",
    //   des: "Blackmouth Hanuman of rare species is almost vanished in Bangladesh. It is seen in Keshobpur, Ramchandrapur,Baliadanga.There are almost 500 Hanumans.",
    // },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? data.length - 1 : currentSlider - 1
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === data.length - 1 ? 0 : currentSlider + 1
      ),
    [data.length]
  );



  return (
    <div>
      <div className="h-60 bg-[#F5EFE7] w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-black/50 rounded-full w-6 h-6 md:w-8 md:h-8"
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
          className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-black/50 rounded-full w-6 h-6 md:w-8 md:h-8"
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
        <div className=" flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {data.map((_, idx) => (
            <button
              key={`${idx}_${idx}`}
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
          {data.map((slide, idx) => (
            <div
              key={slide}
              className="min-w-full flex items-center text-center relative"
            >
              <img
                src={slide.img}
                className="h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover w-1/2"
                alt={`Slider - ${idx + 1}`}
              />
              <div className="absolute right-0  bg-white/50 md:bg-transparent p-4 px-6 space-y-3
              md:space-y-5 text-[#213555] font-serif text-justify w-full sm:w-2/3 md:w-1/2">
                <p className="font-bold text-lg sm:text-xl md:text-2xl">
                  {slide.heading}
                </p>
                <div className="text-sm sm:text-base md:text-lg">
                  {slide.des}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16">
        <VisitJashore></VisitJashore>
      </div>
    </div>
  );
};
