import img1 from '../../assets/Conference/conference_1.jpg'
import img2 from '../../assets/Conference/conference_2.jpg'
import img3 from '../../assets/Conference/conference_3.jpg'

const ConferenceRoom = () => {
  const conferenceRooms = [
    {
      id: 1,
      title: 'Executive Conference Room',
      description: 'A spacious and fully equipped conference room suitable for executive meetings and presentations.',
      image: img1, // Replace with your image URL
    },
    {
      id: 2,
      title: 'Modern Meeting Space',
      description: 'Designed for collaborative sessions, our modern meeting room is equipped with the latest technology.',
      image: img2, // Replace with your image URL
    },
    {
      id: 3,
      title: 'Premium Boardroom',
      description: 'An elegant boardroom with a large table, premium seating, and state-of-the-art AV equipment.',
      image: img3, // Replace with your image URL
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Conference Rooms</h1>
      <p className="text-lg text-center text-gray-700 font-semibold mb-12">
        Discover our range of conference rooms designed to meet your business needs. Whether you need a space for
        collaboration, presentations, or executive meetings, we have the perfect room for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {conferenceRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-2 "
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {room.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{room.description}</p>
              <button className="bg-yellow-500 text-sm text-white font-medium px-2 py-2 rounded hover:bg-yellow-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceRoom;
