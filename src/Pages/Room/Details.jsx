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
        const response = await AxiosInstance.get(`/book/`);
        const filteredGuests = response.data.filter((guest) => guest.room === room.id);
        setGuestHistory(filteredGuests)
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
      <div className="relative p-6 w-full max-w-4xl bg-white shadow-lg rounded-lg mb-6">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">{room.room_name}</h2>
        <div className="text-center mb-6">
          <span className="text-lg font-medium text-gray-700">বেডঃ {room.room_type}</span>
        </div>
        <p className="text-lg font-bold text-center text-gray-800 mb-4">Price Table</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg">
            <thead className="bg-teal-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 border">SL No.</th>
                <th className="px-4 py-2 border">Guest Type</th>
                <th className="px-4 py-2 border">1-3 days</th>
                <th className="px-4 py-2 border">4-7 days</th>
                <th className="px-4 py-2 border">8 days or up</th>
              </tr>
            </thead>
            <tbody>
              {grouped.map(([guestType, prices], index) => (
                <tr key={index} className="hover:bg-teal-50">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{guestType}</td>
                  {prices.price_per_day ? (
                    <td className="px-4 py-2 border text-center font-semibold text-teal-600" colSpan={3}>
                      {prices.price_per_day}
                    </td>
                  ) : (
                      <>
                        <td className="px-4 py-2 border text-center">{prices["1-3"]}</td>
                        <td className="px-4 py-2 border text-center">{prices["4-7"]}</td>
                        <td className="px-4 py-2 border text-center">{prices["7+"]}</td>
                      </>
                    )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Guest History Section */}
      { user && (
      <div className="relative p-6 w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">Guest History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg">
            <thead className="bg-teal-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 border">SL No.</th>
                <th className="px-4 py-2 border">Guest Name</th>
                <th className="px-4 py-2 border">Guest's Office</th>
                <th className="px-4 py-2 border">Guest Type</th>
                <th className="px-4 py-2 border">Check-In</th>
                <th className="px-4 py-2 border">Check-Out</th>
                <th className="px-4 py-2 border">Contact Info. </th>

              </tr>
            </thead>
            <tbody>
              {guestHistory.length > 0 ? (
                guestHistory.map((guest, index) => (
                  <tr key={index} className="hover:bg-teal-50">
                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">{guest.name}</td>
                    <td className="px-4 py-2 border">{guest.office}</td>
                    <td className="px-4 py-2 border">{guest.user_type}</td>
                    <td className="px-4 py-2 border text-center">
                    {new Date(guest.check_in_date ).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
                    </td>
                    <td className="px-4 py-2 border text-center">
                    {new Date(guest.check_out_date ).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
                    </td>
                    <td className="px-4 py-2 border text-center">{guest.phone}</td>

                  </tr>
                ))
              ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-2 border text-center text-gray-500">
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
