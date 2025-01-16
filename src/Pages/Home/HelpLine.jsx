import React from 'react';

const HelpLine = () => {
  const helpLineData = [
    {
      id: 1,
      name: "Mahir Dyan Amin",
      designation: "Nezarat Deputy Collector",
      officeName: "District Commissioner's Office, Jashore",
      email: "mahiac2010@gmail.com",
      mobile: "01733909222",
      phoneOffice: "01733909222",
    },
    {
      id: 2,
      name: "Sharmin Akter",
      designation: "UNO",
      officeName: "Jessore Sadar Upazila",
      email: "unojessore@mopa.gov.bd",
      mobile: "01318252933",
      phoneOffice: "02477762432",
    },
    {
      id: 3,
      name: "Officer Incharge, Kotwali Model Thana, Jessore",
      designation: "Unarmed Police Inspector",
      officeName: "Kotwali Model Thana, Jessore",
      email: "ockotowalijessore@gmail.com",
      mobile: "01320-143180",
      phoneOffice: "0421-65034",
    },
  ];

  return (
    <div className="container mx-auto my-10 p-4 bg-gray-100 rounded-lg shadow overflow-x-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Help Line</h1>
      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Designation</th>
            <th className="border border-gray-300 px-4 py-2">Office Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Mobile</th>
            <th className="border border-gray-300 px-4 py-2">Phone(Office)</th>
          </tr>
        </thead>
        <tbody>
          {helpLineData.map((entry, index) => (
            <tr key={entry.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{entry.name}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{entry.designation}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{entry.officeName}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.email}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{entry.mobile}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{entry.phoneOffice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HelpLine;
