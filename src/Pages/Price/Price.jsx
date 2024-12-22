import React from 'react';
import { useEffect, useState } from React
import axios from 'axios';
import { baseurl } from "../../BaseURL";


const Price = () => {
    const [Pricelist,setPricelist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const respone=await axios.get(`${baseurl}/pricing/`)
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