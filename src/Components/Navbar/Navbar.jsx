import { useState } from "react";
import "./navbar.css";
import Login from "../../Pages/authentication/Login";
import { useUser } from "../../Provider/UserProvider";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, signOut } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const navOptions = (
    <>
      {user && (
        <li className="btn btn-glass">
          <NavLink
            to="/admin/room"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li className="btn btn-glass">
        <NavLink
          to="/room"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Room
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/conferenceRoom"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Conference Room
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/visitJahore"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Visit Jashore
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/honor-board"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Honor Board
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const navDropOptions = (
    <>
      <li className="btn btn-glass">
        <NavLink
          to="/room"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Room
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/conferenceRoom"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Conference Room
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/visitJahore"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Visit Jashore
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/honor-board"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Honor Board
        </NavLink>
      </li>
      <li className="btn btn-glass">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
          }
        >
          Contact
        </NavLink>
      </li>
      {user ? (
        <li className="btn btn-glass hover:text-cyan-400">
          <div onClick={signOut}>Sign Out</div>
        </li>
      ) : (
        <li className="relative">
          <div
            onClick={() => setShowLoginForm(!showLoginForm)}
            className="btn btn-glass hover:text-cyan-400"
          >
            Sign In
          </div>
          {showLoginForm && (
            <div
              className="fixed top-28 left-4 z-[9999] w-full max-w-xs p-4 shadow-lg bg-teal-50 rounded-lg"
              style={{
                transform: "translate(0, 0)",
              }}
            >
              <Login setShowLoginForm={setShowLoginForm} />
            </div>
          )}
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-[1000] bg-slate-50 flex h-[70px] px-8 items-center justify-between">
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
              <ul className="font-serif space-y-4 p-2 text-lg font-semibold">
                {navDropOptions}
              </ul>
            </ul>
          )}
        </div>
        <div className="navbar-end ">
          <NavLink to="/">
            <div className="block lg:hidden text-2xl font-bold text-with-gradient lg:text-2xl">
              Circuit House
            </div>
          </NavLink>
        </div>

        <div className="flex items-center justify-center gap-10">
          <div className="hidden lg:block text-2xl font-bold text-with-gradient lg:text-2xl">
            <NavLink to="/"> Circuit House </NavLink>
          </div>

          <div className="nav-start ">
            <ul className="hidden md:flex items-center text-lg font-normal font-serif menu-horizontal px-1 gap-8">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <ul className="hidden font-normal font-serif text-lg lg:flex menu-horizontal px-1 gap-10">
          {user ? (
            <div
              onClick={signOut}
              className="btn btn-glass hover:text-cyan-400"
            >
              Sign Out
            </div>
          ) : (
            <li className="relative">
              <div
                onClick={() => setShowLoginForm(!showLoginForm)}
                className="btn btn-glass hover:text-cyan-400 px-4"
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
