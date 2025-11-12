import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">StylePress</h2>
          <p className="text-gray-400 text-sm leading-6">
            Discover the latest trends and timeless designs crafted with passion. 
            Elevate your fashion sense with our exclusive collections.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><p onClick={()=> navigate('/oversized-tshirts')} className="hover:text-white cursor-pointer transition">OverSized Tshirts</p></li>
            <li><p onClick={()=> navigate('/regular-tshirts')} className="hover:text-white cursor-pointer transition">Regular Tshirts</p></li>
            <li><p onClick={()=> navigate('/contact-us')} className="hover:text-white cursor-pointer transition">Contact</p></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><p onClick={() => navigate('/return-policy')} className="hover:text-white transition cursor-pointer">Returns & Exchanges</p></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get updates on new arrivals, lookbooks, and exclusive offers.
          </p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-4 py-2 rounded-r-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaPinterestP /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} StylePress. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
