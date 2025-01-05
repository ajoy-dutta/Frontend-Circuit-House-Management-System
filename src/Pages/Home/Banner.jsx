import { useState, useEffect } from "react";
import homeImage from "../../assets/Slider/Circuit House_01.jpg";
import homeImage1 from "../../assets/Slider/Collectorate Bhaban_01.jpg";
import homeImage2 from "../../assets/Slider/Flower Cultivation_Godkhali_01.jpg";
import homeImage3 from "../../assets/Slider/Khejur Guur_06.jpg";

const data = [
  {
    img: homeImage,
    title: "Welcome to Jashore Circuit House",
  },
  {
    img: homeImage3,
    title: "নানা রঙের ফুলের মেলা, খেজুর গুড়ে যশোর জেলা",
    buttonText: "Explore",
  },
  {
    img: homeImage2,
    title: "নানা রঙের ফুলের মেলা, খেজুর গুড়ে যশোর জেলা",
    buttonText: "Get Started",
  },
  {
    img: homeImage1,
    title: "Discover Jashore",
    des: "The Land of Heritage and Harmony",
  },
];

export default function Carousel6() {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === data.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  const goToPreviousSlide = () => {
    setCurrentSlider(currentSlider === 0 ? data.length - 1 : currentSlider - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlider(currentSlider === data.length - 1 ? 0 : currentSlider + 1);
  };

  return (
    <div className="relative">
      {/* Carousel Images */}
      <div className="h-72 w-full transform overflow-hidden sm:h-96 md:h-[540px] lg:gap-10">
        {data.map((slide, index) => {
          const { img, title, des } = slide;
          return (
            <div
              className={`${index === currentSlider ? 'visible opacity-100' : 'invisible opacity-0'} absolute inset-0 duration-500 ease-linear`}
              key={`index_${index}`}
            >
              <img
                src={img}
                width="1200"
                height="600"
                alt={title}
                className={`h-full w-full object-cover duration-500 ease-linear ${index === currentSlider ? 'scale-100' : 'scale-105'}`}
              />
              <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
                <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-xl">
                  <div className="mb-3 overflow-hidden text-xl font-semibold lg:text-3xl">
                    <h1 className={`${index === currentSlider ? '' : 'translate-y-12'} duration-500 ease-linear`}>{title}</h1>
                  </div>
                  <div className="overflow-hidden text-lg md:text-base lg:text-xl">
                    <p className={`${index === currentSlider ? '' : '-translate-y-12'} duration-500 ease-linear`}>{des}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Previous and Next Buttons */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-20">
        <button
          onClick={goToPreviousSlide}
          className="bg-black w-10 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        >
          ❮
        </button>
      </div>
      <div className="absolute  top-1/2 right-5 transform -translate-y-1/2 z-20">
        <button
          onClick={goToNextSlide}
          className="bg-black w-10 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
