import { useLocation  } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { jsPDF } from "jspdf";
import AxiosInstance from "../../Components/Axios";

const Checkout = () => {

    const location = useLocation();
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
              const response = await AxiosInstance.post('/checkout/', { guest_id: guest.id, paymentStatus});
              // console.log(response.data)
              // console.log(response.data)
              // console.log(response.data)
              setCheckOutSummary(response.data)
        
              // Generate the PDF invoice
              generatePDFInvoice(guest, checkoutsummary);
        
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


          const generatePDFInvoice = (guest, checkoutsummary) => {
            const doc = new jsPDF();
        
            // Title Section
            doc.setFontSize(22);
            doc.setTextColor(40, 40, 40);
            doc.text("Circuit House", 105, 20, { align: "center" });
            doc.setFontSize(16);
            doc.text("Room Booking Invoice", 105, 30, { align: "center" });
            doc.setFontSize(10);
            doc.text("123 Main Street, Dhaka, Bangladesh", 105, 35, { align: "center" });
            doc.text("Phone: +880-123-456-789 | Email: info@circuithouse.com", 105, 40, { align: "center" });
        
            // Line Separator
            doc.setDrawColor(0, 0, 0);
            doc.line(10, 45, 200, 45);
        
            // Guest Details Section
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text("Guest Information", 10, 55);
            doc.setFontSize(10);
            doc.text(`Guest Name: ${guest.name}`, 10, 65);
            doc.text(`Room Name: ${guest.room_name}`, 10, 70);
            doc.text(`Check-In Date: ${guest.check_in_date}`, 10, 75);
            doc.text(`Check-Out Date: ${guest.check_out_date}`, 10, 80);
            doc.text(`Total Persons: ${guest.total_person}`, 10, 85);
            doc.text(`Total Days: ${guest.total_days}`, 10, 90);
        
            // Line Separator
            doc.line(10, 95, 200, 95);
        
            // Payment Details Section
            doc.setFontSize(12);
            doc.text("Payment Details", 10, 105);
            doc.setFontSize(10);
        
            // Add a Table for Costs
            let startY = 115;
            const tableData = [
                ["Description", "Amount (BDT)"],
                ["Total Rental Price", checkoutsummary.total_rental_cost ],
                ["Total Food Price", checkoutsummary.total_food_cost ],
                ["Total Other Costs", checkoutsummary.total_other_cost ],
                ["Grand Total", checkoutsummary.grand_total ]
            ];
            
            // Iterate through tableData and ensure values are strings
            tableData.forEach((row, index) => {
                const [description, amount] = row;
            
                // Convert amount to a string with 2 decimal places if it’s a number
                const amountText = typeof amount === "number" ? amount.toFixed(2) : `${amount}`;
            
                // Add text to the PDF
                doc.text(description, 10, startY + index * 7);
                doc.text(amountText, 150, startY + index * 7, { align: "right" });
            });
            
        
            // Footer Section
            doc.setFontSize(10);
            doc.setTextColor(100);
            doc.text("Thank you for staying with us!", 105, 250, { align: "center" });
            doc.text("This is a system-generated invoice and does not require a signature.", 105, 260, { align: "center" });
        
            // Save the PDF
            doc.save(`Invoice_${guest.name}.pdf`);
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