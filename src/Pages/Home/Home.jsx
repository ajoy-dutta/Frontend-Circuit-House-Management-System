import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DCinfo from './DCinfo';
import { Carousel } from './Carousel';


const Home = () => {

  return (
    <div className="">
         <Carousel></Carousel>
         <DCinfo ></DCinfo>
    </div>
  );
};

export default Home;
