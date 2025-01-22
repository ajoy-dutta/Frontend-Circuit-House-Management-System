import { Link } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";
import img from "../../assets/Slider/Jessore Road_01.jpg";
import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";

const Media = () => {
  const { user } = useUser();
  const [mediaData, setMediaData] = useState([]);  // Corrected state initialization

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await AxiosInstance.get("/media/");
        setMediaData(response.data);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    fetchEvents();
  }, []);
  
  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover", // Ensures the image covers the full area
          backgroundPosition: "center", // Centers the image within the div
          backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Discover Moments, Captured in Time</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      
      {user && (
        <div className="flex justify-end p-6 items-end">
          <Link
            to="/addMedia"
            className="btn btn-outline hover:bg-[#3E5879] border-[#3E5879]"
          >
            Add Media
          </Link>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 text-black lg:grid-cols-3 gap-4">
        {mediaData.map((item) => (
          <div key={item.id} className="bg-[#F5EFE7] rounded-none shadow-lg">  {/* Use unique key */}
            <div className="">
            {item.image ? (
                  <img src={item.image} alt="media" className="w-full h-64 object-cover" />
                ) : item.video ? (
                  <video controls className="w-full h-64 object-cover">
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              <div className="px-4 py-2">
                <h2 className="card-title">{item.title}</h2> {/* Use media title */}
                <div className="flex items-end justify-end">
                  <Link className="btn bg-[#213555] hover:bg-[#3E5879] text-white btn-xs px-0 rounded-full w-[80px]">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Media;
