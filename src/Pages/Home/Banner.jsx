
import homeImage from '../../assets/Slider/Circuit House_01.jpg';
import homeImage1 from '../../assets/Slider/Collectorate Bhaban_01.jpg';
import homeImage2 from '../../assets/Slider/Flower Cultivation_Godkhali_01.jpg';
import homeImage3 from '../../assets/Slider/Khejur Guur_06.jpg';

import { Carousel } from 'antd';

const Banner = () => {
  // const contentStyle = {
  //   height: '160px',
  //   lineHeight: '160px',
  //   textAlign: 'center',
   
  // };
  
  return (
    <div>
      <Carousel autoplay>
        <div className='min-h-fit md:h-screen'
        // style={{
        //   backgroundImage: `url(${homeImage})`,
        // }}
        >
          <img className="w-screen max-h-full" src={homeImage} alt="" />
        </div>
        <div className='min-h-fit md:h-screen'>
          <img className="w-full max-h-full" src={homeImage1} alt="" />
          
        </div>
        <div className='min-h-fit md:h-screen'>
          <img className="w-full max-h-full" src={homeImage2} alt="" />
        </div>
        <div className='min-h-fit md:h-screen'>
          <img className="w-full max-h-full" src={homeImage3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
