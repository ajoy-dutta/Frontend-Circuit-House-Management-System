import DC from "../../assets/DC.jpg";

const DCinfo = () => {
    return (
      <div className="bg-[#f5efe7]">
        <div className="py-10 px-10">
        <div className="grid sm:grid-rows-1 md:grid-cols-2 py-4 place-items-center">
          <div className="md:border-r-[1px] border-[#d8c4b6]">
            <div className="px-5 space-y-3">
                <p className="font-bold text-3xl py-3">যশোর সার্কিট হাউস</p>
                <p>দড়াটানা হতে দক্ষিণদিকে জজ কোর্ট ও জিলা স্কুলের মধ্যবর্তী স্থানে সার্কিট হাউজের অবস্থান।</p>
                <p className="text-justify">সরকারি, আধা-সরকারি, স্বায়ত্বশাসিত সংস্থার কর্মকর্তাবৃন্দকে ওয়ারেন্ট অব প্রেসিডেন্ট এর ভিত্তিতে সার্কিট হাউজ কক্ষবরাদ্দ দেয়া হয়। এছাড়াও মন্ত্রী/প্রতিমন্ত্রী/উপমন্ত্রী, জাতীয় সংসদের চীফ হুইপ সংসদ সদস্যবৃন্দ অর্থাৎ জেলার সকল ভিআইপি অতিথি সার্কিট হাউজে অবস্থান করেন। অবসরপ্রাপ্ত কর্মকর্তাগণকে তাঁদের ব্যক্তিগত ভ্রমণে সার্কিট হাউজের কক্ষবরাদ্দের বিধান আছে।</p>
                <p>সার্কিট হাউজে ২ টি টেলিফোন লাইন সংযুক্ত আছে । অভ্যর্থনা কক্ষের নম্বর হলো -০২৪৭৭৭৬২৪৮৬ </p>
            </div>
          </div>
          <div >
            <div className="flex flex-col md:flex-row items-center justify-center place-items-center">
            <div className="block md:hidden w-1/3 p-3 mt-5 border border-[#d8c4b6] rounded-full me-3">
                <img className="rounded-full" src={DC} alt="DC" />
              </div>
              <div className="w-full p-3">
                <p className="font-bold my-3 text-center text-xl"> জেলা প্রশাসক ও জেলা ম্যাজিস্ট্রেট,যশোর</p>
                <table className="table-auto w-full mt-4">
                  <tbody>
                    <tr className="">
                      <td className="bg-[#d8c4b6]  text-right w-1/3 text-sm font-bold text-gray-800 px-2 border border-[#c2a896]">
                        নাম
                      </td>
                      <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                        {/* {item.name} */}
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-[#d8c4b6] text-right text-sm text-gray-600 px-2 border border-[#c2a896]">
                        ব্যাচ
                      </td>
                      <td className="text-sm text-gray-800 px-2 border border-[#c2a896]">
                        {/* {item.batch} */}
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-[#d8c4b6] text-right text-sm text-gray-600 px-2 border border-[#c2a896]">
                        যোগদানের তারিখ
                      </td>
                      <td className="text-sm  text-gray-800 px-2 border border-[#d8c4b6]">
                        {/* {item.joining_date} */}
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-[#d8c4b6] text-right text-sm text-gray-600 px-2 border border-[#c2a896]">
                        প্রস্থানের তারিখ
                      </td>
                      <td className="text-sm text-gray-800 px-2 border border-[#d8c4b6]">
                        {/* {item.ending_date || "চলমান"} */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hidden md:block w-1/3 p-3 border border-[#d8c4b6] rounded me-3">
                <img src={DC} alt="DC" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default DCinfo;