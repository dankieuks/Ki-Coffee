import { SlMenu } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import logo4 from "../../../Assets/logo4.png";

function Header() {
  const [cartCount, setCartCount] = useState(11);
  const items = [
    {
      to: "/",
      label: "Trang Chủ",
    },
    {
      to: "/Menu",
      label: "Menu",
    },
    {
      to: "/khuyen-mai",
      label: "Khuyến mãi",
    },
    {
      to: "/tin-tức",
      label: "Tin tứic",
    },
  ];

  return (
    <header className="grid grid-cols-6 px-[2.5%] md:grid-cols-9 gap-x-4  py-4 lg:py-2 shadow-md bg-red-800  md:px-[12.5%]">
      <div className="col-span-3  md:col-span-2 md:gap-x-11 text-3xl  text-white  opacity-90 flex items-center justify-start ">
        <Link className="flex flex-col items-center opacity-80  ">
          <SlMenu className="font-semibold ml-4 md:ml-0" />
          <p className="text-sm hidden  lg:block">Menu</p>
        </Link>
        <img
          src={logo4}
          alt="logo"
          className="ml-2   h-[40px] md:h-[50px] md:ml-0"
        />
      </div>

      <div className="col-span-1 md:col-span-5 px-4 flex items-center justify-center  ml-14">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full py-2  px-5 pr-10 rounded-lg border text-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden lg:block"
            placeholder="Tìm sản phẩm..."
          />
          <AiOutlineSearch className="absolute right-[-1px]  md:right-3 md:top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl  " />
        </div>
      </div>
      <nav className="col-span-2 md:col-span-2 px-4 flex items-center justify-center  text-2xl text-white opacity-80">
        <Link
          to="/"
          className="flex flex-col items-center opacity-80 py-1 px-3 md:border-l"
        >
          <AiOutlineUser />
          <p className="text-sm hidden xl:block">Tài khoản</p>
        </Link>
        <Link className="flex flex-col items-center  border-0 px-3  md:border-l opacity-80">
          <div className="relative">
            <BsCart2 className="text-3xl opacity-80" />
            {cartCount > 0 && (
              <span className="absolute top-[-5px] right-[-10px] inline-flex items-center justify-center px-1 py-1 text-xs font-semibold leading-none text-yellow-400 bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <p className="text-sm hidden xl:block">Giỏ hàng</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
