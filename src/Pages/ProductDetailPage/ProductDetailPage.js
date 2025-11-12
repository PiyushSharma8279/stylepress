import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useCart } from "../../Context/CartContext";

export default function ProductDetails() {
  const { state: product } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🛒 Add to Cart
  const handleAddToCart = () => {
    if (!size || !color) {
      alert("Please select both size and color before adding to cart!");
      return;
    }
    addToCart(product, size, color);
    alert("🛍️ Added to cart successfully!");
  };

  // 💳 Buy Now → Go to Checkout page
  const handleBuyNow = () => {
    if (!size || !color) {
      alert("Please select both size and color before proceeding!");
      return;
    }

    navigate("/checkout", {
      state: {
        ...product,
        size,
        color,
      },
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        No product found! Please go back.
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* 🖼️ Product Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* 🧾 Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              {product.oldPrice && (
                <span className="text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>
              )}
              <span className="text-2xl font-bold text-black">
                ₹{product.price}
              </span>
            </div>

            {/* Size Selection */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">
                Select Size
              </label>
              <div className="flex space-x-3">
                {["S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 border rounded-md transition ${
                      size === s
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">
                Select Color
              </label>
              <div className="flex space-x-3">
                {["Black", "White", "Gray"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 border rounded-md transition ${
                      color === c
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
