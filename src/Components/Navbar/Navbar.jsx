import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import Login from "../../Pages/authentication/Login";
import { useUser } from "../../Provider/UserProvider";

const Navbar = () => {
  const { user, signOut } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // const handleLinkClick = () => {
  //   setIsDropdownOpen(false); // Close the dropdown
  // };

  const navOptions = (
    <>
      <li className="btn btn-glass hover:underline hover:text-cyan-300">
        <Link to="/">Home</Link>
      </li>
    
      {user && (
        <li className="btn btn-glass hover:underline hover:text-cyan-300">
          <Link to="/admin">Admin</Link>
        </li>
      )}
    </>
  );
  const navDropOptions = (
    <>
      <li className="btn btn-glass hover:underline hover:text-cyan-300">
        <Link to="/">Home</Link>
      </li>
    
      {user ? (
        <li className="btn btn-glass hover:underline hover:text-cyan-300">
          <div onClick={signOut}>Sign Out</div>
        </li>
      ):(
        <li className="btn btn-glass hover:underline hover:text-cyan-300">
          <Link to="/login">Sign In</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-[1000] bg-slate-50 flex h-[70px] px-8 items-center justify-between">
      {/* Navbar Start */}
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
              className="menu menu-sm dropdown-content bg-slate-200 absolute rounded-box z-[1000] mt-3 w-40 p-2 shadow"
            >
              <ul className="font-serif space-y-2">{navDropOptions}</ul>
            </ul>
          )}
        </div>
        <div className="navbar-end ">
        <div className="block lg:hidden text-2xl font-bold text-with-gradient lg:text-2xl">
          Circuit House
        </div>
        </div>
        <div className="hidden lg:block text-2xl font-bold text-with-gradient lg:text-2xl">
          Circuit House
        </div>
      </div>

      {/* Navbar Center */}
      {/* <div className="navbar-center hidden lg:flex items-center">
        
      </div> */}

      {/* Navbar End */}
      <div className="navbar-end">
        <ul className="hidden font-semibold text-lg lg:flex menu-horizontal px-1 gap-10">
        
          {navOptions}
       
          {user ? (
            <div
              onClick={signOut}
              className="btn btn-glass hover:underline hover:text-cyan-300"
            >
              Sign Out
            </div>
          ) : (
            <li className="relative">
              <div
                onClick={() => setShowLoginForm(!showLoginForm)}
                className="btn btn-glass hover:underline hover:text-cyan-300 px-4"
              >
                Sign In
              </div>
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
          )}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;