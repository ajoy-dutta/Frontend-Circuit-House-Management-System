/* eslint-disable react/prop-types */
import { FaHome, FaPoll, FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";
import { FaHistory  } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";


const Sidebar = ({ sidebarToggle }) => {
  const { user } = useUser();
  const location = useLocation(); // Get the current location

  // Function to determine if a tab is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block mt-[58px] md:mt-0"
      } w-64 bg-[#3E5879] shadow fixed z-50 h-full text-[#F5EFE7] px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-[#F5EFE7] font-bold">Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-[#F5EFE7] font-normal">
        <Link to="/">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-2" />
              Home
            </div>
          </li>
        </Link>

        <Link to="/room">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/dashboard/room") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
              Rooms
            </div>
          </li>
        </Link>

        <Link to="/food">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/dashboard/food") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaBowlFood className="inline-block w-6 h-6 mr-2 -mt-2" />
              Food
            </div>
          </li>
        </Link>

        <Link to="/other">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/dashboard/other") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2" />
              Other Costs
            </div>
          </li>
        </Link>

        <Link to="/guest-list">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/dashboard/guest-list") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2" />
              Current Guests
            </div>
          </li>
        </Link>

        <Link to="/checkout-history">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/dashboard/checkout-history") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaHistory className="inline-block w-6 h-6 mr-2 -mt-2" />
              Checkout History
            </div>
          </li>
        </Link>


        {user?.role === "NDC" && (
          <Link to="/staff-approval">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2">
            <div className="px-3 ">
              <HiUsers className="inline-block w-6 h-6 mr-2 -mt-2 "></HiUsers>
              Staffs
            </div>
          </li>
        </Link>
      )}

         <Link to="/staff-profile">
            <li className="mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2">
              <div className="px-3 ">
                <FaRegMessage className="inline-block w-6 text-lg mr-2 "></FaRegMessage>
                Staff Profile
              </div>
            </li>
          </Link>

          <Link to="inbox">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2">
            <div className="px-3 ">
              <FaRegMessage className="inline-block w-6 text-lg mr-2 "></FaRegMessage>
              Inbox
            </div>
          </li>
        </Link>
        
      </ul>
    </div>
  );
};

export default Sidebar;
