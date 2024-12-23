// import axios from "axios";
// import { jsPDF } from "jspdf";
// import { baseurl } from "../../BaseURL";
// import PropTypes from "prop-types";

// const CheckoutHandler = ({ guest, onCheckoutSuccess }) => {
//   const handleCheckout = async () => {
//     const isConfirmed = window.confirm(`Are you sure you want to check out ${guest.name}?`);
//     if (!isConfirmed) return;

//     try {
//       // API call to update guest status
//       await axios.post(`${baseurl}/checkout/`, { guest_id: guest.id });

//       // Generate the PDF invoice
//       generatePDFInvoice(guest);

//       alert(`Guest ${guest.name} has been successfully checked out.`);

//       // Notify parent component to update guest list
//       if (onCheckoutSuccess) {
//         onCheckoutSuccess(guest.id);
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       alert("Failed to check out the guest. Please try again.");
//     }
//   };

//   const generatePDFInvoice = (guest) => {
//     const doc = new jsPDF();

//     // Title
//     doc.setFontSize(18);
//     doc.text("Room Booking Invoice", 20, 20);

//     // Guest Details
//     doc.setFontSize(12);
//     doc.text(`Guest Name: ${guest.name}`, 20, 40);
//     doc.text(`Designation: ${guest.designation}`, 20, 50);
//     doc.text(`Phone No: ${guest.phone}`, 20, 60);
//     doc.text(`Room Name: ${guest.room_name}`, 20, 70);
//     doc.text(`Motive of Visiting: ${guest.motive_of_visiting}`, 20, 80);
//     doc.text(`Check-In Date: ${guest.check_in_date}`, 20, 90);
//     doc.text(`Check-Out Date: ${guest.check_out_date}`, 20, 100);
//     doc.text(`Guest Type: ${guest.user_type}`, 20, 110);
//     doc.text(`NID: ${guest.nid}`, 20, 120);
//     doc.text(`Email: ${guest.email}`, 20, 130);
//     doc.text(`Total Persons: ${guest.total_person}`, 20, 140);
//     doc.text(`Total Days: ${guest.total_days}`, 20, 150);
//     doc.text(`Total Rental Price: ${guest.total_rental_price}`, 20, 160);

//     // Save the PDF
//     doc.save(`Invoice_${guest.name}.pdf`);
//   };

//   return (
//     <button
//       onClick={handleCheckout}
//       className="px-4 py-2 bg-green-500 text-white text-xs font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//     >
//       Checkout
//     </button>
//   );
// };

// CheckoutHandler.propTypes = {
//     guest: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       designation: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//       room_name: PropTypes.string.isRequired,
//       motive_of_visiting: PropTypes.string.isRequired,
//       check_in_date: PropTypes.string.isRequired,
//       check_out_date: PropTypes.string.isRequired,
//       user_type: PropTypes.string.isRequired,
//       nid: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       total_person: PropTypes.number.isRequired,
//       total_days: PropTypes.number.isRequired,
//       total_rental_price: PropTypes.number.isRequired,
//     }).isRequired,
//     onCheckoutSuccess: PropTypes.func.isRequired,
//   };

// export default CheckoutHandler;
