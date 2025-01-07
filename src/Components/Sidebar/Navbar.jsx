/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const navRef = useRef(null);
  const dropdownRef = useRef(null); // Ref for dropdown
  const { user, signOut } = useUser();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownOpen
      ) {
        setDropdownOpen(false); // Close dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleSignout = () => {
    signOut();
    navigate("/");
  };

  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div
      id="nav"
      ref={navRef}
      className="bg-[#213555] px-4 py-3 flex justify-between sticky top-0"
    >
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white hover:text-blue-200 me-4 cursor-pointer"
          onClick={handleSidebarToggle}
        />
        <span className="text-white font-semibold">Circuit House</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative" ref={dropdownRef}>
          <button
            className="p-0 bg-transparent border-none"
            onClick={handleDropdownToggle}
          >
            <FaUserCircle className="w-8 h-6 text-white" />
          </button>
          {dropdownOpen && (
            <div className="absolute shadow w-20 right-0 text-center  bg-white rounded">
              <ul className="text-sm">
                <Link to="/dashboard/profile">
                  <li className="hover:text-cyan-400 cursor-pointer border-b-2 text-black p-2 font-semibold">
                    Profile
                  </li>
                </Link>
                {user ? (
                 
                  <li
                    onClick={handleSignout}
                    className="hover:text-cyan-400 cursor-pointer p-2 text-black  font-semibold"
                  >
                    Sign Out
                  </li>
                 
                ) : (
                  <li className="relative">
                    <div className="py-2 px-3 hover:bg-black hover:text-gray-100 cursor-pointer">
                      Sign In
                    </div>
                  </li>
                )}
              </ul>

              <ul className="text-sm"></ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
