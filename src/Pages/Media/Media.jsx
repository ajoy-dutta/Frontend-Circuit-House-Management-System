
import { useUser } from "../../Provider/UserProvider";
import img from "../../assets/Slider/Jessore Road_01.jpg";
import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";
import AddMedia from "../../Pages/Media/AddMedia";

const Media = () => {
  const { user } = useUser();
  
  const [mediaData, setMediaData] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null); // For storing selected media for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMediaModalOpen, setIsAddMediaModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedMedia(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await AxiosInstance.get("/media/");
        setMediaData(response.data);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="bg-[#D8C4B6]">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl font-semibold italic">
              Discover Moments, Captured in Time
            </h1>
          </div>
        </div>
      </div>

      {user && (
        <div className="flex justify-end p-6 items-end">
          <button
            onClick={() => setIsAddMediaModalOpen(true)}
            className="btn btn-outline hover:bg-[#3E5879] border-[#3E5879]"
          >
            Add Media
          </button>
        </div>
      )}

      <div className="max-w-7xl py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaData?.map((item) => (
          <div key={item.id} className="bg-[#F5EFE7] rounded-none shadow-lg">
            <div>
              <div className="h-64">
                {item.image ? (
                  <img
                    src={item.image}
                    alt="media"
                    className="w-full h-64 object-cover"
                  />
                ) : item.video ? (
                  <video controls className="w-full h-64 object-cover">
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
              <div className="px-4 py-2">
                <h2 className="card-title">{item.title}</h2>
                <div className="flex justify-end">
                  <button
                    onClick={() => openModal(item)}
                    className="btn bg-[#213555] hover:bg-[#3E5879] text-white btn-xs px-4 rounded-full"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {isModalOpen && selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          role="dialog"
        >
          <div className="bg-white rounded-lg max-w-lg w-full mx-4 p-6 shadow-xl overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">{selectedMedia.title}</h3>
            <p className="text-justify mb-6">{selectedMedia.description}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-[#213555] hover:bg-[#3E5879] text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add Media Modal */}
      {isAddMediaModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          role="dialog"
        >
          <div className="bg-white rounded-lg max-w-3xl w-full mx-4 p-6 shadow-xl overflow-y-auto">
            <AddMedia setMediaData={setMediaData} setIsAddMediaModalOpen={setIsAddMediaModalOpen}/>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsAddMediaModalOpen(false)}
                className="px-4 py-2 bg-[#213555] hover:bg-[#3E5879] text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;

