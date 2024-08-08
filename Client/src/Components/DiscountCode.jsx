import { MdDiscount } from "react-icons/md";
import React from "react";
import Slider from "react-slick";

function DiscountCode() {
  const vouchers = [
    { code: "VC10K", description: "Nhập mã VC10K vào mục Thanh toán" },
    { code: "VC20K", description: "Nhập mã VC20K vào mục Thanh toán" },
    { code: "VC30K", description: "Nhập mã VC30K vào mục Thanh toán" },
    { code: "VC40K", description: "Nhập mã VC40K vào mục Thanh toán" },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 6500,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 395,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15%",
        },
      },
    ],
  };

  return (
    <>
      <div className=" flex items-center mt-[50px] font-bold py-2 text-xl text-zinc-800">
        <MdDiscount className="text-red-600" />
        <h1> Ưu đãi của bạn</h1>
      </div>
      <Slider {...settings}>
        {vouchers.map((voucher, index) => (
          <div key={index} className="px-2">
            <nav className=" w-[190px] lg:w-[280px] p-2 border border-red-500 rounded-md">
              <h1 className="text-lg font-semibold">Voucher {voucher.code}</h1>
              <p className="hidden lg:block mb-2 text-sm">
                {voucher.description}
              </p>
              <div className="grid grid-cols-3 bg-slate-50 p-1 rounded-md">
                <h1 className="col-span-2 font-bold text-gray-800">
                  {voucher.code}
                </h1>
                <button className="bg-red-500 text-white rounded-md px-2 py-1">
                  Lưu
                </button>
              </div>
            </nav>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default DiscountCode;
