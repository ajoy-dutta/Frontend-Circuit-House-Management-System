/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../Provider/UserProvider';

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const navRef = useRef(null); // Create a ref to access the DOM element
  const [navHeight, setNavHeight] = useState(0);
  const { user, signOut } = useUser();
  const navigate = useNavigate();
  
  // New state for toggling dropdown menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Set the height after the component is mounted
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
      console.log('Navbar height:', navRef.current.offsetHeight);
    }
  }, []);
  
  const handleSignout = () => {
    console.log('Ready to sign out');
    signOut();
    navigate('/');
  };

  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev); // Toggle the dropdown visibility
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
        <div className="relative">
          <button
            className="text-white btn btn-sm group"
            onClick={handleDropdownToggle} // Toggle dropdown visibility
          >
            <FaUserCircle className="w-8 h-6 mt-1" />
            {/* Conditionally render dropdown */}
            {dropdownOpen && (
              <div className="bg-blue absolute shadow w-24 right-0">
                <ul className=" text-sm">
                  {user ? (
                    <div
                      onClick={handleSignout}
                      className="  hover:text-cyan-400 cursor-pointer p-3 bg-red-500 rounded-md text-white font-semibold"
                    >
                      Sign Out
                    </div>
                  ) : (
                    <li className="relative">
                      <div className="btn btn-danger hover:shadow py-2 hover:bg-black hover:text-gray-100 cursor-pointer">
                        Sign In
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
