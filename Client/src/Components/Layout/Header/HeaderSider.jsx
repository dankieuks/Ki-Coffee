import { BiPhoneCall } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { BiCoffeeTogo } from "react-icons/bi";
import React from "react";
import Slider from "react-slick";
import { FaShippingFast } from "react-icons/fa";

function HeaderSider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const sliderItems = [
    { text: "GIAO HÀNG TOÀN QUỐC", icon: <FaShippingFast /> },

    { text: "WAHA COFFEE --&-- QUA LÀ UỐNG !", icon: <BiCoffeeTogo /> },
    { text: "117 CỬA HÀNG KHẮP CẢ NƯỚC", icon: <FiMapPin /> },
    { text: "ĐẶT HÀNG: 1800.6936", icon: <BiPhoneCall /> },
    { text: "WAHA COFFEE --&-- QUA LÀ UỐNG !", icon: <BiCoffeeTogo /> },
  ];

  return (
    <Slider
      {...settings}
      className=" grid grid-cols-1 col-span-6 text-md text-white headerSide bg-blue-200"
    >
      {sliderItems.map((item, index) => (
        <div key={index} className="col-span-1 py-[2px] bg-gray-700 ">
          <p className="flex justify-center items-center">
            {" "}
            <span className="px-2">{item.icon}</span>
            {item.text}
          </p>
        </div>
      ))}
    </Slider>
  );
}

export default HeaderSider;
