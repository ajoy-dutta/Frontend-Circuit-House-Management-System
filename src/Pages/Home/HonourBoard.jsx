import { useEffect, useState} from "react";
import axios from 'axios'

const HonourBoard = () => {
    const [honourlist, SetHonourlist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/honour-board/');
            SetHonourlist(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      useEffect(() => {
        console.log(honourlist);
      }, [honourlist]); 
    
    return (
        <div className="mt-8 p-8 mb-4">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className=" text-black uppercase bg-blue-200 dark:bg-blue-400 test-xl text-center font-bold border-b dark:border-gray-400 py-2">District Commissioner (DC) Honour Board</caption>
                <thead className="text-sm text-black uppercase bg-blue-300 dark:bg-blue-300 dark:text-black">
                <tr>
                    <th scope="col" className="px-0 py-3 text-center">
                    SL.
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Batch
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Joining Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Ending Date
                    </th>
                </tr>
                </thead>
                <tbody>
                {honourlist.map((item, index) => (
                    <tr key={item.id} className="bg-white font-semibold border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-gray-300  text-gray-800">
                    <td className="px-0 py-2 text-center">{index + 1}</td> 
                    <td className="px-5 py-5 w-4 h-4"><img src={item.photo} alt="image" /></td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.batch}</td>
                    <td className="px-6 py-4">{item.joining_date}</td>
                    <td className="px-6 py-4">{item.ending_date ? item.ending_date : "Running" }</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div> 
    </div>
    );
};

export default HonourBoard;