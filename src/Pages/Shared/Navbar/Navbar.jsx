import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("in nav", user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className="text-red-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bookings">My Bookings</NavLink>
                  </li>
                </>
              ) : (
                <div className="flex">
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Register">Register</NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="w-16 ml-4" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            {user?.email ? (
              <>
                <li>
                  <NavLink
                    to="/"
                    className="text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookings">My Bookings</NavLink>
                </li>
              </>
            ) : (
              <div className="flex">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/Register">Register</NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/appoint"
            class="group relative inline-block overflow-hidden border border-primary px-8 py-1 focus:outline-none focus:ring"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500"></span>

            <span class="relative text-sm font-medium text-primary transition-colors group-hover:text-white">
              Appointment
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
