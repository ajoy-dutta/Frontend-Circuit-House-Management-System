/* eslint-disable react/prop-types */
import { FaHome, FaPoll, FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";
import { FaHistory } from "react-icons/fa";

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

        <Link to="/admin/room">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/admin/room") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
              Rooms
            </div>
          </li>
        </Link>

        <Link to="/admin/food">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/admin/food") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaBowlFood className="inline-block w-6 h-6 mr-2 -mt-2" />
              Food
            </div>
          </li>
        </Link>

        <Link to="/admin/other">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/admin/other") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2" />
              Other Costs
            </div>
          </li>
        </Link>

        <Link to="/admin/guest-list">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/admin/guest-list") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2" />
              Our Guests
            </div>
          </li>
        </Link>

        <Link to="/admin/checkout-history">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
              isActive("/admin/checkout-history") ? "bg-blue-100 text-gray-600" : ""
            }`}
          >
            <div className="px-3">
              <FaHistory className="inline-block w-6 h-6 mr-2 -mt-2" />
              Checkout History
            </div>
          </li>
        </Link>

        {user?.role === "NDC" && (
          <Link to="/admin/staff-approval">
            <li
              className={`mb-2 rounded hover:shadow hover:bg-blue-100 hover:text-gray-600 py-2 ${
                isActive("/admin/staff-approval") ? "bg-blue-100 text-gray-600" : ""
              }`}
            >
              <div className="px-3">
                <HiUsers className="inline-block w-6 h-6 mr-2 -mt-2" />
                Staffs
              </div>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
