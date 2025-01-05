/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Provider/UserProvider';

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleSignout = () => {
    signOut();
    navigate('/');
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
      className="bg-teal-500 px-4 py-3 flex justify-between"
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
            className="p-0 bg-transparent border-none" // Removes padding, background, and border
            onClick={handleDropdownToggle}
          >
            <FaUserCircle className="w-8 h-6 text-white" /> {/* Clean icon */}
          </button>
          {dropdownOpen && (
            <div className="absolute shadow w-20 right-0 bg-white rounded">
              <ul className="text-sm">
                {user ? (
                  <div
                    onClick={handleSignout}
                    className="hover:text-cyan-400 cursor-pointer p-2 bg-red-500 rounded-md text-white font-semibold"
                  >
                    Sign Out
                  </div>
                ) : (
                  <li className="relative">
                    <div className="py-2 px-3 hover:bg-black hover:text-gray-100 cursor-pointer">
                      Sign In
                    </div>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
