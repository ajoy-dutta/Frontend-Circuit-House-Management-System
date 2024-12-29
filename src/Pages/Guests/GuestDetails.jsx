// const GuestDetails = ({ guest, toggleDetails }) => {
//     return (

//         <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Guest Details</h3>
//                 <table key={guest.id} className="table-auto w-full text-left">
//                     <tbody>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Guest Name:</td>
//                         <td>{guest.name}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Designation:</td>
//                         <td>{guest.designation}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Phone No:</td>
//                         <td>{guest.phone}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Room Name:</td>
//                         <td>{guest.room_name}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Motive of Visiting:</td>
//                         <td>{guest.motive_of_visiting}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Check-In Date:</td>
//                         <td>
//                         {new Date(guest.check_in_date).toLocaleString("en-GB", {
//                         day: "2-digit",
//                         month: "2-digit",
//                         year: "numeric",
//                         hour: "numeric",
//                         minute: "numeric",
//                         hour12: true,
//                         })}
//                     </td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Check-Out Date:</td>
//                         <td>{guest.check_out_date}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Guest Type:</td>
//                         <td>{guest.user_type}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">NID:</td>
//                         <td>{guest.nid}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Email:</td>
//                         <td>{guest.email}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Total Persons:</td>
//                         <td>{guest.total_person}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Total Days:</td>
//                         <td>{guest.total_days}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Total Rental Cost:</td>
//                         <td>{guest.total_rental_price}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Total Food Cost:</td>
//                         <td>{guest.total_food_cost}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Total Other Cost:</td>
//                         <td>{guest.total_other_cost}</td>
//                     </tr>
//                     <tr>
//                         <td className="text-gray-700 font-semibold">Grand Total:</td>
//                         <td>
//                         {Number(guest.total_rental_price) +
//                             Number(guest.total_food_cost) +
//                             Number(guest.total_other_cost)}
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>

//             <div className="mt-4">
//                 <button
//                 onClick={() => toggleDetails(null)}
//                 className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                 Close
//                 </button>
//             </div>
//         </div>
//     </div>
//     )
//   };


//   export default GuestDetails;