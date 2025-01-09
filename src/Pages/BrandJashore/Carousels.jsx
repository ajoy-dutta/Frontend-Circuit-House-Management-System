import { useCallback, useEffect, useState } from "react";

export const Carousels = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1532155297578-a43684be8db8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
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
            className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "w-2"} h-2`}
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
          <div
            key={slide}
            className="min-w-full flex items-center text-center relative"
          >
            <img
              src={slide}
              className="h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover w-1/2"
              alt={`Slider - ${idx + 1}`}
            />
            <div className="absolute right-0 p-4  w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum distinctio facilis libero culpa recusandae eos consequuntur sint a. Dolore perferendis facere modi non voluptas eius totam mollitia doloribus in a exercitationem consequuntur sapiente rerum laborum autem dolorem, rem enim ex adipisci? Facere repellat accusamus laboriosam illo molestias aperiam a quis. Iusto obcaecati incidunt, totam voluptatum ullam non dolor cupiditate esse repellat sint fuga nisi quae, modi, magnam velit! Ex aut laudantium id alias ipsam repellat ipsa, quo temporibus veniam perferendis molestias vel iusto laboriosam quam voluptatum ipsum libero amet! Possimus quia reprehenderit sed ipsa unde laboriosam minus expedita, optio quod? atque?
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
