import { useState, useEffect } from "react";
import homeImage from "../../assets/Slider/Circuit House_01.jpg";
import homeImage1 from "../../assets/Slider/Collectorate Bhaban_01.jpg";
import homeImage2 from "../../assets/Slider/Flower Cultivation_Godkhali_01.jpg";
import homeImage3 from "../../assets/Slider/Khejur Guur_06.jpg";

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    { img: homeImage, title: "Welcome to Jashore Circuit House" },
    { img: homeImage3, title: "নানা রঙের ফুলের মেলা, খেজুর গুড়ে যশোর জেলা" },
    { img: homeImage2, title: "নানা রঙের ফুলের মেলা, খেজুর গুড়ে যশোর জেলা" },
    { img: homeImage1, title: "Discover Jashore", des: "The Land of Heritage and Harmony" },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div
      className="w-full h-64 sm:h-96 md:h-[700px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover bg-center before:absolute before:bg-black/30 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
      style={{ backgroundImage: `url(${sliders[currentSlider].img})` }} // Use currentSlider directly
    >
      {/* arrows */}
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        <button
          onClick={prevSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </svg>
        </button>
        <button
          onClick={nextSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </svg>
        </button>
      </div>
      {/* text container */}
      <div className="w-1/2 md:w-1/3 px-10 left-5 absolute drop-shadow-lg text-white rounded-lg">
        <h1 className="lg:text-3xl uppercase font-serif mb-3">{sliders[currentSlider].title}</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {sliders[currentSlider].des || ""}
        </p>
      </div>
    </div>
  );
};
