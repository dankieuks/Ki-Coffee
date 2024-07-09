import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center py-4  lg:py-2 shadow-md md:px-[12.5%] bg-white space-x-4">
      <Link to="/" className="flex items-center">
        <button className="flex items-center space-x-2 px-3 text-white bg-red-500 py-2 rounded-lg hover:bg-red-600">
          <FaHome className="text-xl" />
          <span>TRANG CHỦ</span>
        </button>
      </Link>
      <Link to="/sale" className="flex items-center">
        <button className="text-red-500 border-2 border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
          SALE 7.7
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
