import Slider from 'react-slick';
import homeImage from '../../assets/home.jpg';
import homeImage2 from '../../assets/home2.jpeg'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HonourBoard from './HonourBoard';

// Slick Slider settings
const sliderSettings = {
  dots: true,         // Show navigation dots
  infinite: true,     // Infinite loop sliding
  speed: 500,         // Speed of slide transition in ms
  slidesToShow: 1,    // Number of slides to show
  slidesToScroll: 1,  // Number of slides to scroll at once
  autoplay: true,     // Enable autoplay
  autoplaySpeed: 3000, // Time interval for slide change (3000ms = 3 seconds)
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Image Slider */}
      <div className="px-8">
        <Slider {...sliderSettings}>
          {/* First Image Slide */}
          <div className="relative">
            <img 
              src={homeImage} 
              alt="Home" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white text-4xl font-bold bg-white bg-opacity-10">
              <p>Welcome to Our Home</p>
            </div>
          </div>

          {/* Second Image Slide */}
          <div className="relative">
            <img 
              src={homeImage2} 
              alt="Second" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white text-4xl font-bold bg-black bg-opacity-10">
              <p>Explore Our Space</p>
            </div>
          </div>

          {/* You can add more slides here */}
        </Slider>
      </div>

      <div>
        <HonourBoard />
      </div>

    </div>
  );
};

export default Home;
