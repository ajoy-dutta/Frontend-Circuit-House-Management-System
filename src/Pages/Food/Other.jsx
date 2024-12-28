import { useState, useEffect } from "react";
import AxiosInstance from "../../Components/Axios";

const Other = () => {
  const [formData, setFormData] = useState({
    date: "",
    item: "",
    price: "",
    room_name: "",
  });

  const [rooms, setRooms] = useState([]); // State to store available rooms
  const [guests, setGuests] = useState([]); // State to store guest data
  const [error, setError] = useState(""); // State for validation error

  useEffect(() => {
    // Fetch room options from backend
    const fetchRooms = async () => {
      try {
        const response = await AxiosInstance.get('/room/'); // Replace with your room endpoint
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error.response?.data || error.message);
      }
    };

    // Fetch guest data
    const fetchGuests = async () => {
      try {
        const response = await AxiosInstance.get('/book/'); // Replace with your guest API endpoint
        setGuests(response.data);
      } catch (error) {
        console.error("Error fetching guests:", error.response?.data || error.message);
      }
    };

    fetchRooms();
    fetchGuests();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate guest presence
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    const guestInRoom = guests.find(
      (guest) =>
        guest.room_name === formData.room_name && guest.check_out_date > today
    );

    if (!guestInRoom) {
      setError("No guest is present in the selected room.");
      return;
    }

    // Proceed to submit the form if validation passes
    try {
      await AxiosInstance.post('/other-cost/', formData); // Replace with your submission endpoint
      setFormData({
        date: "",
        item: "",
        price: "",
        room_name: "",
      });
      alert("Successfully added");
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-4">Add additional item</h1>

      {/* Error Message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-4">
        <label htmlFor="room_name" className="block mb-1 font-medium">Room Name*</label>
        <select
          id="room_name"
          name="room_name"
          value={formData.room_name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded"
          required
        >
          <option value="" disabled>Select a room</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.room_name}>
              {room.room_name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block mb-1 font-medium">Date*</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="item" className="block mb-1 font-medium">Add Item*</label>
        <input
          type="text"
          id="item"
          name="item"
          value={formData.item}
          onChange={handleInputChange}
          placeholder="Enter item name"
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block mb-1 font-medium">Price*</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Enter price"
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Other;
