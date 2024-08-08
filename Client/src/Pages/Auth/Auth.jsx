import { AiOutlineCheckCircle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import authbanner from "../../Assets/authbanner.jpg";
function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <main className="flex justify-center items-center  md:my-7 ">
      <div className="grid grid-cols-7 lg:grid-cols-6 shadow-lg rounded-lg md:pb-0 lg:pb-6">
        <section className="md:col-span-3 lg:col-span-3 hidden md:block items-center justify-center h-[100%] rounded-lg">
          <img
            src={authbanner}
            alt=""
            className="lg:max-w-sm shadow-lg rounded-tl-lg "
          />
          <footer className="mt-8 px-4 text-gray-500 text-sm max-w-sm text-justify">
            <p className="hover:underline">QUYỀN LỢI THÀNH VIÊN</p>
            <p className="flex">
              <span className="pr-3 text-green-500 text-xl">
                <AiOutlineCheckCircle />
              </span>
              Mua hàng trên tất cả cơ sở cực dễ dàng, nhanh chóng nhiều chương
              trình ưu đãi hấp dẫn từ chúng tôi
            </p>
            <p className="flex">
              <span className="pr-3 text-green-500 text-xl">
                <AiOutlineCheckCircle />
              </span>
              Theo dõi chi tiết đơn hàng
            </p>
            <p className="flex">
              <span className="pr-3 text-green-500 text-xl">
                <AiOutlineCheckCircle />
              </span>
              Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi
            </p>
          </footer>
        </section>
        <section className=" col-span-7  md:col-span-4 lg:col-span-3  p-8 w-full max-w-sm  ">
          <header className="grid grid-cols-2 text-center mb-6 border-b-2  ">
            <Link
              to="/login"
              onClick={() => setIsSignIn(true)}
              className={`py-2 font-semibold border-r-2 ${
                isSignIn
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600"
              }`}
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              onClick={() => setIsSignIn(false)}
              className={`py-2 font-semibold border-l-2 ${
                !isSignIn
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600"
              }`}
            >
              Đăng Ký
            </Link>
          </header>
          {isSignIn ? <Login /> : <Register />}
          <footer className="mt-6 text-center text-gray-600">
            <p>Or {isSignIn ? "đăng nhập" : "đăng ký"} bằng</p>
            <div className="flex justify-center space-x-8 mt-2">
              <button className="flex items-center text-4xl rounded-full hover:translate-y-1">
                <FcGoogle />
                <p className="text-sm ml-1">Google</p>
              </button>
              <button className="flex items-center text-4xl rounded-full hover:translate-y-1">
                <SiFacebook className="text-blue-600" />
                <p className="text-sm ml-1">Facebook</p>
              </button>
            </div>
          </footer>
          <footer className="mt-8 text-center text-gray-500 text-sm">
            <a href="/" className="hover:underline">
              Learn user licence agreement
            </a>
          </footer>
        </section>
      </div>
    </main>
  );
}

export default Auth;
