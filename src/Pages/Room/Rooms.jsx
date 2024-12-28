import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiEditFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { baseurl } from '../../BaseURL'; // Adjust the import for your base URL

const Rooms = () => {
  const [roomList, setRoomList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [newRoom, setNewRoom] = useState({
    room_name: '',
    room_description: '',
    room_type: 'One Bed',
    availability_status: 'Vacant',
  });

  // Fetch room data on component mount
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${baseurl}/room/`);
        setRoomList(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to update the room
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await axios.put(
        `${baseurl}/room/${selectedRoom.id}/`,
        newRoom,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setRoomList((prev) =>
        prev.map((room) => (room.id === selectedRoom.id ? response.data : room))
      );
      setShowForm(false);
      alert("Room updated successfully");
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  // Handle room deletion
  const handleDelete = async (roomId) => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      await axios.delete(`${baseurl}/room/${roomId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRoomList((prev) => prev.filter((room) => room.id !== roomId));
      alert("Room deleted successfully");
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  // Handle edit button click
  const handleEditClick = (room) => {
    setSelectedRoom(room);
    setNewRoom({
      room_name: room.room_name,
      room_description: room.room_description,
      room_type: room.room_type,
      availability_status: room.availability_status,
    });
    setShowForm(true);
  };

  return (
    <div className="container mb-12 mx-auto p-4 px-4 lg:px-12">
      <h2 className="relative text-2xl font-bold text-center mb-6">Room List</h2>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-teal-200">
            <th className="border-b px-4 py-2 text-left">SL</th>
            <th className="border-b px-4 py-2 text-left">Room Name</th>
            <th className="border-b px-4 py-2 text-left">Room Description</th>
            <th className="border-b px-4 py-2 text-left">Room Type</th>
            <th className="border-b px-4 py-2 text-left">Availability Status</th>
            <th className="border-b px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roomList.map((room, index) => (
            <tr key={room.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{room.room_name}</td>
              <td className="px-4 py-2">{room.room_description}</td>
              <td className="px-4 py-2">{room.room_type}</td>
              <td className="px-4 py-2">{room.availability_status}</td>
              <td className=" px-4 py-2">
                <button
                  onClick={() => handleEditClick(room)}
                  className="text-teal-600 hover:text-teal-800 mr-2"
                >
                  <RiEditFill></RiEditFill>
                </button>
                <button
                  onClick={() => handleDelete(room.id)}
                  className="text-red-600 hover:text-red-800"
                >
                 <RiDeleteBin5Fill></RiDeleteBin5Fill>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    {/* Modal for Editing Room */}
{showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-full overflow-auto">
      <h3 className="text-xl font-bold mb-4">Edit Room</h3>
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
          <label className="block font-bold mb-2">Room Description</label>
          <input
            type="text"
            name="room_description"
            value={newRoom.room_description}
            onChange={handleInputChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Room Type</label>
          <select
            name="room_type"
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
          <label className="block font-bold mb-2">Availability Status</label>
          <select
            name="availability_status"
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
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default Rooms;
