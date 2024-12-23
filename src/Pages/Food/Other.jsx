import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../../BaseURL";



const Other = () => {
  const [formData, setFormData] = useState({
    date: "",
    item: "",
    // Order_time: "Breakfast",
    price: "",
    room_name: "",
  });

  const [rooms, setRooms] = useState([]); // State to store rooms

  // Fetch room options from the backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${baseurl}/room/`); // Replace with your API endpoint
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error.response?.data || error.message);
      }
    };

    fetchRooms();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseurl}/other-cost/`, formData); // Send formData directly
      console.log("Success:", response.data);
      setFormData({
        date: "",
        item: "",
        // Order_time: "Breakfast",
        price: "",
        room_name: "",
      });
      
      alert(" Successfully added");

    } catch (error) {
      console.error("Error add food:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6  max-w-md mx-auto shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-4">Add additional item</h1>
      <div className="mb-4">
        <label htmlFor="room_name" className="block mb-1 font-medium">Room Name</label>
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
        <label htmlFor="date" className="block mb-1 font-medium">Date</label>
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
        <label htmlFor="food_menu" className="block mb-1 font-medium">Add Item</label>
        <input
          type="text"
          id="item"
          name="item"
          value={formData.item}
          onChange={handleInputChange}
          placeholder="Enter food menu"
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      

      <div className="mb-4">
        <label htmlFor="price" className="block mb-1 font-medium">Price</label>
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
