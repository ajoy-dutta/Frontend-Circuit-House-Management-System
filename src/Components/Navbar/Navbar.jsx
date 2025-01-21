import { useState } from "react";
import "./navbar.css";
import Login from "../../Pages/authentication/Login";
import { useUser } from "../../Provider/UserProvider";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Footer/joyful.png";
import LoginDrop from "../../Pages/authentication/Login2";

const Navbar = () => {
  const { user, signOut } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDropLoginForm, setShowDropLoginForm] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  

  const navOptions = (
    <>
      {user && (
        <li>
          <NavLink
            to="/room"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/room_details"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/conferenceRoom"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Conference Hall
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/visitJashore"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Visit Jashore
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/honor-board"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Honor Board
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help-line"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Help Line
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/media"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
          onClick={handleDropdownToggle}
        >
          Media
        </NavLink>
      </li>
      
    </>
  );

  const navDropOptions = (
    <>
    <li >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
          onClick={handleDropdownToggle}
        >
          Home
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/room"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
            }
            onClick={handleDropdownToggle}
          >
            Dashboard
          </NavLink>
        </li>
      )}

      <li >
        <NavLink
          to="/room_details"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
          onClick={handleDropdownToggle}
        >
          Rooms
        </NavLink>
      </li>
      <li >
        <NavLink
          to="/conferenceRoom"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
          onClick={handleDropdownToggle}
        >
          Conference Hall
        </NavLink>
      </li>

      <li >
        <NavLink
          to="/visitJashore"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
          onClick={handleDropdownToggle}
        >
          Visit Jashore
        </NavLink>
      </li>

      {/* <li >
        <NavLink
          to="/honor-board"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Honor Board
        </NavLink>
      </li> */}

      <li >
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
          onClick={handleDropdownToggle}
        >
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/help-line"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
          onClick={handleDropdownToggle}
        >
          Help Line
        </NavLink>
      </li>
     
      
      
      {user ? (
        <div onClick={handleDropdownToggle}>
        <li className=" hover:text-cyan-400  cursor-pointer">
          <div onClick={signOut}>Sign Out</div>
        </li>
        </div>
      ) : (
        <li className="relative">
          <div
            onClick={() => {
              handleDropdownToggle(); 
              setShowDropLoginForm(!showDropLoginForm);
            }}
          >
            Sign In
          </div>
        </li>
      )}

    </>
  );

  return (
    <div className="navbar sticky top-0 z-[1000] bg-slate-50 flex h-[50px] px-4 items-center justify-between">
      <div className="navbar-start w-full flex items-center gap-2">
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
              <ul className="font-serif space-y-4 p-2 text-lg font-semibold">
                {navDropOptions}
              </ul>
            </ul>
          )}

         {showDropLoginForm && (
            <div
            style={{
              position: "fixed",
              top: "50px",
              left: "0",
              right: "0",
              width: "300px",
              background: "#E6FFFA", 
              zIndex: 9999,
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <LoginDrop setShowDropLoginForm={setShowDropLoginForm} />
          </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <div className="hidden lg:block text-xl font-bold text-with-gradient md:text-2xl whitespace-nowrap">
            <NavLink to="/">
              <div className="flex items-center justify-center gap-2">
                <img className="w-[30px]" src={logo} />
                <div className="text-lg">
                  Circuit House
                </div>
              </div>
            </NavLink>
          </div>
          <div className="nav-start px-4  w-3/4">
            <ul className="hidden md:flex lg:flex lg:justify-between items-center font-normal font-serif px-1 gap-8 whitespace-nowrap">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-end w-1/5">
        <ul className="hidden font-normal font-serif text-lg lg:flex menu-horizontal px-1 gap-10 whitespace-nowrap overflow-x-auto">
          {user ? (
            <div
              onClick={signOut}
              className=" hover:text-cyan-400 cursor-pointer"
            >
              Sign Out
            </div>
          ) : (
            <li className="relative">
              <div
                onClick={() => setShowLoginForm(!showLoginForm)}
                className=" hover:text-cyan-400 px-4 cursor-pointer"
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