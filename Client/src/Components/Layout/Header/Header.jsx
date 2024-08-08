import { BiTrash } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo4 from "../../../Assets/logo4.png";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
function Header() {
  const [state, setState] = useState({ right: false });
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
    },
  ]);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const product = {
    id: 1,
    name: "Sản phẩm 1",
    price: 100000,
  };
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {" "}
      <div className=" flex text-lg font-semibold p-3">
        Giỏ hàng : <h2 className="text-red-700 px-1">{cart.length}</h2> sản phẩm
      </div>
      <Divider />
      <List className="max-h-[500px] overflow-y-auto">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="flex justify-evenly py-1 ">
              <img
                src="https://product.hstatic.net/1000075078/product/1719929441_bo-sua-pmt_77e27a929b5340e5bc7b83bb1963f0eb_large.jpg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <div>
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
              </div>
              <div className="flex justify-between items-center gap-4 text-2xl">
                <AiFillPlusSquare />
                <BiTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFromCart(index)}
                />
              </div>
            </div>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="Giỏ hàng trống" />
          </ListItem>
        )}
      </List>
      <Divider />
      <div>
        <div className="flex justify-between items-center   p-2 bg-white shadow-md sticky bottom-0">
          <span className="text-lg font-semibold">Tổng tiền:</span>
          <span className="text-red-700 font-bold text-lg">
            {cart
              .reduce((total, item) => total + item.price, 0)
              .toLocaleString()}{" "}
            VND
          </span>
        </div>
        <Button sx={{ float: "right", margin: "10px " }} variant="contained">
          Thanh toán
        </Button>
      </div>
    </Box>
  );
  const items = [
    { to: "/", label: "Trang Chủ" },
    { to: "/Menu", label: "Menu" },
    { to: "/khuyen-mai", label: "Khuyến mãi" },
    { to: "/tin-tức", label: "Tin tức" },
  ];

  return (
    <header className="grid grid-cols-6 col-span-6 px-[2.5%]  py-3 md:grid-cols-9 gap-x-4 md:py-1 lg:py-2 shadow-md bg-blue-500 md:px-[12.5%]">
      <div className="col-span-3 md:col-span-2 md:gap-x-11 text-3xl text-white opacity-90 flex items-center justify-start">
        <Link className="flex flex-col items-center opacity-80">
          <SlMenu className="font-semibold ml-4 md:ml-0" />
          <p className="text-sm hidden lg:block">Menu</p>
        </Link>
        <img
          src={logo4}
          alt="logo"
          className="ml-2 h-[40px] md:h-[50px] md:ml-0"
        />
      </div>

      <div className="col-span-1 md:col-span-5 px-4 flex items-center justify-center ml-14">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full py-1 px-5 pr-10 rounded-lg border text-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden lg:block"
            placeholder="Tìm sản phẩm..."
          />
          <AiOutlineSearch className="absolute right-[-1px] md:right-3 md:top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
        </div>
      </div>
      <nav className="col-span-2 md:col-span-2 px-4 flex items-center justify-center text-2xl text-white opacity-80">
        <Link
          to="/login"
          className="flex flex-col items-center opacity-80 py-1 px-3 md:border-l"
        >
          <AiOutlineUser className="text-2xl opacity-80" />
          <p className="text-sm hidden xl:block">Tài khoản</p>
        </Link>
        <Link
          className="flex flex-col items-center border-0 px-3 md:border-l opacity-80"
          onClick={toggleDrawer("right", true)}
        >
          <div className="relative">
            <BsCart2 className="text-2xl opacity-80" />
            {(cart.length > 0 && 0) || (
              <span className="absolute top-[-5px] right-[-10px] inline-flex items-center justify-center px-1 py-1 text-xs font-semibold leading-none text-yellow-400 bg-red-600 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <p className="text-sm hidden xl:block">Giỏ hàng</p>
        </Link>

        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </nav>
    </header>
  );
}

export default Header;
