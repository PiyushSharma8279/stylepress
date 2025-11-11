import React from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Red Tee",
    image:
      "https://hyperon.qodeinteractive.com/wp-content/uploads/2018/02/main-1.jpg",
     price: 699,
    oldPrice: 799,
  },
  {
    id: 2,
    name: "Screaming Head",
    image:
      "https://hyperon.qodeinteractive.com/wp-content/uploads/2018/02/mainhome-shopitem-img4.png",
    sale: true,
     price: 699,
    oldPrice: 799,
  },
  {
    id: 3,
    name: "Skater Snoopy",
    image:
      "https://hyperon.qodeinteractive.com/wp-content/uploads/2018/02/mainhome-shopitem-img2.png",
    price: 699,
    oldPrice: 799,
  },
  {
    id: 4,
    name: "Minimal Black Tee",
    image:
      "https://hyperon.qodeinteractive.com/wp-content/uploads/2018/02/mainhome-shopitem-img1.png",
    price: 699,
    oldPrice: 799,
  },
  {
    id: 5,
    name: "Vintage Hoodie",
    image:
      "https://hyperon.qodeinteractive.com/wp-content/uploads/2018/02/mainhome-shopitem-img6.png",
    sale: true,
     price: 699,
    oldPrice: 799,
  },
  {
    id: 6,
    name: "Skater Snoopy 2",
    image:
      "https://hyperon.qodeinteractive.com/wp-content/uploads/2018/02/mainhome-shopitem-img5.png",
     price: 699,
    oldPrice: 799,
  },
];

export default function TrendingItems() {
  return (
    <section className="py-20 bg-[#f8f8f8] text-center">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-black">Trending Items</h2>
      <div className="w-24 h-[2px] bg-black mx-auto my-4"></div>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            {/* Sale Badge */}
            {product.sale && (
              <div className="absolute top-2 right-2 bg-black text-white text-xs uppercase px-3 py-1 z-10">
                sale
              </div>
            )}

            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-4 bg-white py-3 px-6 rounded-full shadow-lg">
                  <FaEye className="text-xl text-black cursor-pointer hover:scale-110 transition-transform" />
                  <FaHeart className="text-xl text-black cursor-pointer hover:scale-110 transition-transform" />
                  <FaShoppingCart className="text-xl text-black cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

              {/* Prices */}
              <div className="flex justify-center items-center space-x-3">
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.oldPrice}
                </span>
                <span className="text-black text-lg font-bold">
                  ₹{product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
