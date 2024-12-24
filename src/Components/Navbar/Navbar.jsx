import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';
import Login from '../../Pages/authentication/Login';
import { useUser } from "../../Provider/UserProvider";

const Navbar = () => {
  const { user,signOut } = useUser();
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
      <li className='btn btn-glass hover:underline hover:text-cyan-300'>
        <Link to="/">Home</Link>
      </li>
      <li className='btn btn-glass hover:underline hover:text-cyan-300'>
        <Link to="/room">Room</Link>
      </li>
      {/* <li onClick={handleLinkClick}>
        <Link to="/matches">Guest</Link>
      </li> */}
      <li className='btn btn-glass hover:underline hover:text-cyan-300'> 
        <Link to="/Food">Food</Link>
      </li>

      {user && ( 
      <li className='btn btn-glass hover:underline hover:text-cyan-300'>
        <Link to="/guest-list">Our Guests</Link>
      </li>
      )}

      {user && user.role === 'NDC' && ( 
      <li className='btn btn-glass hover:underline hover:text-cyan-300' onClick={handleLinkClick}>
        <Link to="/staff-approval">Staffs</Link>
      </li>
      )}
      {user && ( // Restrict profile to logged-in users
        <li className='btn btn-glass hover:underline hover:text-cyan-300' onClick={handleLinkClick}>
          <Link to="/profile">Profile</Link>
        </li>
      )}
    </>
  );

  const navDropOptions = (
    <>
      <li className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]">
        <Link to="/">Home</Link>
      </li>
      <li className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]">
        <Link to="/room">Room</Link>
      </li>
      <li className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]">
        <Link to="/Food">Food</Link>
      </li>
      {user && (
        <li className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]">
          <Link to="/guest-list">Our Guests</Link>
        </li>
      )}
      {user && user.role === "NDC" && (
        <li
          className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]"
          onClick={handleLinkClick}
        >
          <Link to="/staff-approval">Staffs</Link>
        </li>
      )}
      {user && (
        <li
          className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]"
          onClick={handleLinkClick}
        >
          <Link to="/profile">Profile</Link>
        </li>
      )}
      <ul className="text-base">
        {user ? (
          <li
            onClick={signOut}
            className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]"
          >
            Sign Out
          </li>
        ) : (
          <li className="relative z-[1000]">
            <Link
              to="/login"
              className="btn btn-glass hover:underline hover:text-cyan-300 z-[1000]"
            >
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </>
  );
  


  return (
    <div className="navbar sticky top-0 z-[1000] bg-base-100 flex h-[70px] px-8 items-center justify-between">
      <div className="navbar-start flex items-center gap-2">
      <div className="dropdown">
  <div
    tabIndex={0}
    role="button"
    onClick={handleDropdownToggle}
    className="btn btn-ghost lg:hidden"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </div>
  {isDropdownOpen && (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-gray-500 absolute rounded-box z-[1000] mt-3 w-40 p-2 shadow"
    >
      <ul className="font-serif space-y-2">{navDropOptions}</ul>
    </ul>
  )}
</div>

        <div className="hidden lg:block text-2xl font-bold text-with-gradient lg:text-2xl">
          Circuit House
        </div>
      </div>

      <div className="navbar-center hidden lg:flex items-center">
        <ul className="flex items-center justify-between gap-10 font-semibold text-lg px-1">
          {navOptions}
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="hidden font-semibold text-lg lg:flex menu-horizontal px-1 gap-10">
          {user ? (
            <>
              <button
                onClick={signOut}
                className="btn btn-glass hover:underline hover:text-cyan-300 ml-24"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <li className="relative">
                <button
                  onClick={() => setShowLoginForm(!showLoginForm)}
                  className="btn btn-glass hover:underline hover:text-cyan-300 px-4 ml-24"
                >
                  Sign In
                </button>
                {showLoginForm && (
                  <div
                    className="fixed top-16 right-4 z-[9999] w-full max-w-xs p-4 shadow-lg bg-teal-50 rounded-lg"
                    style={{
                      transform: "translate(0, 0)",
                    }}
                  >
                    <Login setShowLoginForm={setShowLoginForm} />
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="block lg:hidden navbar-end flex-shrink-0">
        <div
          className="text-2xl font-bold text-with-gradient lg:text-2xl flex-shrink-0"
          style={{ minWidth: "150px" }}
        >
          Circuit House
        </div>
      </div>
    </div>

    // new nav
  );
};

export default Navbar;