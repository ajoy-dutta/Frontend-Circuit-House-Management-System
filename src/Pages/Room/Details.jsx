import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";
import { IoCloseSharp } from "react-icons/io5";
const Details = ({ onClose, room }) => {

   const [grouped, setGrouped] = useState([]);
   console.log(grouped)


   useEffect (() =>{
     const fetchData= async()=>{

      try{
        const response = await AxiosInstance.get('/pricing/')
     
        const PriceData = response.data.filter(item => item.room_type === room.room_type);

        // Group data by user_type
        const grouped = PriceData.reduce((acc, item) => {
          if (!acc[item.user_type]) {
            acc[item.user_type] = { "1-3": "-", "4-7": "-", "7+": "-", price_per_day: null };
          }
          if (item.days_range) {
            acc[item.user_type][item.days_range] = `${item.price_per_day} taka/day`;
          } else {
            acc[item.user_type].price_per_day = `${item.price_per_day} taka/day`;
          }
          return acc;
        }, {});

        setGrouped(Object.entries(grouped));

      }catch (error) {
        console.error('Error fetching data:', error);
      }

     }

     fetchData()

   }, [])


   

    return (
      <div className="flex justify-center items-center">
        <div className="absolute p-4 top-40 w-2/3 h-2/3 bg-teal-50 bg-opacity-300">

          <h2 className="text-2xl font-bold text-center mb-4">{room.room_name}</h2>
          <div className="text-center mb-4">
            <span className="text-lg font-semibold"> বেডঃ {room.room_type}</span>
           </div>
          <p className="text-lg font-bold text-center mb-2">Price table</p>
          <div className="flex justify-center items-center">
          <table className="text-left text-sm">
            <thead>
              <tr >
                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>SL No.</th>
                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Guest Type</th>
                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>1-3 days</th>
                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>4-7 days</th>
                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>7 days or up</th>
              </tr>
            </thead>
            <tbody>
              {grouped.map(([guestType, prices], index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>{index + 1}</td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>{guestType}</td>
                  {prices.price_per_day ? (
                    <td style={{ border: "1px solid #000", padding: "8px" }} colSpan={3} className="text-left">
                      {prices.price_per_day}
                    </td>
                  ) : (
                    <>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>{prices["1-3"]}</td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>{prices["4-7"]}</td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}>{prices["7+"]}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
  
          <div className="flex justify-center items-center my-10">
          <div
            onClick={onClose}
            className="btn flex items-center justify-center w-36 gap-4 mt-4 text-base bg-red-500 text-white py-2 px-2  rounded hover:bg-red-600"
          >
            <IoCloseSharp className="text-lg" />
            Close
          </div>
          </div>

        </div>
      </div>
    );
  };
  
  export default Details;
  