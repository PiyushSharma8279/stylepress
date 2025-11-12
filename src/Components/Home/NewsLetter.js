import React from "react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-500 text-white text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Subscribe to get updates on new arrivals, exclusive offers, and more!
        </p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 px-4 py-3 rounded-full focus:outline-none text-black"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
