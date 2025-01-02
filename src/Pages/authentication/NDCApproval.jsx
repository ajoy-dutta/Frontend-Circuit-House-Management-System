import { useState, useEffect } from 'react';
import AxiosInstance from '../../Components/Axios';

const NDCApproval = () => {
    const [staffList, setStaffList] = useState([]);

    // Fetch staff data on component load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosInstance.get('/approve_staff/');
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

    const handleApprove = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to approve this user?");
        if (!isConfirmed) return;

        console.log("Approving staff with id:", id); // Debugging output
        try {

            await AxiosInstance.put(`/approve_staff/${id}/`, { is_approved: true });

            setStaffList((prevStaffList) =>
                prevStaffList.map((item) =>
                    item.id === id ? { ...item, is_approved: true } : item
                )
            );
        } catch (error) {
            console.error('Error approving staff:', error);
        }
    };
    const handleDelete = async (id) => {

        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (!isConfirmed) return;
        try {
            console.log("id is found in delete", id)
            await AxiosInstance.delete(`/approve_staff/${id}/`);

            setStaffList((prevStaffList) => prevStaffList.filter((item) => item.id !== id));
        }
        catch (error) {
            console.log("Error fetching data");
        }
    }


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
                                    {!item.is_approved ? (
                                        <>
                                            {console.log(`Rendering Approve button for ID: ${item.id}`)}
                                            <button
                                                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
                                                onClick={() => handleApprove(item.id)}
                                            >
                                                Approve
                                            </button>
                                        </>
                                    ) : (
                                            <>
                                                {console.log(`Rendering Delete button for ID: ${item.id}`)}
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    Delete
                                            </button>
                                            </>
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
