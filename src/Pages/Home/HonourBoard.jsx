import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../BaseURL";

const HonourBoard = () => {
  const [DChonourlist, SetDCHonourlist] = useState([]);
  const [NDChonourlist, SetNDCHonourlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/honour-board/`);
        const dcData = response.data.filter(
          (item) => item.designation_type === "DC"
        );
        const ndData = response.data.filter(
          (item) => item.designation_type === "NDC"
        );

        SetDCHonourlist(dcData);
        SetNDCHonourlist(ndData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to convert Arabic numerals to Bangla numerals
  const convertToBanglaNumerals = (number) => {
    const banglaNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number
      .toString()
      .split('')
      .map((digit) => banglaNumerals[parseInt(digit)])
      .join('');
  };

  return (
<div className="lg:w-1/2 md:w-2/3 sm:w-2/3  mx-auto rounded-lg">
      <div className="p-8 bg-teal-50 mb-6 mt-10 ">

  
      {/* DC Honour Board */}
      <h2 className="text-center text-xl font-bold mb-4 py-2">
        ডেপুটি কালেক্টর
      </h2>
      <div className=" space-y-0">
        {DChonourlist.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center  shadow-lg rounded-lg border border-1 border-gray  p-4"
          >
            {/* Left: Number */}
            <div className="w-1/8  text-center text-sm font-semibold  text-gray-800 p-3">
              {convertToBanglaNumerals(index + 1)}
            </div>

            

            {/* Right: Details */}
            <div className="w-2/4 ml-4 ">
              <p className="text-sm font-bold text-gray-800 px-2  border border-1 border-gray">
                <strong> নামঃ </strong> {item.name}
              </p>
              <p className="text-sm text-gray-600 px-2  border border-1 border-gray">
                <strong>ব্যচঃ</strong> {item.batch}
              </p>
              <p className="text-sm text-gray-600 px-2  border border-1 border-gray">
                <strong>যোগদানের তারিখঃ</strong> {item.joining_date}
              </p>
              <p className="text-sm text-gray-600 px-2  border border-1 border-gray">
                <strong>প্রস্থানের তারিখঃ</strong> {item.ending_date ? item.ending_date : "চলমান"}
              </p>
              <p className="text-sm text-gray-600 px-2  border border-1 border-gray">
                <strong>মন্তব্যঃ</strong> {item.remarks}
              </p>
            </div>

            {/* Left: Image */}
            <div className="w-1/4 pr-4 ml-10 border-gray-300">
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
      {/* NDC Honour Board */}
      <h2 className="text-center text-xl font-bold mb-4 mt-0 py-2 ">
        নেজারত ডেপুটি কালেক্টর
      </h2>
      <div className="space-y-0">
        {NDChonourlist.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center  shadow-lg rounded-lg p-4 border border-1 border-gray"
          >
            {/* Left: Number */}
            <div className="w-1/8 text-center text-sm font-semibold text-gray-800 p-3">
              {convertToBanglaNumerals(index + 1)}
            </div>

            

            {/* Right: Details */}
            <div className="w-1/2 ml-4">
              <p className="text-sm font-bold text-gray-800 px-2  border border-1 border-gray">
                <strong> নামঃ </strong> {item.name}
              </p>
              <p className="text-sm text-gray-600 px-2  border border-1 border-gray">
                <strong>ব্যচঃ</strong> {item.batch}
              </p>
              <p className="text-sm text-gray-600 px-2  border border-1 border-gray">
                <strong>যোগদানের তারিখঃ</strong> {item.joining_date}
              </p>
              <p className="text-sm text-gray-600 px-2 border border-1 border-gray">
                <strong>প্রস্থানের তারিখঃ</strong> {item.ending_date ? item.ending_date : "চলমান"}
              </p>
              <p className="text-sm text-gray-600 px-2 border border-1 border-gray">
                <strong>মন্তব্যঃ</strong> {item.remarks}
              </p>
            </div>
            {/* Left: Image */}
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
