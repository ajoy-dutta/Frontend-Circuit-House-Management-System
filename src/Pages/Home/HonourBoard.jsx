import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";
import { useUser } from "../../Provider/UserProvider";

const HonourBoard = () => {
  const { user } = useUser();
  console.log(user)
  const [DChonourlist, SetDCHonourlist] = useState({
    before1971: [],
    after1971: [],
  });
  const [NDChonourlist, SetNDCHonourlist] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    batch: "",
    joining_date: "",
    ending_date: "",
    photo: "",
    remarks: "",
    designation_type: "DC",
  });
  

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(); // Use FormData for image upload

      // Append form data including the image file and other form fields
      formData.append("name", newItem.name);
      formData.append("batch", newItem.batch);
      formData.append("joining_date", newItem.joining_date);
      formData.append("ending_date", newItem.ending_date);
      formData.append("photo", newItem.photo); // The file itself
      formData.append("remarks", newItem.remarks);
      formData.append("designation_type", newItem.designation_type);

      // Send the request to the backend
      const response = await AxiosInstance.post("/honour-board/", formData);

      const addedItem = response.data;
      

      if (addedItem.designation_type === "DC") {
        SetDCHonourlist((prev) => {
          const isAfter1971 =
            !addedItem.ending_date ||
            new Date(addedItem.ending_date) > new Date("1971-12-31");
          return {
            before1971: isAfter1971
              ? prev.before1971
              : [...prev.before1971, addedItem],
            after1971: isAfter1971
              ? [...prev.after1971, addedItem]
              : prev.after1971,
          };
        });
      } else if (addedItem.designation_type === "NDC") {
        SetNDCHonourlist((prev) => [...prev, addedItem]);
      }

      setNewItem({
        name: "",
        batch: "",
        joining_date: "",
        ending_date: "",
        photo: "", // Reset photo to null after submitting
        remarks: "",
        designation_type: "",
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
        const response = await AxiosInstance.get("/honour-board/");
        const dcData = response.data.filter(
          (item) => item.designation_type === "DC"
        );
        const ndData = response.data.filter(
          (item) => item.designation_type === "NDC"
        );

        const after1971 = dcData.filter(
          (item) =>
            !item.ending_date ||
            new Date(item.ending_date) > new Date("1971-12-31")
        );
        const before1971 = dcData.filter(
          (item) =>
            item.ending_date &&
            new Date(item.ending_date) <= new Date("1971-12-31")
        );

        
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


  // // Function to navigate to another page with current DC data
  // const goToCurrentDCPage  = () => {
  //   if (currentDC) {
  //     navigate("/", { state: { currentDC } }); // Pass current DC data via state
  //   } else {
  //     alert("No current DC found.");
  //   }
  // };

  return (
    <div className="lg:w-1/2 md:w-2/3 sm:w-2/3 my-10 mx-auto rounded-lg">
      {user && (
        <div className="flex justify-end p-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Add New
          </button>
        </div>
      )}

      {showForm && (
        <div className="fixed top-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-2xl max-h-[80vh] overflow-y-auto shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center">
              Add New Record
            </h2>
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
                <label className="block font-semibold mb-1">
                  Designation Type*
                </label>
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
                <label className="block font-semibold mb-1">
                  Joining Date*
                </label>
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
                <label className="block font-semibold mb-1">
                  Profile Picture
                </label>
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
      <div className="p-6 bg-teal-50">
        <h2 className="text-center text-lg font-bold mb-4 py-2">
          জেলা প্রশাসক/জেলা ম্যাজিস্ট্রেট/কালেক্টর
        </h2>

        <div className="">
          {DChonourlist.after1971.map((item, index) => (
            <div
              key={item.id}
              className="border shadow rounded-md p-3 gap-5 flex flex-col my-2 md:flex-row items-center md:items-start justify-center "
            >
              <div className="block md:hidden avatar">
                <div className="w-24 rounded-full border-[1px] border-gray-500">
                  <img
                    className="rounded-full"
                    src={item.photo}
                    alt={item.name}
                  />
                </div>
              </div>
              <div className="h-max hidden md:block text-lg text-start font-bold text-gray-600 px-2 ">
                {convertToBanglaNumerals(DChonourlist.after1971.length - index)}
              </div>
              <table className="table-auto w-full ">
                <tbody>
                  <tr className="">
                    <td className="bg-gray-300 w-1/3 text-sm font-bold text-gray-800 px-2 border border-gray-500">
                      নাম
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      ব্যাচ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.batch}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      যোগদানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.joining_date}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      প্রস্থানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.ending_date || "চলমান"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="hidden md:block avatar">
                <div className="w-28 rounded border-[1px] border-gray-500">
                  <img
                    className="object-fill w-full"
                    src={item.photo}
                    alt={item.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-center text-xl font-bold mb-2 py-2 mt-4">
          British India and East Pakistan District Magistrate
        </h1>
        <div className="">
          {DChonourlist.before1971.map((item, index) => (
            <div
              key={item.id}
              className="border shadow rounded-md my-2 p-3 gap-5 flex flex-col md:flex-row items-center md:items-start justify-center "
            >
              <div className="block md:hidden avatar rounded-full border-[1px] border-gray-500">
                <div className="w-24 rounded-full">
                  <img
                    className="rounded-full"
                    src={item.photo}
                    alt={item.name}
                  />
                </div>
              </div>
              {/* <figure className="block md:hidden w-[100px]  rounded-full border-[1px] border-gray-500">
                <img
                  className="w-full object-cover rounded-full"
                  src={item.photo}
                  alt={item.name}
                />
              </figure> */}
              <div className="h-max hidden md:block text-lg text-start font-bold text-gray-600 px-2 ">
                {convertToBanglaNumerals(
                  DChonourlist.before1971.length - index
                )}
              </div>
              <table className="table-auto w-full ">
                <tbody>
                  <tr className="">
                    <td className="bg-gray-300 w-1/3 text-sm font-bold text-gray-800 px-2 border border-gray-500">
                      নাম
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      ব্যাচ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.batch}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      যোগদানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.joining_date}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      প্রস্থানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.ending_date || "চলমান"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="hidden md:block avatar">
                <div className="w-28 rounded">
                  <img src={item.photo} alt={item.name} />
                </div>
              </div>
              {/* <figure className="hidden md:block  border-[1px] border-gray-500">
                <img
                  className="w-[95px] h-[90px] object-cover"
                  src={item.photo}
                  alt={item.name}
                />
              </figure> */}
            </div>
          ))}
        </div>

        <div className="mb-0 rounded-lg">
          <div className="mb-2 rounded-lg"></div>
        </div>
      </div>

      <div className="p-8 bg-teal-50 mb-4 mt-4">
        <h2 className="text-center text-lg font-bold mb-2 px-2">
          নেজারত ডেপুটি কালেক্টর
        </h2>
        <div className="my-4">
          {NDChonourlist.map((item, index) => (
            <div
              key={item.id}
              className="border shadow rounded-md my-2 p-3 gap-5 flex flex-col md:flex-row items-center md:items-start justify-center "
            >
              <div className="block md:hidden avatar rounded-full border-[1px] border-gray-500">
                <div className="w-24 rounded-full">
                  <img
                    className="rounded-full"
                    src={item.photo}
                    alt={item.name}
                  />
                </div>
              </div>{" "}
              <div className="h-max hidden md:block text-lg text-start font-bold text-gray-600 px-2 ">
                {convertToBanglaNumerals(NDChonourlist.length - index)}
              </div>
              <table className="table-auto w-full ">
                <tbody>
                  <tr className="">
                    <td className="bg-gray-300 w-1/3 text-sm font-bold text-gray-800 px-2 border border-gray-500">
                      নাম
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      ব্যাচ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.batch}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      যোগদানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.joining_date}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      প্রস্থানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {item.ending_date || "চলমান"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="hidden md:block avatar">
                <div className="w-28 rounded border-[1px] border-gray-500">
                  <img
                    className="object-fill w-full"
                    src={item.photo}
                    alt={item.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HonourBoard;
