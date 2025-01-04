import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import AxiosInstance from "../../Components/Axios";


const UpdateDetails = ({guest,roomlist,toggleUpdate}) => {
   
    const [showForm, setShowForm] = useState(false);
    const [guests, setGuests] = useState([]); // Array of guest data

    const [bookData, setBookData] = useState({
        name: guest.name,
        office: guest.office,
        designation: guest.designation,
        user_type: guest.user_type,
        nid: guest.nid,
        phone: guest.phone,
        email: guest.email,
        check_in_date: guest.check_in_date,
        check_out_date: guest.check_out_date,
        total_person: guest.total_person,
        motive_of_visiting: guest.motive_of_visiting,
        room:guest.room,
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
    const updateGuestData = (updatedGuest) => {
        // Find the index of the guest being updated
        const updatedGuests = guests.map((guest) => 
            guest.id === updatedGuest.id ? updatedGuest : guest
        );
        setGuests(updatedGuests);  // Update the state with the new guest data
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setLoading(true); 

        try {
    
         const response = await AxiosInstance.put(`/book/${guest.id}/`, bookData);
         updateGuestData(response.data);
          setBookData({
            name: "",
            office: "",
            designation:"",
            user_type:"",
            nid: "",
            phone: "",
            email:"",
            check_in_date:"",
            check_out_date:"",
            total_person:null,
            motive_of_visiting:"Visiting",
            room_id : ""
          });
    
          alert("Room Updated Successfully");
          toggleUpdate(null)
        } catch (error) {
            console.error("Error Book room:", error);
        }
    };


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
            {/* <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg"> */}

            <form
                onSubmit={handleSubmit}
                className="p-6 mb-4 rounded-lg bg-teal-50 w-1/2"
            >
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Update Booking Info</h3>

                {errorMessage && (
                    <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                )}

                {/* Guest Name */}
                <div className="mb-4 flex flex-row gap-2">

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
                    <div className="mb-4">
                        <label htmlFor="office" className="block font-semibold mb-2 text-sm">
                            Guest's Office
                        </label>
                        <input
                            id="office"
                            type="text"
                            name="office"
                            value={bookData.office}
                            onChange={handleChange}
                            placeholder="Enter guest name"
                            className="w-full px-4 py-1 border rounded text-sm"
                            
                        />
                    </div>
                    {/* Room Selection */}
                    <div className="mb-4">
                    <label htmlFor="room" className="block font-semibold mb-2 text-sm">
                    Room <span className="text-red-500">*</span>
                    </label>
                    <select
                    id="room"
                    name="room"
                    value={bookData.room}
                    onChange={handleChange}
                    className="w-full text-red text-bg-red px-4 py-1 border rounded text-sm"
                    required
                    >

                    {roomlist.map((room) => (
                        <option key={room.id} value={room.id}>
                                {room.room_name}
                        </option> 
                    ))}
                    </select>
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
                            <option value="Government Official">Government Official</option>
                            <option value="Reference">Reference</option>
                            <option value="Private Sector Employee">Private Sector Employee</option>
                            <option value="Others">Others</option>

                        </select>
                    </div>
                </div>

                {/* NID, Phone, and Email */}
                <div className="mb-4 flex flex-row gap-2">
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

                    <div className="flex-1">
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

                    <div className="flex-[2]">
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
                <div className="mb-4 grid grid-cols-2 gap-2">

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
                    </div>
                {/* <div  className=" flex justify-center items-center"> */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-700 text-white text-sm font-semibold py-2  rounded"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update Booking"}
                </button>
                {/* </div> */}

                <div className="mt-4 text-center">
                    <button
                        onClick={() => toggleUpdate()}
                        className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Close
                </button>
                </div>

            </form>
        </div>
    );
};


export default UpdateDetails;