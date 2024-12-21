import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';
import Login from '../../Pages/authentication/Login';
import { useUser } from "../../Provider/UserProvider";

const Navbar = () => {
  const { user, loading, error, signOut } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  console.log("showLoginForm",showLoginForm);

 

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false); // Close the dropdown
  };

  const navOptions = (
    <>
      <li onClick={handleLinkClick}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={handleLinkClick}>
        <Link to="/room">Room</Link>
      </li>
      {/* <li onClick={handleLinkClick}>
        <Link to="/matches">Guest</Link>
      </li> */}
      <li onClick={handleLinkClick}>
        <Link to="/Food">Food</Link>
      </li>

      {user && ( 
      <li onClick={handleLinkClick}>
        <Link to="/guest-list">Our Guests</Link>
      </li>
      )}

      {user && user.role === 'NDC' && ( 
      <li onClick={handleLinkClick}>
        <Link to="/staff-approval">Staffs</Link>
      </li>
      )}
      {user && ( // Restrict profile to logged-in users
        <li onClick={handleLinkClick}>
          <Link to="/profile">Profile</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 px-10 rounded-2xl flex gap-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            onClick={handleDropdownToggle}
            className="btn btn-ghost lg:hidden"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            > */}
              {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              /> */}
            {/* </svg> */}
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box absolute w-52"
            >
              {navOptions}
            </ul>
          )}
        </div>
        <a className="text-2xl font-bold text-with-gradient lg:text-2xl">
          Circuit House
        </a>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold text-lg menu-horizontal px-1">{navOptions}</ul>
      </div> */}
      <div className="navbar-end">
        <ul className="hidden font-semibold text-lg lg:flex menu-horizontal px-1 gap-10">
          {navOptions}
          {user  ? (
            <>
              <button onClick={signOut} className="btn ml-24">
              Sign Out
              </button>
            </>
          ) : (
            <>
              <li className='relative'>
                  <button  onClick={() => setShowLoginForm(!showLoginForm)} className="btn px-4 ml-24">Sign In</button>
                  {showLoginForm && (
                    <div className="absolute top-full p-4 shadow-lg z-10 w-80 bg-teal-50 mb-4 rounded-lg">
                      <Login setShowLoginForm={setShowLoginForm} />
                    </div>
                  )}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;