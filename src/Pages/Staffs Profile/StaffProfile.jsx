import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";
import { useUser } from "../../Provider/UserProvider";

const StaffProfile = () => {
  const { user } = useUser();
  const [staffList, setStaffList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    picture: null,
    designation: "",
    phone:"",
    email: "",
    joining_date:"",
    ending_date: "",
  });

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/staff-profile/");
        setStaffList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(newItem).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await AxiosInstance.post("/staff-profile/", formData);
      setStaffList((prev) => [...prev, response.data]);
      setNewItem({
        name: "",
        picture: "",
        designation: "",
        phone: "",
        email: "",
        joining_date: "",
        ending_date: "",
      });
      
      setShowForm(false);
      alert("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };


  // Convert Arabic numerals to Bangla numerals
  const convertToBanglaNumerals = (number) => {
    const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return number
      .toString()
      .split("")
      .map((digit) => banglaNumerals[parseInt(digit)])
      .join("");
  };


  const convertToBanglaDate = (dateString) => {
    if (!dateString) return ""; // Handle empty dates
    const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return dateString
      .split("-") // Split date into parts (e.g., "YYYY-MM-DD")
      .reverse() // Reorder to DD-MM-YYYY
      .map((part) =>
        part
          .split("")
          .map((digit) => banglaNumerals[parseInt(digit)] || digit) // Convert to Bangla numerals
          .join("")
      )
      .join("-"); // Join the parts back with the separator
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setNewItem((prev) => ({
        ...prev,
        [name]: files[0], // File input
      }));
    } else {
      setNewItem((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container mx-auto my-10 p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        {user && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add New
          </button>
        )}
      </div>

      {showForm && (
        <div className="fixed top-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-2xl max-h-[80vh] overflow-y-auto shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center">Add New Record</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label className="block font-semibold mb-1">Name*</label>
                <input
                    type="text"
                    name="name"
                    value={newItem.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                />
                </div>
                <div className="mb-3">
                <label className="block font-semibold mb-1">Picture</label>
                <input
                    type="file"
                    name="picture"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    accept="image/*"
                />
                </div>
                <div className="mb-3">
                <label className="block font-semibold mb-1">Designation*</label>
                <input
                    type="text"
                    name="designation"
                    value={newItem.designation}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                />
                </div>
                <div className="mb-3">
                <label className="block font-semibold mb-1">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={newItem.phone}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                />
                </div>
                <div className="mb-3">
                <label className="block font-semibold mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    value={newItem.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                />
                </div>
                <div className="mb-3">
                <label className="block font-semibold mb-1">Joining Date</label>
                <input
                    type="date"
                    name="joining_date"
                    value={newItem.joining_date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                />
                </div>
                <div className="mb-3">
                <label className="block font-semibold mb-1">Ending Date</label>
                <input
                    type="date"
                    name="ending_date"
                    value={newItem.ending_date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                />
                </div>
                <div className="flex justify-end space-x-2">
                <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-3 py-2 bg-gray-300 rounded-lg text-sm"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
                >
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
        )}


      {/* Staff Table */}
      <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Staff Profiles</h2>  
      </div>

      <div className="">
        {staffList.map((item, index) => (
          <div
            key={item.id}
            className="border shadow rounded-md p-3 gap-5 flex flex-col my-2 md:flex-row items-center md:items-start justify-center"
          >
            <div className="block md:hidden avatar">
              <div className="w-24 rounded-full border-[1px] border-gray-500">
                <img
                  className="rounded-full"
                  src={item.picture}
                  alt={item.name}
                />
              </div>
            </div>
            <div className="h-max hidden md:block text-md text-start mt-8 font-bold text-gray-600 px-2 ">
              {convertToBanglaNumerals(staffList.length - index)}
            </div>
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="bg-gray-300 text-right w-1/3 text-sm font-bold text-gray-800 px-2 border border-gray-500">
                    নাম
                  </td>
                  <td className="text-sm text-gray-800 px-2 border border-gray-500">
                    {item.name}
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300 text-right text-sm font-bold text-gray-800 px-2 border border-gray-500">
                    পদবী
                  </td>
                  <td className="text-sm text-gray-800 px-2 border border-gray-500">
                    {item.designation}
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300 text-right text-sm text-gray-600 px-2 border border-gray-500">
                      ফোন
                  </td>
                  <td className="text-sm text-gray-800 px-2 border border-gray-500">
                    {convertToBanglaDate(item.phone)}
                  </td>
                </tr>

                <tr>
                  <td className="bg-gray-300 text-right text-sm text-gray-600 px-2 border border-gray-500">
                   ইমেইল
                  </td>
                  <td className="text-sm text-gray-800 px-2 border border-gray-500">
                    {convertToBanglaDate(item.email)}
                  </td>
                </tr>

                <tr>
                  <td className="bg-gray-300 text-right text-sm text-gray-600 px-2 border border-gray-500">
                    যোগদানের তারিখ
                  </td>
                  <td className="text-sm text-gray-800 px-2 border border-gray-500">
                    {convertToBanglaDate(item.joining_date)}
                  </td>
                </tr>
                {item.ending_date && (
                  <tr>
                    <td className="bg-gray-300 text-right text-sm text-gray-600 px-2 border border-gray-500">
                      প্রস্থানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {convertToBanglaDate(item.ending_date)}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="hidden md:block avatar">
              <div className="w-28 h-[136px] rounded border-[1px] border-gray-500">
                <img
                  className="object-fill w-full"
                  src={item.picture}
                  alt={item.name}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffProfile;
