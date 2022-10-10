import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <div className="navbar  w-10/12 mx-auto ">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <Link className="mx-3 text-xl font-semibold" to="/course">
              Home
            </Link>
            <Link className="mx-3 text-xl font-semibold" to="/recharts">
              Statistics
            </Link>
            <Link className="mx-3 text-xl font-semibold" to="/blog">
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
