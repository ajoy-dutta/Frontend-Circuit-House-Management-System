import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './Banner';
import { useEffect, useState } from "react";
import AxiosInstance from '../../Components/Axios';
  

const Home = () => {

  const [currentDC, setCurrentDC] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/honour-board/");
        const dcData = response.data.filter(
          (item) => item.designation_type === "DC"
        );
    
      const Current_DC =  dcData.filter(
        (item) => 
          !item.ending_date 
        );

        setCurrentDC(Current_DC);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="">
         <Banner />
    </div>
  );
};

export default Home;
