import { useState, useEffect } from "react";
import homeImage from "../../assets/Slider/Circuit House_01.jpg";
import homeImage1 from "../../assets/Slider/Collectorate Bhaban_01.jpg";
import homeImage2 from "../../assets/Slider/Flower Cultivation_Godkhali_01.jpg";
import homeImage3 from "../../assets/Slider/Khejur Guur_06.jpg";
import homeImage4 from "../../assets/Slider/Border Check Port_02.jpg";
import homeImage5 from "../../assets/Slider/Jessore Road_01.jpg";
import homeImage6 from "../../assets/Egaro Shiv Mondir_03.jpg";

export const Carousel = () => {
  const sliders = [
    { img: homeImage, title: "Welcome to Jashore Circuit House" },
    { img: homeImage3, title: "নানা রঙের ফুলের মেলা, খেজুর গুড়ে যশোর জেলা" },
    { img: homeImage2, title: "Explore the Flower Capital of Bangladesh" },
    { img: homeImage1, title: "The Land of Heritage and Harmony" },
    { img: homeImage4, title: "নানা রঙের ফুলের মেলা, খেজুর গুড়ে যশোর জেলা" },
    { img: homeImage5, title: "Explore the Flower Capital of Bangladesh" },
    { img: homeImage6, title: "The Land of Heritage and Harmony" },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  const nextSlider = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentSlider((prev) => (prev + 1) % sliders.length);
      setAnimationClass("fade-in");
    }, 300);
  };

  const prevSlider = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentSlider((prev) => (prev - 1 + sliders.length) % sliders.length);
      setAnimationClass("fade-in");
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlider();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`relative w-full h-64 sm:h-96 md:h-[700px] overflow-hidden bg-cover bg-center`}
      style={{
        backgroundImage: `url(${sliders[currentSlider].img})`,
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
          position: "absolute",
          inset: 0,
          zIndex: 1, // Ensures it's above the image but below content
        }}
      ></div>

      {/* Raw CSS for fade-in and fade-out */}
      <style>
        {`
          .fade-in {
            opacity: 1;
            transform: translateX(0);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }
          .fade-out {
            opacity: 0;
            transform: translateX(-10%);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }
          .arrow-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 2; /* Ensures it stays above the overlay */
          }
          .arrow-button:hover {
            background-color: #0095ff;
            color: white;
          }
        `}
      </style>

      {/* Arrows */}
      <button
        onClick={prevSlider}
        className="arrow-button left-5"
        style={{ zIndex: 10 }}
      >
        <svg
          viewBox="0 0 1024 1024"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fill="#0095FF"
            d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlider}
        className="arrow-button right-5"
        style={{ zIndex: 10 }}
      >
        <svg
          viewBox="0 0 1024 1024"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          transform="rotate(180)"
        >
          <path
            fill="#0095FF"
            d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
          ></path>
        </svg>
      </button>

      {/* Text Container */}
      <div
        className={`absolute w-1/2 md:w-1/3 px-10 left-5 top-1/3 text-white transition-all duration-500 ease-in-out drop-shadow-lg rounded-lg ${animationClass}`}
        style={{ zIndex: 2 }}
      >
        <h1 className="lg:text-3xl  font-serif mb-3">
          {sliders[currentSlider].title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {sliders[currentSlider].des || ""}
        </p>
      </div>
    </div>
  );
};
