import { useUser } from "../../Provider/UserProvider"; // Import the custom hook
import { baseurl } from "../../BaseURL";

const Profile = () => {
  const { user, loading, error } = useUser(); // Access user data from context

  // Remove "/api" from the end of the baseurl
  const adjustedBaseurl = baseurl.replace(/\/api$/, "");
  
  // Use adjustedBaseurl in the image source
  <img
    src={`${adjustedBaseurl}${user?.profile_picture}`}
    alt="Profile"
    className="w-full h-full object-cover"
  />;
  
  if (loading) {
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div className="relative flex justify-center items-center mt-6">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-blue-400 p-6 text-center">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white">
        <img
          src={`${adjustedBaseurl}${user?.profile_picture}`}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

          <h2 className="mt-4 text-white text-xl font-semibold">{user?.username}</h2>
        </div>

        <div className="p-6 text-center space-y-2">
          <p className="text-gray-700 text-sm">
           <span className="font-medium">{user?.email}</span>
          </p>
          <p className="text-gray-700 text-sm">
            Role: <span className="font-medium">{user?.role}</span>
          </p>
          <p className="text-gray-700 text-sm">
            Status: <span className={user?.is_approved ? "text-green-500" : "text-red-500"}>{user?.is_approved ? "Approved" : "Not Approved"}</span>
          </p>
        </div>

        <div className="text-center pb-6">
          <button className="px-4 py-1 text-sm bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-200">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
