import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";

const DCinfo = () => {
  const [currentDC, setCurrentDC] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/honour-board/");
        const dcData = response.data.filter((item) => item.designation_type === "DC");

        // Find the current DC
        const Current_DC = dcData.find((item) => !item.ending_date);

        setCurrentDC(Current_DC);
        console.log("Current_DC:", Current_DC);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Log whenever currentDC updates
  useEffect(() => {
    if (currentDC) {
      console.log("Updated Current_DC:", currentDC);
    }
  }, [currentDC]);

  return (
    <div className="my-10 mx-10">
      <div className="grid sm:grid-rows-1 md:grid-cols-2 py-4 border place-items-center">
        <div className="md:border-r-2 border-gray-300">
          <div className="px-5 space-y-3">
            <p className="font-bold text-3xl py-3">যশোর সার্কিট হাউস</p>
            <p>
              দড়াটানা হতে দক্ষিণদিকে জজ কোর্ট ও জিলা স্কুলের মধ্যবর্তী স্থানে
              সার্কিট হাউজের অবস্থান।
            </p>
            <p className="text-justify">
              সরকারি, আধা-সরকারি, স্বায়ত্বশাসিত সংস্থার কর্মকর্তাবৃন্দকে
              ওয়ারেন্ট অব প্রেসিডেন্ট এর ভিত্তিতে সার্কিট হাউজ কক্ষবরাদ্দ দেয়া
              হয়। এছাড়াও মন্ত্রী/প্রতিমন্ত্রী/উপমন্ত্রী, জাতীয় সংসদের চীফ
              হুইপ সংসদ সদস্যবৃন্দ অর্থাৎ জেলার সকল ভিআইপি অতিথি সার্কিট হাউজে
              অবস্থান করেন। অবসরপ্রাপ্ত কর্মকর্তাগণকে তাঁদের ব্যক্তিগত ভ্রমণে
              সার্কিট হাউজের কক্ষবরাদ্দের বিধান আছে।
            </p>
            <p>
              সার্কিট হাউজে ২ টি টেলিফোন লাইন সংযুক্ত আছে । অভ্যর্থনা কক্ষের নম্বর
              হলো -০২৪৭৭৭৬২৪৮৬
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center place-items-center">
            <div className="w-full p-3">
              <p className="font-bold my-3 text-xl">
                জেলা প্রশাসক ও জেলা ম্যাজিস্ট্রেট, যশোর
              </p>
              <table className="table-auto w-full mt-4">
                <tbody>
                  <tr>
                    <td className="bg-gray-300 w-1/3 text-sm font-bold text-gray-800 px-2 border border-gray-500">
                      নাম
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {currentDC ? currentDC.name : "তথ্য পাওয়া যায়নি"}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      ব্যাচ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {currentDC ? currentDC.batch : "তথ্য পাওয়া যায়নি"}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      যোগদানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {currentDC ? currentDC.joining_date : "তথ্য পাওয়া যায়নি"}
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-300 text-sm text-gray-600 px-2 border border-gray-500">
                      প্রস্থানের তারিখ
                    </td>
                    <td className="text-sm text-gray-800 px-2 border border-gray-500">
                      {currentDC ? currentDC.ending_date || "চলমান" : "তথ্য পাওয়া যায়নি"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-1/3 p-3 border rounded me-3">
              {currentDC && currentDC.photo ? (
                <img src={currentDC.photo} alt="DC" />
              ) : (
                <p>ছবি নেই</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCinfo;
