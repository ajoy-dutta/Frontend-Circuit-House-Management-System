import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";
import { useUser } from "../../Provider/UserProvider";

const Room = () => {
  const [roomlist, SetRoomlist] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [newRoom, setNewRoom] = useState({
    room_name: "",
    availability_status: "Vacant",
    room_type: "One King Size Bed",
    room_category: "Regular",
    building: "",
    floor: "",
  });
  const { user } = useUser();
  console.log(user);

  // console.log(newRoom);

  // const handleDetailsClick = (room) => {
  //   setSelectedRoom(room); // Set the selected room
  //   setShowDetails(true); // Show details
  // };

  const handleBookClick = (room) => {
    setSelectedRoom(room); // Set the selected room
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/room/");
        SetRoomlist(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosInstance.post("/room/", newRoom);

      // Update the room list with the newly added room
      SetRoomlist((prev) => [...prev, response.data]);

      setNewRoom({
        room_name: "",
        room_type: "One King Size Bed",
        room_category: "Regular",
        building: "",
        floor: "",
      });

      setShowForm(false);
      alert("Room Added Successfully");
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  useEffect(() => {
    // console.log("Accessed");
    // console.log(roomlist);
  }, [roomlist]);

  return (
    <div className="container mx-auto p-4 px-4 lg:px-12">
      {user && (
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add New Room
          </button>
          <Link to="/admin/room-details">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded">
              All Room Details
            </button>
          </Link>
        </div>
      )}

      <div className="absolute bg-teal-50 shadow-lg flex justify-end mb-6 rounded-lg">
        {showForm && (
          <form onSubmit={handleSubmit} className="mb-6 p-4">
            <div className="mb-4 ">
              <label className="block font-bold mb-2 text-sm">Room Name</label>
              <input
                type="text"
                name="room_name"
                value={newRoom.room_name}
                onChange={handleInputChange}
                className="w-full px-4 py-1 border rounded"
                required
              />
            </div>


            <div className="mb-4">
              <label className="block font-bold mb-2 text-sm">
                Room Category
              </label>
              <select
                name="room_category"
                value={newRoom.room_category}
                onChange={handleInputChange}
                className="w-full px-4 py-1 border rounded"
                required
              >

                <option value="Regular">Regular</option>
                <option value="VIP">VIP</option>
                <option value="VVIP">VVIP</option>
              </select>
            </div>


            <div className="mb-4">
              <label className="block font-bold mb-2 text-sm">Room Type</label>
              <select
                name="room_type"
                value={newRoom.room_type}
                onChange={handleInputChange}
                className="w-full px-4 py-1 border text-sm rounded"
                required
              >
                <option value="One King Size Bed">One King Size Bed</option>
                <option value="Two King Size Beds">Two King Size Beds</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2 text-sm">
                Building
              </label>
              <select
                name="building"
                value={newRoom.building}
                onChange={handleInputChange}
                className="w-full px-4 py-1 border rounded text-sm"
                required
              >
                <option value="New Building">New Building</option>
                <option value="Old Building">Old Building</option>

              </select>
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2 text-sm">
                Floor
              </label>
              <select
                name="floor"
                value={newRoom.floor}
                onChange={handleInputChange}
                className="w-full px-4 py-1 border rounded text-sm"
                required
              >
                <option value="First Floor">First Floor</option>
                <option value="Second Floor">Second Floor</option>
                <option value="Third Floor">Third Floor</option>

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

      <h2 className="relative text-xl font-bold text-center mt-10 mb-6">Room List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {roomlist.map((room) => (
          <div
            key={room.id}
            className="bg-gray-200 p-4 rounded-lg shadow-md border-2 border-gray-300"
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              {room.room_name}
            </h2>
            <div className="text-center mb-4">
              <span className="text-lg font-semibold">
                Bed: {room.room_type}
              </span>
            </div>
            <div className="flex justify-center ml-5"> 
              <button
                className={`text-sm text-white font-bold py-2 px-4 rounded mr-4 cursor-default ${room.availability_status === "Occupied"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700"
                    : room.availability_status === "Booked"
                      ? "bg-gradient-to-r from-orange-500 to-orange-700"
                      : room.availability_status === "Needs Housekeeping"
                        ? "bg-gradient-to-r from-red-500 to-red-700"
                        : room.availability_status === "Needs verify"
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                          : room.availability_status === "Locked"
                            ? "bg-gradient-to-r from-gray-400 to-gray-500"
                            : "bg-gradient-to-r from-green-500 to-green-700"
                  }`}
                disabled={room.availability_status === "Locked"}
              >
                {room.availability_status}
              </button>
            </div>
            <div className="flex justify-center pt-2 space-x-2">
              <Link
                // onClick={() => handleDetailsClick(room)}
                to="/admin/room_details"
                state={{ room }}
                className="hover:bg-gray-400 hover:text-white text-black text-sm font-semibold py-2 px-4 rounded border border-black"
              >
                Details
              </Link>
              {user && (
                <>
                  {room.availability_status === "Vacant" ? (
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
                </>
              )}

            </div>
          </div>
        ))}
      </div>

      {showDetails && selectedRoom && (
        <Details onClose={handleCloseDetails} room={selectedRoom} />
      )}
    </div>
  );
};

export default Room;
