import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

const CheckoutSummary = () => {
    const location = useLocation();
    const { checkoutsummary, guest } = location.state || {};

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        const content = document.getElementById('content-to-pdf');
        // Hide the download button
        const downloadButton = document.getElementById('download-pdf-button');
        downloadButton.style.display = 'none';

        doc.html(content, {
            callback: function (doc) {
                doc.save('booking_invoice.pdf');
                downloadButton.style.display = 'block';
            },
            x: 5,
            y: 5,
            width: 180,
            windowWidth: 650,
        });
    }

    if (!checkoutsummary) {
        return <div>No data available.</div>;
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">

            <div id="content-to-pdf" className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-700">Circuit House, jashore</h1>
                    <h2 className="text-lg font-medium text-gray-600">Room Booking Invoice</h2>
                    <p className="text-sm text-gray-500">Jashore, Khulna, Bangladesh</p>
                    <p className="text-sm text-gray-500">Phone: 02477762486| Email: chjashore@gmail.com</p>
                </div>

                {/* Grid Layout for Guest Details and Additional Info */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="ml-2">
                        <h3 className="text-lg font-bold text-gray-700 mb-4">Guest Details</h3>
                        <div className="space-y-2 text-base">
                            <p><strong className="text-gray-700 font-semibold">Guest Name</strong> <span className="ml-7 ">: {guest.name}</span></p>
                            <p><strong className="text-gray-700 font-semibold">Room Name:</strong><span className="ml-7">: {guest.room_name}</span></p>
                            <p><strong className="text-gray-700 font-semibold">Check-In Date</strong><span className="ml-5 mr-1">: </span>
                                {new Date(guest.check_in_date ).toLocaleString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                                })}
                            </p>

                            <p><strong className="text-gray-700 font-semibold">Check-Out Date</strong><span className="ml-2 mr-1">:</span>
                                {new Date(guest.check_out_date).toLocaleString("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                })}
                            </p>

                            <p><strong className="text-gray-700 font-semibold">Total Persons</strong><span className="ml-7">: {guest.total_person}</span></p>
                            <p><strong className="text-gray-700 font-semibold">Total Days</strong><span className="ml-12">: {guest.total_days}</span></p>
                        </div>
                    </div>

                    {/* Additional Payment Info */}
                    <div className="ml-2 lg:ml-0">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 ">Payment Information</h3>
                        <div className="space-y-2 text-base">
                            <p><strong className="text-gray-700 font-semibold">Payment Status</strong><span className="ml-3">: {checkoutsummary.payment_status}</span></p>
                            <p><strong className="text-gray-700 font-semibold">Bill ID</strong><span className="ml-20">: {checkoutsummary.bill_id ? checkoutsummary.bill_id : "345678"} </span></p>
                            <p><strong className="text-gray-700 font-semibold">Bill By</strong><span className="ml-20">: ---</span></p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-700  p-2">Payment Details</h3>
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
                                <td className="px-4 py-1 text-right text-gray-800">{checkoutsummary.total_rental_cost}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-1 text-gray-800">Total Food Price</td>
                                <td className="px-4 py-1 text-right text-gray-800">{checkoutsummary.total_food_cost}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-1 text-gray-800">Total Other Costs</td>
                                <td className="px-4 py-1 text-right text-gray-800">{checkoutsummary.total_other_cost}</td>
                            </tr>
                            <tr className="border-b bg-gray-100">
                                <td className="px-4 py-1 text-gray-800 font-semibold">Grand Total</td>
                                <td className="px-4 py-1 text-right text-gray-800 font-semibold">{checkoutsummary.grand_total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Button for Downloading PDF */}
                <div className="mt-8 flex justify-center">
                    <button
                        id="download-pdf-button"
                        onClick={handleDownloadPDF}
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600"
                    >
                        Download PDF
                </button>
                </div>
            </div>
        </div>


    );
};


export default CheckoutSummary;
