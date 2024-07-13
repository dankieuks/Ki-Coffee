import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <main className="grid grid-cols-6  col-span-6 items-center  bg-gray-100">
      <div className="col-span-3">d</div>
      <section className="col-span-3 bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <header className="grid grid-cols-2 text-center mb-6 border-b-2">
          <Link
            to="/login"
            onClick={() => setIsSignIn(true)}
            className={`  py-2 font-semibold border-r-2 ${
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
            className={` py-2 font-semibold border-l-2 ${
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
          <p>Or {isSignIn ? "Sign in" : "Sign up"} with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/google-logo.png"
                alt="Google"
              />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
                alt="Apple"
              />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/cancel.png"
                alt="Cancel"
              />
            </button>
          </div>
        </footer>
        <footer className="mt-6 text-center text-gray-500 text-sm">
          <a href="#" className="hover:underline">
            Learn user licence agreement
          </a>
        </footer>
      </section>
    </main>
  );
}

export default Auth;
