import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-20 border-b border-base-200">
      <div className="flex-1">
        <a className="text-xl text-[#244D3F]">
          <span className="font-bold">Keen</span>Keeper
        </a>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#244D3F] text-white font-bold"
                    : "hover:bg-gray-100 text-gray-600"
                }`
              }
            >
              <span>🏠 Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#244D3F] text-white font-bold"
                    : "hover:bg-gray-100 text-gray-600"
                }`
              }
            >
              <span>🕒 Timeline</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#244D3F] text-white font-bold"
                    : "hover:bg-gray-100 text-gray-600"
                }`
              }
            >
              <span className="flex items-center gap-2">📈 Stats</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
