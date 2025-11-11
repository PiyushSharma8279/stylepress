import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function SingleProduct() {
  return (
    <section className="py-20 bg-[#f7f7f7] text-center">
         <h2 className="text-4xl md:text-5xl font-bold text-black">Our Last item</h2>
      <div className="w-24 h-[2px] bg-black mx-auto my-4"></div>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit.
      </p>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Product Image */}
        <div className="relative group">
          <img
            src="https://hyperon.qodeinteractive.com/wp-content/uploads/2018/02/main-featured-4.jpg"
            alt="Bad Shirt"
            className="w-full h-[550px] object-cover rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-105"
          />

          {/* Arrows (decorative) */}
          <div className="absolute inset-y-0 left-2 flex items-center">
            <div className="bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition">
              <span className="text-xl font-bold">‹</span>
            </div>
          </div>
          <div className="absolute inset-y-0 right-2 flex items-center">
            <div className="bg-white shadow-md p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition">
              <span className="text-xl font-bold">›</span>
            </div>
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          {/* Price */}
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-gray-400 line-through text-lg">105₹</span>
            <span className="text-black font-bold text-2xl">79₹</span>
          </div>

          {/* Product Title */}
          <h2 className="text-4xl font-bold text-black mb-2 uppercase tracking-tight">
            bad shirt
          </h2>

          {/* Rating */}
          <div className="flex mb-5 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>

          {/* Add to Cart Button */}
          <button className="bg-black text-white uppercase px-8 py-3 font-semibold tracking-wide hover:bg-gray-800 transition">
            add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
