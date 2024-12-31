
import { useUser } from "../../Provider/UserProvider"; // Import the custom hook

const Profile = () => {
  const { user, loading, error } = useUser(); // Access user data from context

  console.log(user)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container max-w-md my-[200px] mx-auto p-6 mb-8 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome, {user?.username}</h1>
        <p className="text-sm text-gray-600">Your Profile</p>
      </div>

      <div className="flex flex-col items-center mb-6">
        {user?.profile_picture && (
          <img
            src={user.profile_picture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        )}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-800">Email: {user?.email}</p>
          <p className="text-lg font-medium text-gray-800">Role: {user?.role}</p>
          <p className="text-lg font-medium text-gray-800">
            Status:{" "}
            <span className={user?.is_approved ? "text-green-500" : "text-red-500"}>
              {user?.is_approved ? "Approved" : "Not Approved"}
            </span>
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Edit Profile
            </button>
      </div>
    </div>

  );
};

export default Profile;
