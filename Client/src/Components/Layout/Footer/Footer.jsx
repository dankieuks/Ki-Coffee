import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className=" col-span-6 bg-gray-800 text-white py-8">
      <div className=" px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Liên hệ</h3>
            <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
            <p>Email: contact@example.com</p>
            <p>Điện thoại: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Liên kết nhanh</h3>
            <ul>
              <li>
                <a href="/" className="hover:underline">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 Công ty TNHH ABC. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
