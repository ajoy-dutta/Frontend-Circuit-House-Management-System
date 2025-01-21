import { Link } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";
import img from "../../assets/Slider/Jessore Road_01.jpg";

const Media = () => {
  const { user } = useUser();
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
        <div className="bg-[#F5EFE7] rounded-none shadow-lg">
          <div className="">
            <img src={img} alt="media" className="w-full h-64 object-cover" />
            <div className="px-4 py-2">
              <h2 className="card-title">Media Title</h2>
              <div className="flex items-end justify-end">
                <Link className="btn bg-[#213555] hover:bg-[#3E5879] text-white btn-xs px-0 rounded-full w-[80px]">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-none shadow-lg">
          <div className="">
            <img src={img} alt="media" className="w-full h-64 object-cover" />
            <div className="px-4 py-2">
              <h2 className="card-title">Media Title</h2>
              <div className="flex items-end justify-end">
                <Link className="btn bg-[#213555] hover:bg-[#3E5879] text-white btn-xs px-0 rounded-full w-[80px]">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-none shadow-lg">
          <div className="">
            <img src={img} alt="media" className="w-full h-64 object-cover" />
            <div className="px-4 py-2">
              <h2 className="card-title">Media Title</h2>
              <div className="flex items-end justify-end">
                <Link className="btn bg-[#213555] hover:bg-[#3E5879] text-white btn-xs px-0 rounded-full w-[80px]">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
