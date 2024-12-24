import { useLocation  } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { baseurl } from "../../BaseURL";
import { jsPDF } from "jspdf";

const Checkout = () => {

    const location = useLocation();
    const { guest } = location.state || {};
    const [paymentStatus, setPaymentStatus] = useState("Pending"); 

    const handlePaymentStatusChange = (event) => {
        setPaymentStatus(event.target.value);
      };

      console.log(paymentStatus)

      const handleCheckout = async () => {
            const isConfirmed = window.confirm(`Are you sure you want to check out ${guest.name}?`);
            if (!isConfirmed) return;
        
            try {
              await axios.post(`${baseurl}/checkout/`, { guest_id: guest.id, paymentStatus});
        
              // Generate the PDF invoice
              generatePDFInvoice(guest);
        
              alert(`Guest ${guest.name} has been successfully checked out.`);
        
              // Notify parent component to update guest list
            //   if (onCheckoutSuccess) {
            //     onCheckoutSuccess(guest.id);
            //   }
            } catch (error) {
              console.error("Error during checkout:", error);
              alert("Failed to check out the guest. Please try again.");
            }
          };
    

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 p-4 lg:p-8">
           <div className="bg-white p-6 rounded-lg w-full max-w-lg ml-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Guest Details</h3>
                <div key={guest.id} className="space-y-2">
                  <p><strong className="text-gray-700">Guest Name:</strong> {guest.name}</p>
                  <p><strong className="text-gray-700">Phone No:</strong> {guest.phone}</p>
                  <p><strong className="text-gray-700">Room Name:</strong> {guest.room_name}</p>
                  <p><strong className="text-gray-700">Check-In Date:</strong> {guest.check_in_date}</p>
                  <p><strong className="text-gray-700">Check-Out Date:</strong> {guest.check_out_date}</p>
                  <p><strong className="text-gray-700">Guest Type:</strong> {guest.user_type}</p>
                  <p><strong className="text-gray-700">NID:</strong> {guest.nid}</p>
                  <p><strong className="text-gray-700">Email:</strong> {guest.email}</p>
                  <p><strong className="text-gray-700">Total Persons:</strong> {guest.total_person}</p>
                  <p><strong className="text-gray-700">Total Days:</strong> {guest.total_days}</p>
                  <p><strong className="text-gray-700">Total Rental Price:</strong> {guest.total_rental_price}</p>
                </div>
              <div className="mt-4">
            </div>
          </div>

          <div className="mt-4">
                <div>
                    <p className="text-sm font-bold">Payment Status:</p>
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