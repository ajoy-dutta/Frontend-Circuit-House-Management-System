import { useState } from "react";
import AxiosInstance from "../../Components/Axios";
import { useNavigate } from "react-router-dom";

const AddMedia = ({setMediaData, setIsAddMediaModalOpen}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("Image");
  const [newMediadata, setnewMediadata] = useState({
    title: "",
    image: null,
    video: null,
    description: "",
    media_type: "Image",
  });

  const toggleDropdown = () => {
    setDropdownOpen((data) => !data);
  };

  const handleDropdown = (value) => {
    setInputValue(value);
    setnewMediadata((data) => ({
      ...data,
      media_type: value,
      image: "", // Reset media and video when switching types
      video: "",
    }));
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setnewMediadata((data) => ({
      ...data,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(setMediaData)
    console.log(setIsAddMediaModalOpen)

    const formData = new FormData();
    formData.append("title", newMediadata.title);
    formData.append("description", newMediadata.description);
    formData.append("media_type", newMediadata.media_type);

    if (newMediadata.media_type === "Image") {
      formData.append("image", newMediadata.image);
    } else if (newMediadata.media_type === "Video") {
      formData.append("video", newMediadata.video);
    }

    try {
      const response = await AxiosInstance.post("/media/", formData);
      console.log(response.data); 
      alert("Media uploaded successfully!");
      setMediaData((prevData) => [...prevData, response.data]);
      setIsAddMediaModalOpen(false);
      navigate("/media");
     
    } catch (error) {
      console.error("Error uploading media:", error.response || error.message);
    
      // Provide a clear error message to the user
      alert("Error uploading media. Please try again.");
    }
    
  };

  return (
    // <div className="bg-[#F5EFE7] bg-transparent flex justify-center items-center">
      <div className="bg-[#D8C4B6]  mx-auto my-2 max-w-3xl  rounded-lg shadow-lg p-6 hover:shadow-xl">
        <div className="flex flex-col px-6 mt-4">
          <h3 className="tracking-tight text-2xl py-2 font-bold text-[#213555]">
            Add Media
          </h3>
          <hr />
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#213555]" htmlFor="title">
                    Title
                  </label>
                  <textarea
                    className="flex h-20 w-full px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md"
                    placeholder="Enter Media Title"
                    id="title"
                    name="title"
                    value={newMediadata.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                {newMediadata.media_type === "Image" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#213555]" htmlFor="image">
                      Image File
                    </label>
                    <input
                      className="flex h-10 w-full px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md"
                      id="image"
                      name="image"
                      type="file"
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                {newMediadata.media_type === "Video" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#213555]" htmlFor="video">
                      Video File
                    </label>
                    <input
                      className="flex h-10 w-full px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md"
                      id="video"
                      name="video"
                      type="file"
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
              </div>
              <div className="space-y-4">
              <div className="space-y-2">
                  <label className="text-sm font-medium text-[#213555]" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="flex w-full h-20 px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md"
                    placeholder="Enter Description For Media"
                    id="description"
                    name="description"
                    value={newMediadata.description}
                    onChange={handleChange}
                    required  
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#213555]" htmlFor="type">
                    Media Type
                  </label>
                  <div className="relative w-full">
                    <div className="flex items-center border border-gray-300 rounded-md bg-gray-100">
                      <input
                        className="flex-grow h-10 px-3 py-2 text-sm bg-gray-100 placeholder-gray-500"
                        placeholder="Select Media Type"
                        value={inputValue}
                        readOnly
                        required
                      />
                      <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleDropdown}
                        className="px-3 cursor-pointer"
                      >
                        ▼
                      </div>
                    </div>
                    {dropdownOpen && (
                      <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <li
                          onClick={() => handleDropdown("Image")}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Image
                        </li>
                        <li
                          onClick={() => handleDropdown("Video")}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Video
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
               
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#213555] hover:bg-[#3E5879] text-white rounded-md transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    // </div>
  );
};

export default AddMedia;
