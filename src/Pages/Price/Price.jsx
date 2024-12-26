import { useEffect, useState } from 'react';
import AxiosInstance from '../../Components/Axios';


const Price = () => {
    const [Pricelist,setPricelist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response=await AxiosInstance.get('pricing/')
                const data=response.data
                setPricelist(data)
            }
            catch(error){
                console.log("Error fetching data ",error);
            }
        }
        fetchData();  

    }, []);

    };


export default Price;