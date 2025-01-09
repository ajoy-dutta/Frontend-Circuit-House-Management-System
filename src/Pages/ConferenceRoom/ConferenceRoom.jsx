
import img2 from '../../assets/Conference/conference_2.jpg'
import img3 from '../../assets/Conference/conference_3.jpg'
import { useState,useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ConferenceRoom = () => {

  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    {
      url:img2,
      caption: "Beautiful view of the room with modern decor.",
    },

    {
      url:img3,
      caption: "Spacious conference area for business meetings.",
    }
  ];
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleBookNowClick = () => {
    setShowContactInfo(!showContactInfo); // Show the contact info when button is clicked
  };

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
    <div className="max-w-7xl mx-auto my-10 px-8 mt-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Conference Rooms</h1>
        <p className="text-lg text-left text-gray-700 font-semibold mb-12">
          Discover our range of conference rooms designed to meet your business needs. Whether you need a space for
          collaboration, presentations, or executive meetings, we have the perfect room for you.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 ">
        {/* Carousel Section */}
        <div className="bg-[#D8C4B6] p-2 rounded-tr-2xl rounded-bl-2xl">
        <div className="relative h-[300px] overflow-hidden">
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
              <div
              key={slide.url}
              className="min-w-full h-full flex flex-col items-center justify-between"
              >
              <img
                key={slide}
                src={slide.url}
                className="min-w-full  rounded-bl-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
                alt={`Slider - ${idx + 1}`}
              />
              
              </div>
            ))}
          </div>
        </div>

        <div className=" mt-4 text-sm px-4 text-left">
          <p className="text-gray-800 font-semibold leading-relaxed text-justify">
          Our conference room offers the perfect setting for professional meetings, seminars, 
          and events. The room provides a comfortable and productive environment for all participants.
          Whether you are hosting a small team discussion or a large corporate gathering, our facilities 
          cater to your needs.
          </p>  
        </div>

      </div>

        
       


  {/* const conferenceRooms = [
    {
      id: 1,
      title: 'Executive Conference Room',
      description: 'A spacious and fully equipped conference room suitable for executive meetings and presentations.',
      image: img2, // Replace with your image URL
    },
    {
      id: 2,
      title: 'Modern Meeting Space',
      description: 'Designed for collaborative sessions, our modern meeting room is equipped with the latest technology.',
      image: img2, // Replace with your image URL
    },
    {
      id: 3,
      title: 'Premium Boardroom',
      description: 'An elegant boardroom with a large table, premium seating, and state-of-the-art AV equipment.',
      image: img3, // Replace with your image URL
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Conference Rooms</h1>
      <p className="text-lg text-center text-gray-700 font-semibold mb-12">
        Discover our range of conference rooms designed to meet your business needs. Whether you need a space for
        collaboration, presentations, or executive meetings, we have the perfect room for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {conferenceRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-2 "
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {room.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{room.description}</p>
              <button className="bg-yellow-500 text-sm text-white font-medium px-2 py-2 rounded hover:bg-yellow-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> */}

       {/* card section */}
       <div className="grid ">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-2">
          <img src={img3} className="w-full h-48 object-cover rounded-lg"/>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">We are ready to accommodate your needs with our versatile and fully equipped conference room</h2>
              <p className="text-gray-700 text-sm mb-4">please contact us for booking</p>
              <button 
              className="bg-green-500 text-sm text-white font-medium px-2 py-2 rounded hover:bg-green-600 transition duration-300"
              onClick={handleBookNowClick}
              >
               Book Now <FontAwesomeIcon icon={faArrowRight} />
              </button>

              {showContactInfo && (
              <div className="mt-4 text-sm text-gray-700">
                <p className="font-medium">Please contact for booking:</p>
                <p>Phone: +8801733909222</p>
                <p>Email: chjashore@gmail.com</p>
              </div>
               )}

            </div>
          </div>
        </div>

       </div>
    </div>
  );
};

export default ConferenceRoom;
