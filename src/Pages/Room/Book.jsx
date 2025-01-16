import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";


const Book = () => {

    const location = useLocation();
    const { state } = location;
    const room = state?.room;
    const navigate = useNavigate();

    console.log(room.id)
    const [bookData, setBookData] = useState({
        name: "",
        office:"",
        designation: "",
        user_type: "",
        nid: "",
        phone: "",
        email: "",
        check_in_date: "",
        check_out_date: "",
        total_person: null,
        motive_of_visiting: "Visiting",
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    console.log(bookData)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await AxiosInstance.post('/book/', { ...bookData, room: room.id, });

            setBookData({
                name: "",
                office:"",
                designation: "",
                user_type: "",
                nid: "",
                phone: "",
                email: "",
                check_in_date: "",
                check_out_date: "",
                total_person: null,
                motive_of_visiting: "Visiting"
            });



            alert("Room Booked Successfully");
            navigate("/guest-list");
        } catch (error) {
            console.error("Error Book room:", error);
        }
    };


    return (
        <div className="flex items-center justify-center mt-8 mb-8 ">
            <form
                onSubmit={handleSubmit}
                className="p-6 mb-4 rounded-lg bg-teal-50 lg:w-[90 px] w-[64 px]"
            >
                <h2 className="text-center font-semibold text-lg mb-8">Guest Booking</h2>

                {errorMessage && (
                    <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                )}

                {/* Guest Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-2 text-sm">
                        Guest Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={bookData.name}
                        onChange={handleChange}
                        placeholder="Enter guest name"
                        className="w-full px-4 py-1 border rounded text-sm"
                        required
                    />
                </div>

                <div className="mb-4 grid grid-cols-2 gap-2">
                <div className="">
                    <label htmlFor="office" className="block font-semibold mb-2 text-sm">
                        Office
                    </label>
                    <input
                        id="office"
                        type="text"
                        name="office"
                        value={bookData.office}
                        onChange={handleChange}
                        placeholder="Enter guest's office"
                        className="w-full px-4 py-1 border rounded text-sm"
                        
                    />
                </div>

                <div className="flex-1">
                    <label htmlFor="nid" className="block font-semibold mb-2 text-sm">
                        NID
                    </label>
                    <input
                        id="nid"
                        type="text"
                        name="nid"
                        value={bookData.nid}
                        onChange={handleChange}
                        placeholder="Enter National ID"
                        className="w-full px-4 py-1 border rounded text-sm"
                    />
                </div>

                </div>


                {/* Designation and Guest Type */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                    <div>
                        <label htmlFor="designation" className="block font-semibold mb-2 text-sm">
                            Designation
                </label>
                        <input
                            id="designation"
                            type="text"
                            name="designation"
                            value={bookData.designation}
                            onChange={handleChange}
                            placeholder="Enter designation"
                            className="w-full px-4 py-1 border rounded text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="user_type" className="block font-semibold mb-2 text-sm">
                            Guest Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="user_type"
                            name="user_type"
                            value={bookData.user_type}
                            onChange={handleChange}
                            className="w-full px-4 py-1 border rounded text-sm"
                            required
                        >
                            <option value="" disabled>
                                Select Guest Type
                    </option>
                    <option value="Government Official">Govt. Official(Existing/Retd.)</option>
                        {/* <option value="Reference">Reference</option> */}
                        <option value="Autonomous">Autonomous/Statutary Organization</option>
                        <option value="Private Sector Employee">Private Sector Employee/Others</option>

                        </select>
                    </div>
                </div>

                {/* Phone, and Email */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                   
                    <div >
                        <label htmlFor="phone" className="block font-semibold mb-2 text-sm">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={bookData.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                            className="w-full px-4 py-1 border rounded text-sm"
                            required
                        />
                    </div>

                    <div >
                        <label htmlFor="email" className="block font-semibold mb-2 text-sm">
                            Email
                    </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={bookData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className="w-full px-4 py-1 border rounded text-sm"
                        />
                    </div>
                </div>


                {/* Check-in and Check-out Dates */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                    <div>
                        <label htmlFor="check_in_date" className="block font-semibold mb-2 text-sm">
                            Check-in Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="check_in_date"
                            type="date"
                            name="check_in_date"
                            value={bookData.check_in_date}
                            onChange={handleChange}
                            className="w-full px-4 py-1 border rounded text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="check_out_date" className="block font-semibold mb-2 text-sm">
                            Check-out Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="check_out_date"
                            type="date"
                            name="check_out_date"
                            value={bookData.check_out_date}
                            onChange={handleChange}
                            className="w-full px-4 py-1 border rounded text-sm"
                            required
                        />
                    </div>
                </div>

                {/* Total Persons */}
                <div className="mb-4">
                    <label htmlFor="total_person" className="block font-semibold mb-2 text-sm">
                        Total Persons
                    </label>
                    <input
                        id="total_person"
                        type="number"
                        name="total_person"
                        value={bookData.total_person}
                        onChange={handleChange}
                        placeholder="Enter total number of persons"
                        className="w-full px-4 py-1 border rounded text-sm"
                        
                    />
                </div>

                {/* motive of Visiting */}
                <div className="mb-4">
                    <label htmlFor="motive" className="block font-semibold mb-2 text-sm">
                        Motive of Visiting
                </label>
                    <textarea
                        id="motive_of_visiting"
                        name="motive_of_visiting"
                        value={bookData.motive_of_visiting}
                        onChange={handleChange}
                        placeholder="Enter purpose of visit"
                        className="w-full px-4 py-1 border rounded text-sm"
                    ></textarea>
                </div>

                {/* <div  className=" flex justify-center items-center"> */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-700 text-white text-sm font-semibold py-2  rounded"
                    disabled={loading}
                >
                    {loading ? "Booking..." : "Confirm Book"}
                </button>
                {/* </div> */}

            </form>
        </div>
    );
};



export default Book;