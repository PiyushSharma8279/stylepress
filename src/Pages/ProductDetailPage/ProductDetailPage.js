import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useCart } from "../../Context/CartContext";

export default function ProductDetails() {
  const { state: product } = useLocation();
  const { addToCart } = useCart();

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!size || !color) {
      alert("Please select both size and color!");
      return;
    }

    setLoading(true);

    const templateParams = {
      product_name: product.name,
      price: product.price,
      size,
      color,
      to_email: "your_email@example.com", // replace with your receiving email
    };

    try {
      await emailjs.send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_public_key"
      );
      setSuccess(true);
    } catch (error) {
      console.error("Email error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!size || !color) {
      alert("Please select both size and color before adding to cart!");
      return;
    }
    addToCart(product, size, color);
    alert("🛒 Added to cart successfully!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gray-400 line-through">₹{product.oldPrice}</span>
              <span className="text-2xl font-bold text-black">₹{product.price}</span>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Select Size</label>
              <div className="flex space-x-3">
                {["S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 border rounded-md ${
                      size === s ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Select Color</label>
              <div className="flex space-x-3">
                {["Black", "White", "Gray"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 border rounded-md ${
                      color === c ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={sendEmail}
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
              >
                {loading ? "Processing..." : "Buy Now"}
              </button>
            </div>

            {success && (
              <p className="mt-4 text-green-600 font-medium">
                ✅ Order sent successfully! We’ll contact you soon.
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
