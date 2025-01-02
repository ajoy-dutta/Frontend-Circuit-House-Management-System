import { useState, useEffect } from 'react';
import homeImage from '../../assets/home.jpg';
import homeImage2 from '../../assets/home2.jpeg';

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: homeImage,
      title: "Escape 1",
      des: "",
    },

    {
        img: homeImage2,
        title: "Your Comfortable Stay",
        des: "Experience serene living spaces with all the amenities you need for a memorable stay.",
    },
    
    {
        img: "https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Heritage Meets Luxury",
        des: "Enjoy the rich cultural ambiance and luxurious comfort at Circuit House Jashore.",
    },
    {
        img: "https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Tranquility Awaits",
        des: "Relax and unwind in the peaceful environment of Circuit House Jashore.",
    },
    {
        img: "https://images.unsplash.com/photo-1532155297578-a43684be8db8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Plan Your Visit",
        des: "Book your stay at Circuit House Jashore for an unforgettable experience.",
    },
];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  const isSmallScreen = window.innerWidth <= 768;

  // Automatically move to the next slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlider();
    }, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlider]);

  return (
    <div
      className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
      style={{
        backgroundImage: `url(${
          currentSlider === 0
            ? sliders[sliders.length - 1].img
            : sliders[currentSlider - 1].img
          })`,
      }}
    >
      {/* Arrow */}
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        {/* Arrow Left */}
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
        {/* Arrow Right */}
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
      {/* Text Container */}
      <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
        <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {sliders[currentSlider].des}
        </p>
      </div>
      {/* Slider Container */}
      <div className="w-1/2 ml-auto overflow-hidden absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div
          className="ease-linear duration-300 flex gap-4 items-center"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 98 : 200)
              }px)`,
          }}
        >
          {/* Sliders */}
          {sliders.map((slide, inx) => (
            <img
              key={inx}
              src={slide.img}
              className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                currentSlider - 1 === inx
                  ? "scale-0"
                  : "scale-100 delay-500"
                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
              alt={slide.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
