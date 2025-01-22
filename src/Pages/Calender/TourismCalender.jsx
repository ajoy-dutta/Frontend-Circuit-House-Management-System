import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AxiosInstance from "../../Components/Axios";
import { useUser } from "../../Provider/UserProvider";
import { RxCross2 } from "react-icons/rx";
import "./styles.css"
import 'react-calendar/dist/Calendar.css';


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

  const [selectedMedia, setSelectedMedia] = useState(null); // For storing selected media for the modal
  const [isModal, setIsModal] = useState(false);

  const openModal = (item) => {
    setSelectedMedia(item);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setSelectedMedia(null);
  };


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
    <div className="w-full md:max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
      {/* Left Section: Calendar */}
      <div className="w-1/4 ml-6">
        <h1 className="text-xl font-semibold">Tourism Calendar</h1>
        <Calendar
          className="text-sm w-full"
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={({ date }) => {
            const dailyEvents = getEventsForDate(date);
            return dailyEvents.length > 0 ? (<span className="bg-green-700 flex flex-col items-center justify-center ml-3  p-1 h-[4px] w-[4px] rounded-full text-xs"></span>): null;
          }}
        />
        {user && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="mb-4 p-2 bg-green-500 text-white rounded-md mt-6"
          >
            Add New Event
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-200 p-10 rounded-md w-1/3">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Add New Event</h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="btn btn-square btn-sm bg-red-500  text-white p-2 rounded-md"
              >
                <RxCross2 />
              </button>
            </div>
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
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, picture: e.target.files[0] })
                  }
                />
              </div>

              <div className="flex items-center justify-center ">
                <button
                  type="submit"
                  className="bg-blue-400 text-white p-2 w-full rounded-md"
                >
                  Confirm
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {getEventsForDate(selectedDate).map((event) => (
              <div
                key={event.id}
                className="p-4 bg-[#ACC2E2] border border-gray-400"
              >
                
          
                <img
                  src={event.picture}
                  alt={event.title}
                  className="w-full h-auto object-cover mb-2"
                />
                <div className="text-start">
                  <strong>{event.title}</strong>
                </div>
                 <div className="flex justify-end">
                  <button
                    onClick={() => openModal(event)}
                    className="btn bg-[#213555] hover:bg-[#3E5879] text-white btn-xs px-4 rounded-full"
                  >
                    Details
                  </button>
                </div>
                {/* <p>{event.description}</p> */}
              </div>
            ))}
            
        {isModal && selectedMedia && (
          <div className="modal modal-open" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold">{selectedMedia.title}</h3>
              <p className="py-4 text-justify">{selectedMedia.description}</p>
              <div className="modal-action">
                <button onClick={closeModal} className="btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TourismCalendar;
