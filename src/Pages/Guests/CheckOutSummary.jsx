import { useLocation } from "react-router-dom";

const CheckoutSummary = () => {
    const location = useLocation();
    const { checkoutsummary, guest } = location.state || {};

    const handleDownloadPDF = () => {
       
        const downloadButton = document.getElementById("download-pdf-button");
        downloadButton.classList.add("hidden");

        const content = document.getElementById("content-to-pdf").outerHTML;

        try {
            const completeHTML = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Booking Invoice</title>
                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                    <style>
                        body {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            margin: 0;
                            background-color: #f3f4f6;
                        }

                    #content-to-pdf {
                        width: 100%;
                        max-width: 768px;
                        margin: auto;
                    }
                    /* Default font size */
                    * {
                        font-size: 1rem;
                    }
                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        * {
                            font-size: 0.875rem; /* Smaller font for tablets */
                        }
                    }
                    @media (max-width: 480px) {
                        * {
                            font-size: 0.75rem; /* Smaller font for mobile phones */
                        }
                    }
                    </style>
                </head>
                <body>${content}</body>
                </html>
            `;
            const blob = new Blob([completeHTML], { type: "text/html" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "booking_invoice.html";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } finally {
            downloadButton.classList.remove("hidden");
        }
    };

    if (!checkoutsummary) {
        return <div>No data available.</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
    <div
        id="content-to-pdf"
        className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full text-base sm:text-sm md:text-lg"
        style={{
            width: "100%",
            maxWidth: "768px",
            margin: "auto",
        }}
    >
        {/* Header Section */}
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-700">Circuit House, Jashore</h1>
            <h2 className="text-lg font-medium text-gray-600">Room Checkout Invoice</h2>
            <p className="text-sm text-gray-500">Jashore, Khulna, Bangladesh</p>
            <p className="text-sm text-gray-500">Phone: 02477762486 | Email: chjashore@gmail.com</p>
        </div>

        {/* Guest Details and Payment Info */}
        <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">Guest Details</h3>
                <div className="space-y-2">
                    <p><strong>Guest Name:</strong> {guest.name}</p>
                    <p><strong>Room Name:</strong> {guest.room_name}</p>
                    <p><strong>Check-In Date:</strong> {new Date(guest.check_in_date).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })}</p>
                    <p><strong>Check-Out Date:</strong> {new Date(guest.check_out_date).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })}</p>
                    <p><strong>Total Persons:</strong> {guest.total_person}</p>
                    <p><strong>Total Days:</strong> {guest.total_days}</p>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">Payment Information</h3>
                <div className="space-y-2">
                    <p><strong>Payment Status:</strong> {checkoutsummary.payment_status}</p>
                    <p><strong>Bill ID:</strong> {checkoutsummary.payment_id}</p>
                    <p><strong>Bill By:</strong> {checkoutsummary.bill_by}</p>
                </div>
            </div>
        </div>

        {/* Payment Details Table */}
        <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Payment Details</h3>
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left text-gray-600">Description</th>
                        <th className="px-4 py-2 text-right text-gray-600">Amount (BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-1">Total Rental Price</td>
                        <td className="px-4 py-1 text-right">{checkoutsummary.total_rental_cost}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-1">Total Food Price</td>
                        <td className="px-4 py-1 text-right">{checkoutsummary.total_food_cost}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-1">Total Other Costs</td>
                        <td className="px-4 py-1 text-right">{checkoutsummary.total_other_cost}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="px-4 py-1 font-semibold">Grand Total</td>
                        <td className="px-4 py-1 text-right font-semibold">{checkoutsummary.grand_total}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Footer Section */}
        <div className="mt-4">
            <p>Thank you for staying at Jashore Circuit House. You are always welcome at Joyful Jashore.</p>
            <p>
                Thanks and regards,<br />
                <strong>Nezarat Deputy Collector</strong><br />
                Cell: +8801733909222
            </p>
        </div>

        {/* Download Button */}
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

