import { useEffect, useState } from "react";
import AxiosInstance from "../../Components/Axios";
import dc from "../../assets/DC.jpg";

const DCinfo = () => {
  const [currentDC, setCurrentDC] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/honour-board/");
        const dcData = response.data.filter(
          (item) => item.designation_type === "DC"
        );
        console.log(dcData);

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
    <div className="bg-[#f5efe7]">
      <div className="py-10 px-4 md:px-10">
        <div className="grid sm:grid-rows-1 md:grid-cols-2 py-4 place-items-center">
          {/* Left Section */}
          <div className="md:border-r-[1px] border-[#d8c4b6]">
            <div className="px-5 space-y-3 font-serif">
              <p className="font-bold text-2xl py-3">Jashore Circuit House</p>
              <p>
                Situated in the heart of Jashore town, Jashore Circuit House
                presents a blend of tradition and modernity.{" "}
              </p>
              <p className="text-justify">
                Maintained by the District Administration, Circuit House serves
                as a haven for dignitaries and visitors, offering both comfort
                and a connection to history. Its neatly manicured gardens and
                endless green lawn breathe life into its surroundings. Over the
                years, Jashore Circuit House has witnessed the convergence of
                tradition and progress, standing as a symbol of Jashore’s
                enduring heritage and evolving identity.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="lg:w-[500px] mx-auto">
              <p className="font-bold my-3 text-center text-xl font-serif">
                Deputy Commissioner and Learned District Magistrate
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center font-serif justify-center place-items-center">
              <div className="block lg:hidden w-1/3 p-3 border border-[#d8c4b6] rounded-full me-3">
                <img className="rounded-full" src={dc} alt="dC" />
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full p-3">
                  <table className="table-auto w-full mt-4">
                    <tbody>
                      <tr>
                        <td className="bg-[#d8c4b6] text-right  w-1/3 text-sm text-gray-600 px-2 border border-[#c2a896]">
                          Name
                        </td>
                        {/* <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                        {currentDC ? currentDC.name : "তথ্য পাওয়া যায়নি"}
                      </td> */}
                        <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                          Md Azaharul Islam
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-[#d8c4b6] text-right text-sm text-gray-600 px-2 border border-[#c2a896]">
                          Batch(BCS)
                        </td>
                        <td className="text-sm text-gray-800 px-2 border border-[#c2a896]">
                          25
                        </td>
                        {/* <td className="text-sm text-gray-800 px-2 border border-[#c2a896]">
                        {currentDC ? currentDC.batch : "তথ্য পাওয়া যায়নি"}
                      </td> */}
                      </tr>
                      <tr>
                        <td className="bg-[#d8c4b6] text-right  text-sm text-gray-600 px-2 border border-[#c2a896]">
                          Joining Date
                        </td>
                        <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                          12 September 2024
                        </td>
                        {/* <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                        {currentDC ? convertToBanglaDate(currentDC.joining_date) : "তথ্য পাওয়া যায়নি"}
                      </td> */}
                      </tr>
                      <tr>
                        <td className="bg-[#d8c4b6] text-right  text-sm text-gray-600 px-2 border border-[#c2a896]">
                          Mobile
                        </td>
                        <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                          01713411371
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-[#d8c4b6] text-right  text-sm text-gray-600 px-2 border border-[#c2a896]">
                          Phone(Office)
                        </td>
                        <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                          02477762652
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-[#d8c4b6] text-right  text-sm text-gray-600 px-2 border border-[#c2a896]">
                          Fax
                        </td>
                        <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                          02477762652
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-[#d8c4b6] text-right  text-sm text-gray-600 px-2 border border-[#c2a896]">
                          Email
                        </td>
                        <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                          dcjessore@mopa.gov.bd
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="hidden lg:block w-1/3 p-3 mt-4 border border-[#d8c4b6] rounded me-3">
                  <img src={dc} alt="DC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCinfo;
