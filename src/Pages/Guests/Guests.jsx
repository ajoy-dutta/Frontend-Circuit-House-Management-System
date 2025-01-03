import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";
import UpdateDetails from "./UpdateDetails";
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
        setGuestsList(response.data);
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

  const toggleUpdate = (id) => {
    setSelectedGuestUpdate(selectedGuestUpdate === id ? null : id);
  };



  return (
    <div className="p-8 bg-gray-50 min-h-screen">
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
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Check-In Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Check-Out Date</th>
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
                <td className="py-3 px-4 text-sm text-gray-600"> 
                  {new Date(guest.check_in_date ).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
                </td>

                <td className="py-3 px-4 text-sm text-gray-600">
                  {new Date(guest.check_out_date ).toLocaleString("en-GB", {
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
                    onClick={() => toggleUpdate(guest.id)}
                    className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Update
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
                    to="/admin/checkout"
                    state={{ guest }}
                    className="px-4 py-2 bg-green-500 text-white text-xs font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Guest Details</h3>
            {guests
              .filter((guest) => guest.id === selectedGuest)
              .map((guest) => (
                <table key={guest.id} className="table-auto w-full text-left">
                  <tbody>
                    <tr>
                      <td className="text-gray-700 font-semibold">Guest Name:</td>
                      <td>{guest.name}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Guest's Office:</td>
                      <td>{guest.office}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Designation:</td>
                      <td>{guest.designation}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Phone No:</td>
                      <td>{guest.phone}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Room Name:</td>
                      <td>{guest.room_name}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Motive of Visiting:</td>
                      <td>{guest.motive_of_visiting}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Check-In Date:</td>
                      <td>
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
                      <td className="text-gray-700 font-semibold">Check-Out Date:</td>
                      <td>{new Date(guest.check_out_date).toLocaleString("en-GB", {
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
                      <td className="text-gray-700 font-semibold">Guest Type:</td>
                      <td>{guest.user_type}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">NID:</td>
                      <td>{guest.nid}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Email:</td>
                      <td>{guest.email}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Persons:</td>
                      <td>{guest.total_person}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Days:</td>
                      <td>{guest.total_days}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Rental Cost:</td>
                      <td>{guest.total_rental_price}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Food Cost:</td>
                      <td>{guest.total_food_cost}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Total Other Cost:</td>
                      <td>{guest.total_other_cost}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-700 font-semibold">Grand Total:</td>
                      <td>
                        {Number(guest.total_rental_price) +
                          Number(guest.total_food_cost) +
                          Number(guest.total_other_cost)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            <div className="mt-4">
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