import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";
import { Link } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";
import { useUser } from "../../Provider/UserProvider";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";

const Room = () => {
  const [roomlist, setRoomlist] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { user } = useUser();
  const [newRoom, setNewRoom] = useState({
    room_name: '',
    room_type: 'One King Size Bed',
    availability_status: 'Vacant',
    room_category: 'Regular',
    building: 'New Building',
    floor: 'First Floor',
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/room/");
        setRoomlist(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (room) => {
    setSelectedRoom(room);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  // Handle input change for the new room form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(newRoom)


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosInstance.post('/room/', newRoom);

      setRoomlist((prev) => [...prev, response.data]);

      setNewRoom({
        room_name: '',
        room_type: '',
        availability_status: 'Vacant',
        room_category: '',
        building: '',
        floor: '',
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


  // Separate VVIP rooms
  const vvipRooms = roomlist.filter((room) => room.room_category === "VVIP");

  // Group non-VVIP rooms by building and floor
  const groupedRooms = roomlist
    .filter((room) => room.room_category !== "VVIP")
    .reduce((acc, room) => {
      const { building, floor } = room;
      if (!acc[building]) acc[building] = {};
      if (!acc[building][floor]) acc[building][floor] = [];
      acc[building][floor].push(room);
      return acc;
    }, {});

  return (
    <div className="container mx-auto p-4 px-4 lg:px-12">

      <div className="flex flex-cols-2 items-center gap-2 mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-500 text-white font-semibold font-sans py-2 px-4 rounded shadow-md border border-gray-100 hover:bg-gray-600"
        >
          Add New Room
        </button>
        <Link to="/dashboard/room-details">
          <button
            className="bg-gray-500 text-white font-semibold font-sans py-2 px-4 rounded shadow-md border border-gray-100 hover:bg-gray-600"
            onClick={handleDetailsClick}
          >
            All Room Details
          </button>
        </Link>
      </div>


      {showForm && (

        <div className="absolute bg-teal-50 shadow-lg p-4 flex justify-end mb-6 rounded-lg">

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-2">Room Name</label>
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
                <option value="Ground Floor">Ground Floor</option>
                <option value="First Floor">First Floor</option>
                <option value="Second Floor">Second Floor</option>
              </select>
            </div>

            <div className="flex justify-between gap-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold py-1 px-2 rounded hover:bg-blue-600"
              >
                Add Room
              </button>

              <button
                onClick={() => setShowForm(!showForm)}
                className="mt-2 px-2 py-2 bg-gray-300 rounded-lg text-sm hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}


      {/* Centered Heading */}
      <h2 className="text-2xl font-bold text-center mb-8 font-serif mt-4">Room List</h2>
      <div className="">

        {/* VVIP Rooms Section */}
        {vvipRooms.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-center ">
              <div className="text-center mb-4 bg-blue-100 p-2 rounded-lg shadow-md flex items-center justify-center w-full">
                <h3 className="text-xl font-semibold">VVIP Rooms</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 mt-4">
              {vvipRooms.map((room) => {
                let statusClass = "";
                switch (room.availability_status) {
                  case "Vacant":
                    statusClass = "bg-green-200";
                    break;
                  case "Occupied":
                    statusClass = "bg-blue-200";
                    break;
                  case "Needs Housekeeping":
                    statusClass = "bg-red-400";

                    break;
                  case "Locked":
                    statusClass = "bg-gray-200 cursor-not-allowed";
                    break;
                  case "Needs verify":
                    statusClass = "bg-yellow-200";

                    break;
                  case "Booked":
                    statusClass = "bg-orange-300";
                    break;
                  default:
                    statusClass = "bg-gray-200";
                }

                return (
                  <div key={room.id} className={`${statusClass} p-4 rounded-lg shadow-md border-2`}>
                    <h5 className="text-xl text-center font-bold">{room.room_name}</h5>
                    <p className="font-semibold">{room.room_type}</p>
                    <p className="font-semibold text-base">{room.availability_status}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex">
                        <Link
                          to="/dashboard/room_details"
                          state={{ room }}
                          im
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm flex items-center gap-1"
                        >
                          <CgDetailsMore />
                          <span>Details</span>
                        </Link>
                      </div>
                      {room.availability_status === "Vacant" ? (
                        <Link
                          to="/dashboard/book"
                          state={{ room }}
                          className="bg-teal-600 hover:bg-teal-700 text-white py-1 px-3 rounded text-sm flex items-center gap-1"
                        >
                          <span>Book</span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      ) : (
                          <button
                            disabled
                            className="bg-gray-300 text-gray-500 py-1 px-4 rounded text-sm cursor-not-allowed"
                          >
                            Book
                          </button>

                        )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Non-VVIP Rooms Grouped by Building and Floor */}
        {Object.keys(groupedRooms).map((building) => (
          <div key={building} className="mb-6 mt-12">


            {Object.keys(groupedRooms[building]).map((floor) => (
              <div key={floor} className="mt-2 mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center mb-4 bg-blue-100 p-2 rounded-lg shadow-md flex items-center justify-center w-full">
                    <h3 className="text-xl font-semibold">{building} ({floor})</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 mt-4">
                  {groupedRooms[building][floor].map((room) => {
                    let statusClass = "";
                    switch (room.availability_status) {
                      case "Vacant":
                        statusClass = "bg-green-200";
                        break;
                      case "Occupied":
                        statusClass = "bg-blue-200";
                        break;
                      case "Needs Housekeeping":
                        statusClass = "bg-red-400";

                        break;
                      case "Locked":
                        statusClass = "bg-gray-200 cursor-not-allowed";
                        break;
                      case "Needs verify":
                        statusClass = "bg-yellow-200";

                        break;
                      case "Booked":
                        statusClass = "bg-orange-300";
                        break;
                      default:
                        statusClass = "bg-gray-200";
                    }

                    return (
                      <div key={room.id} className={`${statusClass} p-4 rounded-lg shadow-md border-2`}>
                        <h5 className="text-xl text-center font-bold">{room.room_name}</h5>
                        <p className="font-semibold text-base">{room.room_type}</p>
                        <p className="font-semibold text-base">{room.availability_status}</p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex">
                            <Link
                              to="/dashboard/room_details"
                              state={{ room }}
                              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm flex items-center gap-1"
                            >
                              <CgDetailsMore />
                              <span>Details</span>

                            </Link>
                          </div>
                          {room.availability_status === "Vacant" ? (
                            <Link
                              to="/dashboard/book"
                              state={{ room }}
                              className="bg-teal-600 hover:bg-teal-700 text-white py-1 px-3 rounded text-sm flex items-center gap-1"
                            >
                              <span>Book</span>
                              <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                          ) : (
                              <button
                                disabled
                                className="bg-gray-300 text-gray-500 py-1 px-4 rounded text-sm cursor-not-allowed"
                              >
                                Book
                              </button>
                            )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Room;
