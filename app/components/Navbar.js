import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar home-bg">
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
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ml-10">
            <span className="text-white">SRITECH</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ml-12">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-white">Home</a>
            </li>
            <li>
              <a className="text-white">About Us</a>
            </li>
            <li>
              <a className="text-white">Contact</a>
            </li>
            <li>
              <a className="text-white">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
