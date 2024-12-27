import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";

const Guests = () => {
  const [guests, setGuestsList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

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

  const toggleDetails = (id) => {
    setSelectedGuest(selectedGuest === id ? null : id);
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
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Designation</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Room Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Check-In Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Check-Out Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Details</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Check out</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest, index) => (
              <tr key={guest.id} className="border-t border-b hover:bg-blue-50">
                <td className="py-3 px-4 text-sm font-medium text-gray-800">{index + 1}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-800">{guest.name}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-800">{guest.designation}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-800">{guest.room_name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{guest.check_in_date}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{guest.check_out_date}</td>
                <td className="py-3 px-4 text-sm">
                  <button
                    onClick={() => toggleDetails(guest.id)}
                    className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {selectedGuest === guest.id ? "Hide Details" : "Show Details"}
                  </button>
                </td>
                <td className="py-3 px-4 text-sm">
                <Link
                  to="/checkout"
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
                <div key={guest.id} className="space-y-2">
                  <p><strong className="text-gray-700">Guest Name:</strong> {guest.name}</p>
                  <p><strong className="text-gray-700">Designation:</strong> {guest.designation}</p>
                  <p><strong className="text-gray-700">Phone No:</strong> {guest.phone}</p>
                  <p><strong className="text-gray-700">Room Name:</strong> {guest.room_name}</p>
                  <p><strong className="text-gray-700">Motive of Visiting:</strong> {guest.motive_of_visiting}</p>
                  <p><strong className="text-gray-700">Check-In Date:</strong> {guest.check_in_date}</p>
                  <p><strong className="text-gray-700">Check-Out Date:</strong> {guest.check_out_date}</p>
                  <p><strong className="text-gray-700">Guest Type:</strong> {guest.user_type}</p>
                  <p><strong className="text-gray-700">NID:</strong> {guest.nid}</p>
                  <p><strong className="text-gray-700">Email:</strong> {guest.email}</p>
                  <p><strong className="text-gray-700">Total Persons:</strong> {guest.total_person}</p>
                  <p><strong className="text-gray-700">Total Days:</strong> {guest.total_days}</p>
                  <p><strong className="text-gray-700">Total Rental Price:</strong> {guest.total_rental_price}</p>
                </div>
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