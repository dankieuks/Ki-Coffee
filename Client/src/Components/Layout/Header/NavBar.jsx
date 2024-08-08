import { CgMenuGridR } from "react-icons/cg";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const items = [
    { code: "VC10K", description: "Nhập mã VC10K vào mục Thanh toán" },
    { code: "VC20K", description: "Nhập mã VC20K vào mục Thanh toán" },
    { code: "VC30K", description: "Nhập mã VC30K vào mục Thanh toán" },
    { code: "VC40K", description: "Nhập mã VC40K vào mục Thanh toán" },
  ];
  return (
    <nav className=" col-span-6 flex flex-wrap items-center py-2 px-[2.5%] border-b-2 md:px-[12.5%] md:ml-0 lg:py-1 bg-white space-x-4">
      <Link to="/" className="flex items-center   md:mb-0 w-36">
        <button className="flex justify-center items-center w-full space-x-2 px-3 text-white bg-blue-500 py-1 rounded-lg hover:bg-red-600">
          <FaHome className="text-xl" />
          <span>TRANG CHỦ</span>
        </button>
      </Link>
      <Link to="/" className="flex items-center   md:mb-0 w-36">
        <button className="flex justify-center items-center w-full space-x-2 px-3 text-white bg-blue-500 py-1 rounded-lg hover:bg-red-600">
          <CgMenuGridR className="text-xl" />
          <span>MENU</span>
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
