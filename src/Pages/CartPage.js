import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cart.length === 0)
    return (
      <>
        <Header />
        <h2 className="text-center text-2xl py-20">🛒 Your cart is empty!</h2>
        <Footer />
      </>
    );

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ✅ Navigate to checkout with all cart items + size + color
  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          size: item.size,
          color: item.color,
          quantity: item.quantity || 1,
        })),
        total,
      },
    });
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 md:px-24">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

          {/* 🛍️ Cart Items */}
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Size: <span className="font-medium">{item.size}</span> | Color:{" "}
                    <span className="font-medium">{item.color}</span>
                  </p>
                  <p className="font-medium text-gray-800">
                    ₹{item.price} × {item.quantity || 1}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id, item.size, item.color)}
                className="text-red-500 hover:text-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* 🧾 Summary + Checkout */}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold">Total: ₹{total}</h2>

            <div className="space-x-3">
              <button
                onClick={clearCart}
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Clear Cart
              </button>

              <button
                onClick={handleCheckout}
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
