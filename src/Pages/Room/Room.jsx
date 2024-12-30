import {useEffect, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Details from "./Details";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";


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

                const response =  await AxiosInstance.get('/room/');
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

      const response = await AxiosInstance.post('/room/', newRoom);
    
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

          <div className="flex flex-cols-2 items-center gap-2 mb-4">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gray-500 text-white font-semibold font-sans py-2 px-4 rounded shadow-md border border-gray-100 hover:bg-gray-600"
            >
              Add New Room
            </button>
            <Link to="/admin/room-details">
              <button
                className="bg-gray-500 text-white font-semibold font-sans py-2 px-4 rounded shadow-md border border-gray-100 hover:bg-gray-600"
              >
                All Room Details
              </button>
            </Link>
          </div>


            <div className="absolute bg-teal-50 shadow-lg flex justify-end mb-6 rounded-lg">
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
                    <option value="Booked">Booked</option>
                    <option value="Occupied">Occupied</option>
                    <option value="Needs clean">Needs clean</option>
                    <option value="Needs verify">Needs verify</option>
                    <option value="Locked">Locked</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold py-2 w-full rounded hover:bg-blue-600"
                >
                    Add Room
                </button>
                <button
              onClick={() => setShowForm(!showForm)}
              className="mt-2 px-3 py-2 bg-gray-300 rounded-lg text-sm hover:bg-gray-400"
            >
              Cancel
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
                          : room.availability_status === 'Booked'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-700' // Black gradient for "Needs clean"
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
                        className="hover:bg-gray-400 hover:text-white  text-black text-sm font-semibold py-2 px-4 rounded border border-black">
                          Details 
                        </button>
                        
                        {room.availability_status === 'Vacant' ? (
                        <Link
                          onClick={() => handleBookClick(room)}
                          to="/admin/book"
                          state={{ room }}
                          className="hover:bg-gray-400 hover:text-white text-black text-sm font-semibold py-1 px-4 rounded border border-black flex items-center justify-center"
                        >
                           Book <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="bg-gray-300 text-gray-500 text-sm font-semibold py-1 px-4 rounded border border-black flex items-center justify-center cursor-not-allowed"
                        >
                           Book <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>
                      )}
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