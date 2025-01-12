import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";
import { useLocation } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";

const Details = () => {
  const location = useLocation();
  const room = location.state?.room;

  if (!room) {
    return <p className="text-center text-lg text-red-600">Room data not found.</p>;
  }
  console.log("room id", room.id)

  const [grouped, setGrouped] = useState([]);
  const [guestHistory, setGuestHistory] = useState([]);
  const { user } = useUser();
  const guestTypeMap = {
    'Government Official': 'Govt. Official(Existing/Retd.)',
    'Reference': 'Reference',
    'Autonomous': 'Autonomous/Statutary Organization',
    'Private Sector Employee': 'Private Sector Employee/Others',
  };

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await AxiosInstance.get("/pricing/");
        const PriceData = response.data.filter(item => item.room_type === room.room_type);

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
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    const fetchGuestHistory = async () => {
      try {
        const response = await AxiosInstance.get(`/checkout/`);
        // Filter guests by room ID (adjusting to match the nested structure)
        const filteredGuests = response.data.filter(
          (checkout) => checkout.guest.room === room.id
        );
        setGuestHistory(filteredGuests);
        setGuestDetails(filteredGuests);
      } catch (error) {
        console.error("Error fetching guest history:", error);
      }
    };
    
    fetchPricingData();
    fetchGuestHistory();
    }, [room.id, room.room_type]);
    

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <div className="p-8 w-full max-w-4xl bg-white shadow-xl rounded-xl mb-8">
        <h2 className="text-2xl font-extrabold text-center text-teal-700 mb-6">{room.room_name}</h2>

        {/* Room Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="p-4 bg-teal-50 rounded-lg shadow-md">
            <span className="block text-sm font-semibold text-teal-600">Bed:</span>
            <span className="block text-lg font-medium text-gray-800">{room.room_type}</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <span className="block text-sm font-semibold text-teal-600">Status:</span>
            <span className="block text-lg font-medium text-gray-800">{room.availability_status}</span>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg shadow-md">
            <span className="block text-sm font-semibold text-teal-600">Category:</span>
            <span className="block text-lg font-medium text-gray-800">{room.room_category}</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <span className="block text-sm font-semibold text-teal-600">Building:</span>
            <span className="block text-lg font-medium text-gray-800">{room.building}</span>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg shadow-md">
            <span className="block text-sm font-semibold text-teal-600">Floor:</span>
            <span className="block text-lg font-medium text-gray-800">{room.floor}</span>
          </div>
        </div>


        {/* Price Table */}
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">Price Table</h2>
        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th className="px-4 py-1 text-center font-semibold">SL No.</th>
                <th className="px-4 py-1 text-left font-semibold">Guest Type</th>
                <th className="px-4 py-1 text-center font-semibold">1-3 days</th>
                <th className="px-4 py-1 text-center font-semibold">4-7 days</th>
                <th className="px-4 py-1 text-center font-semibold">8 days or up</th>
              </tr>
            </thead>
            <tbody>
              {grouped.map(([guestType, prices], index) => (
                <tr
                  key={index}
                  className={`hover:bg-teal-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="px-4 py-1 text-center font-medium">{index + 1}</td>
                  <td className="px-4 py-1">
                    {guestTypeMap[guestType] || guestType}
                  </td >
                  {prices.price_per_day ? (
                    <td
                      className="px-4 py-1 text-center align-middle text-blue-400"
                      colSpan={3}
                    >
                      {prices.price_per_day}
                    </td>
                  ) : (
                      <>
                        <td className="px-4 py-1 text-center align-middle">{prices["1-3"]}</td>
                        <td className="px-4 py-1 text-center align-middle">{prices["4-7"]}</td>
                        <td className="px-4 py-1 text-center align-middle">{prices["7+"]}</td>
                      </>
                    )}

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guest History Section */}
      {user && (
        <div className="relative p-6 w-full max-w-4xl bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">Guest History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg">
              <thead className="bg-teal-100 text-gray-800">
                <tr>
                  <th className="px-2 py-2 border">SL No.</th>
                  <th className="px-2 py-2 border">Guest Name</th>
                  <th className="px-2 py-2 border">Office</th>
                  <th className="px-2 py-2 border">Guest Type</th>
                  <th className="px-2 py-2 border">Check-In</th>
                  <th className="px-2 py-2 border">Check-Out</th>
                  <th className="px-2 py-2 border">Contact Info. </th>

                </tr>
              </thead>
              <tbody>
                {guestHistory.length > 0 ? (
                  guestHistory.map((guest, index) => (
                    <tr key={index} className="hover:bg-teal-50">
                      <td className="px-2 py-2 border text-center">{guestHistory.length-index}</td>
                      <td className="px-2 py-2 border">{guest.guest.name}</td>
                      <td className="px-2 py-2 border">{guest.guest.office}</td>
                      <td className="px-2 py-2 border">{guest.guest.user_type}</td>
                      <td className="px-2 py-2 border text-center">
                        {new Date(guest.guest.check_in_date).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </td>
                      <td className="px-2 py-2 border text-center">
                        {new Date(guest.guest.check_out_date).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </td>
                      <td className="px-2 py-2 border text-center">{guest.guest.phone}</td>

                    </tr>
                  ))
                ) : (
                    <tr>
                      <td colSpan={4} className="px-2 py-2 border text-center text-gray-500">
                        No guest history available.
                  </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
