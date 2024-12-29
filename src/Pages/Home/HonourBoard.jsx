import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";

const HonourBoard = () => {
  const [DChonourlist, SetDCHonourlist] = useState({ before1971: [], after1971: [] });
  const [NDChonourlist, SetNDCHonourlist] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    batch: '',
    joining_date: '',
    ending_date: '',
    photo: '',
    remarks: '',
    designation_type: 'DC',
  });

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();  // Use FormData for image upload

      // Append form data including the image file and other form fields
      formData.append("name", newItem.name);
      formData.append("batch", newItem.batch);
      formData.append("joining_date", newItem.joining_date);
      formData.append("ending_date", newItem.ending_date);
      formData.append("photo", newItem.photo); // The file itself
      formData.append("remarks", newItem.remarks);
      formData.append("designation_type", newItem.designation_type);

      // Send the request to the backend
      const response = await AxiosInstance.post('/honour-board/', formData);

      const addedItem = response.data;

      if (addedItem.designation_type === "DC") {
        SetDCHonourlist((prev) => {
          const isAfter1971 = 
            !addedItem.ending_date || new Date(addedItem.ending_date) > new Date("1971-12-31");
          return {
            before1971: isAfter1971 ? prev.before1971 : [...prev.before1971, addedItem],
            after1971: isAfter1971 ? [...prev.after1971, addedItem] : prev.after1971,
          };
        });
      } else if (addedItem.designation_type === "NDC") {
        SetNDCHonourlist((prev) => [...prev, addedItem]);
      }

      setNewItem({
        name: '',
        batch: '',
        joining_date: '',
        ending_date: '',
        photo: '',  // Reset photo to null after submitting
        remarks: '',
        designation_type: '',
      });

      setShowForm(false);
      alert("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };
  // Handle input changes (including file input)
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setNewItem((prev) => ({
        ...prev,
        [name]: files[0], // Store the first file
      }));
    } else {
      setNewItem((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await AxiosInstance.get('/honour-board/');
        const dcData = response.data.filter(
          (item) => item.designation_type === "DC"
        );
        const ndData = response.data.filter(
          (item) => item.designation_type === "NDC"
        );

        const after1971 = dcData.filter(
          (item) =>
            !item.ending_date || new Date(item.ending_date) > new Date("1971-12-31")
        );
        const before1971 = dcData.filter(
          (item) => item.ending_date && new Date(item.ending_date) <= new Date('1971-12-31')
        );
    
  
        // Set both lists
        SetDCHonourlist({ before1971, after1971 });
        SetNDCHonourlist(ndData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Convert Arabic numerals to Bangla numerals
  const convertToBanglaNumerals = (number) => {
    const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return number
      .toString()
      .split("")
      .map((digit) => banglaNumerals[parseInt(digit)])
      .join("");
  };

  return (
    <div className="lg:w-1/2 md:w-2/3 sm:w-2/3 mx-auto rounded-lg">
      <div className="flex justify-end p-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Add New
        </button>
      </div>

      {showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
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
          <label className="block font-semibold mb-1">Designation Type*</label>
          <select
            name="designation_type"
            value={newItem.designation_type}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="DC">DC</option>
            <option value="NDC">NDC</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block font-semibold mb-1">Batch</label>
          <input
            type="text"
            name="batch"
            value={newItem.batch}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            
          />
        </div>
        <div className="mb-3">
          <label className="block font-semibold mb-1">Joining Date*</label>
          <input
            type="date"
            name="joining_date"
            value={newItem.joining_date}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
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
        <div className="mb-3">
          <label className="block font-semibold mb-1">Profile Picture</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            accept="image/*"
          />
        </div>
        <div className="mb-3">
          <label className="block font-semibold mb-1">Remarks</label>
          <textarea
            name="remarks"
            value={newItem.remarks}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          ></textarea>
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



{/* DC Honour Board */}
<div className="p-8 bg-teal-50 mb-6">
  <h2 className="text-center text-xl font-bold mb-4 py-2 mt-8">জেলা প্রশাসক/জেলা ম্যজিস্ট্রেট/কালেক্টর</h2>
  <div className="space-y-0  mb-10">
    {DChonourlist.after1971.map((item, index) => (
      <div key={item.id} className="flex items-center shadow-lg rounded-lg border p-4">
        <div className="w-1/8 text-center text-sm font-semibold text-gray-800 p-3">
          {convertToBanglaNumerals(DChonourlist.after1971.length - index)}
        </div>
        {/* Item Details */}
        <div className="w-2/4 ml-4">
          <p className="text-sm font-bold text-gray-800 px-2">{item.name}</p>
          <p className="text-sm text-gray-600 px-2">{item.batch}</p>
          <p className="text-sm text-gray-600 px-2">{item.joining_date}</p>
          <p className="text-sm text-gray-600 px-2">{item.ending_date || "চলমান"}</p>
          <p className="text-sm text-gray-600 px-2">{item.remarks}</p>
        </div>
        <div className="w-1/4 pr-4 ml-10">
          <img
            src={item.photo}
            alt={item.name}
            className="w-28 h-28 object-cover rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    ))}
  </div>


  <h2 className="text-center text-xl font-bold mb-4 py-2">British India and East Pakistan District Magistrate</h2>
  <div className="space-y-0">
    {DChonourlist.before1971.map((item, index) => (
      <div key={item.id} className="flex items-center shadow-lg rounded-lg border p-4">
        <div className="w-1/8 text-center text-sm font-semibold text-gray-800 p-3">
          {convertToBanglaNumerals(DChonourlist.before1971.length - index)}
        </div>
        {/* Item Details */}
        <div className="w-2/4 ml-4">
          <p className="text-sm font-bold text-gray-800 px-2">{item.name}</p>
          <p className="text-sm text-gray-600 px-2">{item.batch}</p>
          <p className="text-sm text-gray-600 px-2">{item.joining_date}</p>
          <p className="text-sm text-gray-600 px-2">{item.ending_date || "চলমান"}</p>
          <p className="text-sm text-gray-600 px-2">{item.remarks}</p>
        </div>
        <div className="w-1/4 pr-4 ml-10">
          <img
            src={item.photo}
            alt={item.name}
            className="w-28 h-28 object-cover rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    ))}
  </div>

</div>


      <div className="p-8 bg-teal-50 mb-6 mt-10 ">
        <h2 className="text-center text-xl font-bold mb-4 py-2">নেজারত ডেপুটি কালেক্টর</h2>
        <div className="space-y-0">
          {NDChonourlist.map((item, index) => (
            <div key={item.id} className="flex items-center shadow-lg rounded-lg border p-4">
              <div className="w-1/8 text-center text-sm font-semibold text-gray-800 p-3">
              {convertToBanglaNumerals(NDChonourlist.length - index)}
                </div>
              <div className="w-2/4 ml-4 ">
                <p className="text-sm font-bold text-gray-800 px-2">{item.name}</p>
                <p className="text-sm text-gray-600 px-2">{item.batch}</p>
                <p className="text-sm text-gray-600 px-2">{item.joining_date}</p>
                <p className="text-sm text-gray-600 px-2">{item.ending_date || "চলমান"}</p>
                <p className="text-sm text-gray-600 px-2">{item.remarks}</p>
              </div>
              <div className="w-1/4 pr-4 ml-10">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-full border-2 border-gray-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HonourBoard;
