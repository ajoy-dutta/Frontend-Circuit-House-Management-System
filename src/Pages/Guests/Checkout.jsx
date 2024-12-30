import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from "../../Components/Axios";
import { useNavigate } from "react-router-dom";


const Checkout = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { guest } = location.state || {};
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [checkoutsummary, setCheckOutSummary] = useState([]);

  console.log(checkoutsummary)

  const handlePaymentStatusChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  console.log(paymentStatus)

  const handleCheckout = async () => {
    const isConfirmed = window.confirm(`Are you sure you want to check out ${guest.name}?`);
    if (!isConfirmed) return;

    try {
      const response = await AxiosInstance.post('/checkout/', { guest_id: guest.id, paymentStatus });
      setCheckOutSummary(response.data)

      navigate("/admin/checkout-summary", { state: { checkoutsummary: response.data, guest } });

      alert(`Guest ${guest.name} has been successfully checked out.`);

    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Failed to check out the guest. Please try again.");
    }
  };




  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 gap-2 p-4 lg:p-8">
      <div key={guest.id} className="bg-white p-6 rounded-lg w-full max-w-lg ml-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Guest Details</h3>
        <table className="table-auto w-full  text-left text-sm md:text-base lg:text-lg">
          <tbody>
            <tr>
              <td className="text-gray-700 font-semibold">Guest Name:</td>
              <td>{guest.name}</td>
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
              <td className="text-gray-700 font-semibold">Check-In Date:</td>
              <td>
                {new Date(guest.check_in_date + "T00:00:00").toLocaleString("en-GB", {
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
              <td>{guest.check_out_date}</td>
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
              <td className="text-gray-700 font-semibold">Total Rental Price:</td>
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
      </div>

      <div className="mt-4 lg:ml-0 sm:ml-14 ">
        <div>
          <p className="text-lg font-bold">Payment Status:</p>
          <select
            value={paymentStatus}
            onChange={handlePaymentStatusChange}
            className="mt-2 p-2 text-sm font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-4 px-4 py-2  bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Checkout <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>

      </div>
    </div>
  );
};

export default Checkout;