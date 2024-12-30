/* eslint-disable react/prop-types */
import { FaRegUserCircle,FaHome, FaPoll,FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router";
import { useUser } from "../../Provider/UserProvider";

const Sidebar = ({ sidebarToggle }) => {
  const {user} = useUser();
  return (
    <div 
      className={`${
        sidebarToggle ? "hidden" : "block mt-[58px] md:mt-0"
      } w-64 bg-white border shadow fixed z-50 h-full px-4 py-2`}
    >

      <div className="my-2 mb-4">
        <h1 className="text-2xl text-gray-600 font-bold">Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-gray-600 font-semibold">
      <Link to="/">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 py-2">
            <div className="px-3 ">
              <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-2  "></MdDashboard>
              Home
            </div>
          </li>
        </Link>
        <Link to="/admin/room">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 py-2">
            <div className="px-3 ">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2  "></FaHome>
              Room
            </div>
          </li>
        </Link>
        <Link to="/admin/food">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 py-2">
            <div className="px-3 ">
              <FaBowlFood className="inline-block w-6 h-6 mr-2 -mt-2 "></FaBowlFood>
              Food
            </div>
          </li>
        </Link>
        <Link to="/admin/other">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 py-2">
            <div className="px-3 ">
              <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2 "></FaPoll>
              Other Costs
            </div>
          </li>
        </Link>
        <Link to="/admin/guest-list">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 py-2">
            <div className="px-3 ">
              <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2 "></FaUsers>
              Our Guests
            </div>
          </li>
        </Link>
        {user?.role === "NDC" && (
          <Link to="/admin/staff-approval">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 py-2">
            <div className="px-3 ">
              <HiUsers className="inline-block w-6 h-6 mr-2 -mt-2 "></HiUsers>
              Staffs
            </div>
          </li>
        </Link>
      )}
       <Link to="/admin/profile">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 py-2">
            <div className="px-3 ">
              <FaRegUserCircle className="inline-block w-6 h-6 mr-2 -mt-2 "></FaRegUserCircle>
              Profile
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
