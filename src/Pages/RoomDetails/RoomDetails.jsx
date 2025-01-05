import { useCallback, useEffect, useState } from "react";
import room1 from "../../assets/Rooms/Circuit House_11.jpg";
import room2 from "../../assets/Rooms/Circuit House_12.jpg";
import room3 from "../../assets/Rooms/Circuit House_13.jpg";
import room4 from "../../assets/Rooms/Circuit House_15.jpg";

const RoomDetails = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [room1, room2, room3, room4];
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
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-3">
        {/* Carousel Section */}
        <div className="bg-[#D8C4B6] p-2 rounded-tr-2xl rounded-bl-2xl">
          <div className="relative h-64 md:h-[450px] overflow-hidden">
            {/* Arrow left */}
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
            {/* Arrow right */}
            <button
              onClick={nextSlider}
              className="absolute top-1/2 right-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
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
            {/* Dots */}
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
              className="ease-linear rounded-tr-xl duration-500 flex transform-gpu"
              style={{ transform: `translateX(-${currentSlider * 100}%)` }}
            >
              {carouselImages.map((slide, idx) => (
                <img
                  key={slide}
                  src={slide}
                  className="min-w-full  rounded-bl-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
                  alt={`Slider - ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Details of Rooms</h2>
          <p className="text-justify">
          The rooms offer a perfect blend of comfort and convenience, featuring air conditioning, fans, and geysers to suit all weather needs. Each room includes an attached bathroom, ensuring privacy and ease, along with high-speed Wi-Fi to keep you connected. For entertainment, a flat-screen TV is provided, and the intercom system ensures quick communication with the front desk or room service. Whether you're staying for business or leisure, these well-equipped rooms guarantee a pleasant and hassle-free experience, making your stay relaxing and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
