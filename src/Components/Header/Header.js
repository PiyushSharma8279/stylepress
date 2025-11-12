import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className=" fixed top-0 right-0 left-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 border-b border-gray-200 bg-slate-100">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={()=> navigate('/')}>
                <div className="bg-black text-white font-bold italic text-2xl px-3 py-1">
                    stylepress
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8 text-[17px] font-semibold text-black">
                <p onClick={() => navigate('/')} className=" cursor-pointer">Home</p>
                <p onClick={() => navigate('/oversized-tshirts')} className=" cursor-pointer">OverSized Tshirts</p>
                <p onClick={() => navigate('/regular-tshirts')} className=" cursor-pointer">Regular Tshirts</p>
                <p onClick={() => navigate('/contact-us')} className=" cursor-pointer">Contact</p>
                <a href="#">My Account</a>
                <p onClick={() => navigate('/return-policy')} className=" cursor-pointer">Return Policy</p>
            </nav>

            {/* Right Section (Cart + Menu) */}
            <div className="flex items-center space-x-6">
                <div className="font-semibold text-black text-[17px]">
                    cart <span className="font-normal text-gray-600">(0)</span>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl text-black md:hidden"
                >
                    <FiMenu />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-50">
                    
                    <p onClick={() => navigate('/')} className=" cursor-pointer">Home</p>
                    <p onClick={() => navigate('/oversized-tshirts')} className=" cursor-pointer">OverSized Tshirts</p>
                    <p onClick={() => navigate('/regular-tshirts')} className=" cursor-pointer">Regular Tshirts</p>
                    <p onClick={() => navigate('/contact-us')} className=" cursor-pointer">Contact</p>
                </div>
            )}
        </header>
    );
}


