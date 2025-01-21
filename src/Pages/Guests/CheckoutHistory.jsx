import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";
import UpdateDetails from "./UpdateDetails";
// import GuestDetails from "./GuestDetails";

const CheckoutHistory = () => {
  const [roomlist, SetRoomlist] = useState([]);
  const [checkoutHistory, setCheckoutHistory] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedGuestUpdate, setSelectedGuestUpdate] = useState(null);
  const [filteredHistory, setFilteredHistory] = useState([]); // Filtered results
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  console.log(checkoutHistory)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get('/checkout/');
        setCheckoutHistory(response.data);
        setFilteredHistory(response.data)
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await AxiosInstance.get("/room/");
        SetRoomlist(response.data);
        // console.log("roomlist",roomlist);

      } catch (error) {
        console.error("Error fetching room list:", error);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
   
    const results = checkoutHistory.filter((checkout) =>
    checkout.guest?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    checkout.guest?.phone?.toString().includes(searchQuery.toString())
  );
  
    setFilteredHistory(results);
  }, [searchQuery, checkoutHistory]);
  

  const toggleDetails = (id) => {
    setSelectedGuest(selectedGuest === id ? null : id);
  };




  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Guest Information</h2>

      <div className="mb-6">
      <input
        type="text"
        placeholder="Search by name or phone"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-80 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300 ease-in-out"
      />
    </div>


      {/* Table for larger screens */}
      <div className="overflow-x-auto overflow-y-auto shadow-xl rounded-lg">
        <table className="w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">SL</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 ">Name</th>
              {/* <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Designation</th> */}
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Room Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Check-In Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Check-Out Date</th>
              {/* <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Update</th> */}
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Details</th>
            </tr>
          </thead>
          <tbody>
  {filteredHistory.map((checkout, index) => (
    <tr key={checkout.id} className="border-t border-b hover:bg-blue-50">
      <td className="py-3 px-4 text-sm font-medium text-gray-800">{filteredHistory.length - index}</td>
      <td className="py-3 px-4 text-sm font-medium text-gray-800 whitespace-nowrap">{checkout.guest.name}</td>
      <td className="py-3 px-4 text-sm font-medium text-gray-800">{checkout.guest.room_name}</td>
      <td className="py-3 px-4 text-sm text-gray-600 whitespace-nowrap">
        {new Date(checkout.guest.check_in_date).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </td>
      <td className="py-3 px-4 text-sm text-gray-600 whitespace-nowrap">
        {new Date(checkout.guest.check_out_date).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </td>
      <td className="py-3 px-4 text-sm">
        <button
          onClick={() => toggleDetails(checkout.guest.id)}
          className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Details
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>




      {/* Modal for guest details */}
      {selectedGuest && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-4/5 max-w-3xl max-h-screen overflow-y-auto">
              {checkoutHistory
                .filter((checkout) => checkout.guest.id === selectedGuest)
                .map((checkout) => (
                  <div key={checkout.id}>
                    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Guest Details</h3>
                        <table className="table-auto w-full text-base border-separate border-spacing-2">
                          <tbody>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Guest Name</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.guest.name}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Designation</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.guest.designation}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Room Name</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.guest.room_name}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Phone</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.guest.phone}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Email</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.guest.email}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Check-In Date</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>
                                {new Date(checkout.guest.check_in_date).toLocaleString("en-GB", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Check-Out Date</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>
                                {new Date(checkout.guest.check_out_date).toLocaleString("en-GB", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Total Persons</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.guest.total_person}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Total Days</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.guest.total_days}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
          
                      {/* Additional Payment Info */}
                      <div className="lg:ml-0">
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Payment Information</h3>
                        <table className="table-auto w-full text-base border-separate border-spacing-2">
                          <tbody>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Payment Status</td>

                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.payment_status}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Bill ID:</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.payment_id}</td>
                            </tr>
                            <tr>
                              <td className="text-gray-700 font-medium w-1/3">Bill By:</td>
                              <td className="text-gray-700"><span className="mr-2">:</span>{checkout.bill_by}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
          
                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-gray-700">Payment Details</h3>
                      <table className="table-auto w-full text-sm border-separate border-spacing-2">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-left text-gray-600">Description</th>
                            <th className="px-4 py-2 text-right text-gray-600">Amount (BDT)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-1 text-gray-800">Total Rental Price</td>
                            <td className="px-4 py-1 text-right text-gray-800">{checkout.total_rental_cost}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-1 text-gray-800">Total Food Price</td>
                            <td className="px-4 py-1 text-right text-gray-800">{checkout.total_food_cost}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-1 text-gray-800">Total Other Costs</td>
                            <td className="px-4 py-1 text-right text-gray-800">{checkout.total_other_cost}</td>
                          </tr>
                          <tr className="border-b bg-gray-100">
                            <td className="px-4 py-1 text-gray-800 font-semibold">Grand Total</td>
                            <td className="px-4 py-1 text-right text-gray-800 font-semibold">
                              {checkout.grand_total}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
          
                    <div className="mt-2 text-center">
                      <button
                        onClick={() => toggleDetails(null)}
                        className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
      )}
    </div>
  );
};

export default CheckoutHistory;