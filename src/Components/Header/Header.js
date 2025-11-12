import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); // 🛒 Get cart from context

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="bg-black text-white font-bold italic text-2xl px-3 py-1 rounded-md tracking-wide hover:bg-gray-900 transition">
          stylepress
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-[17px] font-semibold text-gray-800">
        <p onClick={() => navigate("/")} className="cursor-pointer hover:text-black transition">
          Home
        </p>
        <p
          onClick={() => navigate("/oversized-tshirts")}
          className="cursor-pointer hover:text-black transition"
        >
          OverSized Tshirts
        </p>
        <p
          onClick={() => navigate("/regular-tshirts")}
          className="cursor-pointer hover:text-black transition"
        >
          Regular Tshirts
        </p>
        <p
          onClick={() => navigate("/contact-us")}
          className="cursor-pointer hover:text-black transition"
        >
          Contact
        </p>
        <p
          onClick={() => navigate("/return-policy")}
          className="cursor-pointer hover:text-black transition"
        >
          Return Policy
        </p>
      </nav>

      {/* Right Section (Cart + Menu) */}
      <div className="flex items-center space-x-6">
        {/* Cart Icon with Count */}
        <div
          className="relative cursor-pointer group"
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart className="text-2xl text-gray-800 group-hover:text-black transition" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-black md:hidden"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-5 py-6 md:hidden z-50 text-gray-800 font-semibold text-lg">
          <p onClick={() => navigate("/")} className="cursor-pointer hover:text-black">
            Home
          </p>
          <p
            onClick={() => navigate("/oversized-tshirts")}
            className="cursor-pointer hover:text-black"
          >
            OverSized Tshirts
          </p>
          <p
            onClick={() => navigate("/regular-tshirts")}
            className="cursor-pointer hover:text-black"
          >
            Regular Tshirts
          </p>
          <p
            onClick={() => navigate("/contact-us")}
            className="cursor-pointer hover:text-black"
          >
            Contact
          </p>
          <p
            onClick={() => navigate("/return-policy")}
            className="cursor-pointer hover:text-black"
          >
            Return Policy
          </p>
        </div>
      )}
    </header>
  );
}
