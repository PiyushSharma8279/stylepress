import React from "react";
import Header from "../Header/Header";


export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden mt-16">
      

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/pretty-woman-white-blouse-looks-lace-table-brunette-lady-beige-shirt-pants-posing-designer-office_197531-27461.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <div className="uppercase tracking-widest text-sm mb-4">from ₹299</div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-wide">
          ready to wear
        </h1>
        <button className="mt-8 border-b-2 border-white text-sm uppercase tracking-widest hover:opacity-80 transition">
          shop now
        </button>
      </div>

      {/* Floating Side Buttons */}
      <div className="absolute right-6 bottom-24 flex flex-col space-y-4 z-20">
        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition">
          ❤️
        </button>
        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition">
          🛒
        </button>
      </div>
    </div>
  );
}
