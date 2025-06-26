import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";
import UpdateDetails from "./UpdateDetails";
import { RiDeleteBin5Fill, RiEditFill } from "react-icons/ri";

// import GuestDetails from "./GuestDetails";

const Guests = () => {
  const [roomlist, SetRoomlist] = useState([]);
  const [guests, setGuestsList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedGuestUpdate, setSelectedGuestUpdate] = useState(null);

  console.log(guests)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get('/book/');
        const sortedData = response.data.sort((a, b) => {
          const dateA = new Date(a["check_in_date"]);
          const dateB = new Date(b["check_in_date"]);
          return dateB - dateA; // Sort in descending order
        });
        setGuestsList(sortedData); // Set the sorted list
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


  // console.log("roomlist",roomlist)


  const toggleDetails = (id) => {
    setSelectedGuest(selectedGuest === id ? null : id);
  };

  const toggleUpdate = async (id) => {
    setSelectedGuestUpdate(selectedGuestUpdate === id ? null : id);
    
    // If the update is successful, fetch the data again to refresh the state
    if (selectedGuestUpdate !== id) {
      try {
        const response = await AxiosInstance.get('/book/');
        const sortedData = response.data.sort((a, b) => {
          const dateA = new Date(a["check_in_date"]);
          const dateB = new Date(b["check_in_date"]);
          return dateB - dateA; // Sort in descending order
        });
        setGuestsList(sortedData); // Set the sorted list
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
  };
  



  return (
    <div className="p-8 bg-gray-50 ">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Guest Information</h2>

      {/* Table for larger screens */}
      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">SL</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Name</th>
              {/* <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Designation</th> */}
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Room Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Check-In Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Check-Out Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Update</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Details</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Check out</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest, index) => (
              <tr key={guest.id} className="border-t border-b hover:bg-blue-50">
                <td className="py-3 px-4 text-sm font-medium text-gray-800">{index + 1}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-800">{guest.name}</td>
                {/* <td className="py-3 px-4 text-sm font-medium text-gray-800">{guest.designation}</td> */}
                <td className="py-3 px-4 text-sm font-medium text-gray-800">{guest.room_name}</td>
                <td className="py-3 px-4 text-sm text-gray-600 whitespace-nowrap"> 
                  {new Date(guest.check_in_date ).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
                </td>

                <td className="py-3 px-4 text-sm text-gray-600 whitespace-nowrap">
                  {new Date(guest.check_out_date ).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
                </td>

                <td className="py-3 px-4 text-sm text-center">
                  <button
                    onClick={() => toggleUpdate(guest.id)}
                    className="text-teal-600 hover:text-teal-800 align-center"
                  >
                     <RiEditFill></RiEditFill>
                  </button>
                </td>

                {selectedGuestUpdate == guest.id && (
                  <div className="mt-4">
                    <UpdateDetails
                      guest={guest}
                      roomlist={roomlist}
                      toggleUpdate={toggleUpdate}
                    />
                  </div>
                )}

                <td className="py-3 px-4 text-sm">
                  <button
                    onClick={() => toggleDetails(guest.id)}
                    className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Details
                  </button>
                </td>


                <td className="py-3 px-4 text-sm">
                  <Link
                    to="/checkout"
                    state={{ guest }}
                    className="px-2 py-2 bg-green-500 text-white text-xs font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Checkout
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for guest details */}
      {selectedGuest && (
        <div className=" fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className=" bg-white p-6 ml-6 rounded-lg shadow-xl w-full max-w-lg overflow-x-auto overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 ml-6">Guest Details</h3>
            {guests
              .filter((guest) => guest.id === selectedGuest)
              .map((guest) => (
                <table key={guest.id} className="whitespace-nowrap table-auto w-3/4 ml-6 text-left">
                  <tbody>
                    <tr>
                      <td className="text-gray-700 font-semibold">Guest Name</td>
                      <td> <span className="mr-2">:</span>{guest.name}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Guest's Office</td>
                      <td><span className="mr-2">:</span>{guest.office}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Designation</td>
                      <td><span className="mr-2">:</span>{guest.designation}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Phone No</td>
                      <td><span className="mr-2">:</span>{guest.phone}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Room Name</td>
                      <td><span className="mr-2">:</span>{guest.room_name}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Motive of Visiting</td>
                      <td><span className="mr-2">:</span>{guest.motive_of_visiting}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Check-In Date</td>
                      <td><span className="mr-2">:</span>
                        {new Date(guest.check_in_date).toLocaleString("en-GB", {
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
                      <td className="text-gray-700 font-semibold">Check-Out Date</td>
                      <td><span className="mr-2">:</span>
                      {new Date(guest.check_out_date).toLocaleString("en-GB", {
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
                      <td className="text-gray-700 font-semibold">Guest Type</td>
                      <td><span className="mr-2">:</span>{guest.user_type}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">NID</td>
                      <td><span className="mr-2">:</span>{guest.nid}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Email</td>
                      <td><span className="mr-2">:</span>{guest.email}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Persons</td>
                      <td><span className="mr-2">:</span>{guest.total_person}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Days</td>
                      <td><span className="mr-2">:</span>{guest.total_days}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Rental Cost</td>
                      <td><span className="mr-2">:</span>{guest.total_rental_price}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Food Cost</td>
                      <td><span className="mr-2">:</span>{guest.total_food_cost}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Other Cost</td>
                      <td><span className="mr-2">:</span>{guest.total_other_cost}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Grand Total</td>
                      <td><span className="mr-2">:</span>
                        {Number(guest.total_rental_price) +
                          Number(guest.total_food_cost) +
                          Number(guest.total_other_cost)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            <div className="mt-4 text-center">
              <button
                onClick={() => toggleDetails(null)}
                className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Close
        </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guests;