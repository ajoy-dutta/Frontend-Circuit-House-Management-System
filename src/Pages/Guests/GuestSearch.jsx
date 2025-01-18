import { useState } from "react";
import AxiosInstance from "../../Components/Axios";

const GuestSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await AxiosInstance.get(`/checkout/`, {
        params: {
          search: searchTerm, // Assuming the backend supports search filtering
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Search Guests
      </h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Name or Phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Display Search Results */}
      {searchResults.length > 0 ? (
        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                  SL
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                  Phone
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                  Room Name
                </th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((guest, index) => (
                <tr
                  key={guest.id}
                  className="border-t border-b hover:bg-blue-50"
                >
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">
                    {guest.guest.name}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">
                    {guest.guest.phone}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">
                    {guest.guest.room_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-700 text-center">No results found</p>
      )}
    </div>
  );
};

export default GuestSearch;
