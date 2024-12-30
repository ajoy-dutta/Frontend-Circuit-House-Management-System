/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../Provider/UserProvider';

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  const navRef = useRef(null); // Create a ref to access the DOM 
  // element
  const [navHeight, setNavHeight] = useState(0);
  const {user, signOut} = useUser();
  const navigate = useNavigate();


  useEffect(() => {
    // Set the height after the component is mounted
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
      console.log("Navbar height:", navRef.current.offsetHeight);
    }
  }, []);
  
  const handleSignout = () => {
    console.log("ready to signout");
    signOut();
    navigate("/");
  } 

    return (
      <div id="nav"
      ref={navRef} className="bg-teal-500 px-4 py-3 flex justify-between">
        <div className="flex items-center text-xl">
          
          <FaBars
            className="text-white  hover:text-blue-200  me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
          <span className="text-white font-semibold" >Circuit House</span>
        </div>
        <div className="flex items-center gap-x-5">
          {/* <div className="relative md:w-65">
            <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
              <button className="p-1 focus:outline-none text-white md:text-black">
                <FaSearch />
              </button>
            </span>
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            />
          </div> */}
          {/* <div className="text-white">
            <FaBell className="w-6 h-6" />
          </div> */}

          <div className="relative">
            <button className="text-white btn btn-sm btn-ghost group">
              <FaUserCircle className="w-6 h-6 mt-1" />
              <div className="z-10 bg-white hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
                <ul className="py-2 space-y-2 text-sm text-gray-800">
                  
                {/* <li>
                  <Link
                    to="/admin/profile"
                    className="block hover:shadow py-2 hover:bg-black hover:text-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                  
                  <Link to="">
                  <li className="hover:shadow py-2 hover:bg-black hover:text-gray-100">
                  <a href="">Setting</a>
                  </li>
                  </Link> */}
                  
                  <li onClick={handleSignout} className="btn btn-danger hover:shadow py-2 hover:bg-black hover:text-gray-100">
                  <div>Sign Out</div>
                  </li>
                
                  
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;