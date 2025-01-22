import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AxiosInstance from "../../Components/Axios";
import { useUser } from "../../Provider/UserProvider";

const TourismCalendar = () => {
  const { user } = useUser();
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: selectedDate,
    picture: null,
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await AxiosInstance.get("/calender/");
        setEvents(response.data);
        console.log("Fetched events:", response.data);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (date) => {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset()); 
    return newDate.toISOString().split("T")[0];
  };
  

  const getEventsForDate = (date) => {
    const formattedDate = formatDate(date);
    const filteredEvents = events.filter((event) => {
      const eventDate = formatDate(event.date); 
      return eventDate === formattedDate;
    });
    return filteredEvents;
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
  
    try {
      const formattedDate = formatDate(newEvent.date);
      const formData = new FormData();
      formData.append("title", newEvent.title);
      formData.append("description", newEvent.description);
      formData.append("date", formattedDate);
  
      if (newEvent.picture) {
        formData.append("picture", newEvent.picture);
      }
  
      const response = await AxiosInstance.post("/calender/", formData)
     
  
      setEvents((prevEvents) => [...prevEvents, response.data]);
   
      setIsModalOpen(false); 
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };
  

  return (
    <div className="flex items-start justify-between  mt-8 mb-8">
      {/* Left Section: Calendar */}
      <div className="w-1/4 ml-6">
        <h1 className="text-xl font-semibold">Tourism Calendar</h1>
        <Calendar
        className="text-sm w-full border border-red-300"
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={({ date }) => {
            const dailyEvents = getEventsForDate(date);
            return dailyEvents.length > 0 ? (
              <span className="text-green-600 text-xs flex">
                ({dailyEvents.length} Event{dailyEvents.length > 1 ? "s" : ""})
              </span>
            ) : null;
          }}
        />
        {user &&(<button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 p-2 bg-green-500 text-white rounded-md mt-6"
        >
          Add New Event
        </button>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-200 p-4 rounded-md w-1/3">
            <h2 className="text-xl font-semibold">Add New Event</h2>
            <form onSubmit={handleAddEvent}>
              <div className="mb-4">
                <label htmlFor="title" className="block">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formatDate(newEvent.date)}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, date: new Date(e.target.value) })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="picture" className="block">
                    Event Picture
                </label>
                <input
                    type="file"
                    id="picture"
                    name="picture" // Make sure you set the 'name' attribute
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setNewEvent({ ...newEvent, picture: e.target.files[0] })}
                />
                </div>


              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-400 text-white p-2 rounded-md"
                >
                  Add Event
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white p-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Right Section: Events Grid */}
      <div className="w-2/3 mr-8 bg-[#84A7E0] p-4 rounded-md shadow-md text-[#3E5879]">
        <h2 className="text-xl text-center font-semibold mb-4">
          Events on {selectedDate.toDateString()}
        </h2>
        {getEventsForDate(selectedDate).length === 0 ? (
          <p>No events on this date.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {getEventsForDate(selectedDate).map((event) => (
              <div
                key={event.id}
                className="p-4 bg-[#ACC2E2] border border-gray-300 rounded-md"
              >
                <div className="text-center">
                  <strong>{event.title}</strong>
                </div>
                <br />
                {/* <span className="p-4">{event.date}</span> */}
                <br />
                <img
                  src={event.picture}
                  alt={event.title}
                  className="w-full h-auto object-cover rounded-md mb-2"
                />
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    
  );
};

export default TourismCalendar;
