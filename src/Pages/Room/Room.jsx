import axios from "axios"
import {useEffect, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Details from "./Details";
import { Link } from "react-router-dom";
import {baseurl} from '../../BaseURL'


const Room = () => {
    const [ roomlist, SetRoomlist ]= useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [newRoom, setNewRoom] = useState({
      room_name: '',
      room_description: '',
      room_type: 'One Bed',
      availability_status: 'Vacant',
  });

      console.log(newRoom)

    const handleDetailsClick = (room) => {
      setSelectedRoom(room); // Set the selected room
      setShowDetails(true); // Show details
    };

    const handleBookClick = (room) => {
      setSelectedRoom(room); // Set the selected room
    };
  
    const handleCloseDetails = () => {
      setShowDetails(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try{

                const response =  await axios.get(baseurl+'/room/');
                SetRoomlist(response.data);
            }

            catch (error) {
                console.error('Error fetching data:', error);
              }
        }

        fetchData()
    }, []);


    // Handle input change for the new room form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // Submit the new room form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await axios.post(
      `${baseurl}/room/`,
        newRoom,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token
            "Content-Type": "application/json",
          },
        }
      );

      // Update the room list with the newly added room
      SetRoomlist((prev) => [...prev, response.data]);

      setNewRoom({
        room_name: "",
        room_description: "",
        room_type : "",
        availability_status:""
      });

      setShowForm(false); 
      alert("Room Added Successfully");
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

    useEffect(() => {
        console.log("Acessed")
        console.log(roomlist);
      }, [roomlist]); 

    return (
        <div className="container mx-auto p-4 px-4 lg:px-12">
            <div className="flex justify-start mb-0">
                <button  onClick={() => setShowForm(!showForm)} className="bg-gradient-to-r from-blue-500 to-blue-700  text-white font-semibold font-sans py-2 px-4 rounded">Add New Room</button>
            </div>

            <div className="absolute bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg flex justify-end mb-6 rounded-lg">
            {/* Show the form if showForm is true */}
            {showForm && (
                <form onSubmit={handleSubmit}  className="mb-6 p-4">
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-sm">
                    Room Name
                    </label>
                    <input
                    type="text"
                    name ="room_name"
                    value={newRoom.room_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-1 border rounded "
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-sm" >
                    Room Description
                    </label>
                    <input
                    type="text"
                    name ="room_description"
                    value={newRoom.room_description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-1 border rounded"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-sm">
                    Room Type
                    </label>
                    <select
                    type="text"
                    name ="room_type"
                    value={newRoom.room_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-1 border text-sm rounded"
                    required
                    >
                   <option value="One Bed">One Bed</option>
                   <option value="Two Beds">Two Beds</option>
                  </select>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-sm">
                    Availability Status
                    </label>
                    <select
                    name ="availability_status"
                    value={newRoom.availability_status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-1 border rounded text-sm"
                    required
                    >
                    <option value="Vacant">Vacant</option>
                    <option value="Occupied">Occupied</option>
                    <option value="Needs clean">Needs clean</option>
                    <option value="Needs verify">Needs verify</option>
                    <option value="Locked">Locked</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-teal-600 to-blue-700 text-white text-sm font-semibold py-2 w-full rounded"
                >
                    Add Room
                </button>
                </form>
                )}
           </div>


           <h2 className="relative text-xl font-bold text-center mb-6">Room List</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {roomlist.map((room) => (
                   
                    <div key={room.id} className="bg-gray-200 p-4 rounded-lg shadow-md border-2 border-gray-300">
                    <h2 className="text-2xl font-bold text-center mb-4">{room.room_name}</h2>
                    <div className="text-center mb-4">
                        <span className="text-lg font-semibold"> বেডঃ {room.room_type}</span>
                    </div>
                    <div className="flex justify-center">
                    <button
                    className={`text-sm text-white font-bold py-2 px-4 rounded mr-4 ${
                        room.availability_status === 'Occupied'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-700' // Blue gradient for "Occupied"
                        : room.availability_status === 'Needs clean'
                        ? 'bg-gradient-to-r from-red-500 to-red-700' // Black gradient for "Needs clean"
                        : room.availability_status === 'Needs verify'
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' // Yellow gradient for "Needs verify"
                        : room.availability_status === 'Locked'
                        ? 'bg-gradient-to-r from-gray-400 to-gray-500' // Gray gradient for "Locked"
                        : 'bg-gradient-to-r from-green-500 to-green-700' // Green gradient as default
                    }`}
                    disabled={room.availability_status === 'Locked'} // Disable button if status is "Locked"
                    >
                    {room.availability_status}
                    </button>
                    </div>
                    <div className="flex justify-center pt-2 space-x-2">
                        <button 
                         onClick={() => handleDetailsClick(room)}
                        className="hover:bg-gray-400 hover:text-white text-black text-black text-sm font-semibold py-2 px-4 rounded border border-black">
                          Details 
                        </button>
                        
                        <Link
                          onClick={() => handleBookClick(room)}
                          to="/book"
                          state={{ room }} // Pass the room object as state
                          className="hover:bg-gray-400 hover:text-white text-black text-sm font-semibold py-1 px-4 rounded border border-black flex items-center justify-center"
                        >
                          Book <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>

                    </div>
                ))}
            </div>

            {/* Conditionally render Details component */}
            {showDetails && selectedRoom && (
                <Details onClose={handleCloseDetails} room={selectedRoom} />
            )}

            {/* Conditionally render Details component */}
            {/* {showBookForm && selectedRoom && (
                <Book onClose={handleCloseDetails} room={selectedRoom} setshowBookForm={setshowBookForm}/>
            )} */}

        </div>
    );
};

export default Room;