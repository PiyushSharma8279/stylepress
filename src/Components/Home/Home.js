import React from "react";

export default function Home() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center mt-16 overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/hand-drawn-fashion-shop-pattern-background_23-2150849923.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        {/* Soft gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6">
        <p className="uppercase text-gray-300 tracking-[0.25em] text-sm mb-4">
          new season drop
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Timeless <span className="text-gray-300">Fashion</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          Redefine elegance with our handcrafted designs — effortless, bold, and
          made for the modern you.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Floating Side Buttons */}
      <div className="absolute right-6 bottom-24 flex flex-col space-y-4 z-30">
        <button className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          ❤️
        </button>
        <button className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          🛒
        </button>
      </div>
    </section>
  );
}
