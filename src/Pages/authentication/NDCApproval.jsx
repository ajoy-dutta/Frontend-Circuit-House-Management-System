import { useState, useEffect } from 'react';
import axios from 'axios';

const NDCApproval = () => {
    const [staffList, setStaffList] = useState([]);

    // Fetch staff data on component load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/approve_staff/');
                console.log(response);
                // Filter staff data where the role is "Assistant Accountant"
                const staffData = response.data.filter(item => item.role === "Assistant Accountant");
                setStaffList(staffData); // Use the filtered data here
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };
        fetchData();
    }, []);

    // Approve staff function
    const handleApprove = async (id) => {
        try {
            // Call API to update approval status
            await axios.put(`http://127.0.0.1:8000/approve_staff/${id}/`, { is_approved: true });

            // Update the UI to reflect the changes
            setStaffList((prevStaffList) =>
                prevStaffList.map((item) =>
                    item.id === id ? { ...item, is_approved: true } : item
                )
            );
        } catch (error) {
            console.error('Error approving staff:', error);
        }
    };

    return (
        <div className="mt-8 p-8 mb-4">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="text-black uppercase bg-blue-200 dark:bg-blue-400 text-xl text-center font-bold border-b dark:border-gray-400 py-2">
                        User Registration List
                    </caption>
                    <thead className="text-sm text-black uppercase bg-blue-300 dark:bg-blue-300 dark:text-black">
                        <tr>
                            <th scope="col" className="px-0 py-3 text-center">
                                SL.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                E-Mail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Approve Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList.map((item, index) => (
                            <tr
                                key={item.id}
                                className="bg-white font-semibold border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-gray-300 text-gray-800"
                            >
                                <td className="px-0 py-2 text-center">{index + 1}</td>
                                <td className="px-6 py-4">{item.username}</td>
                                <td className="px-6 py-4">{item.email}</td>
                                <td className="px-6 py-4">
                                    {item.is_approved ? 'Approved' : 'Pending'}
                                </td>
                                <td className="px-6 py-4">
                                    {!item.is_approved && (
                                        <button
                                            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
                                            onClick={() => handleApprove(item.id)}
                                        >
                                            Approve
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NDCApproval;
