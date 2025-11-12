import React, {  useEffect } from "react";
import { useCart } from "../Context/CartContext";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function CartPage() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return <h2 className="text-center text-2xl py-20">🛒 Your cart is empty!</h2>;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <Header/>
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Size: {item.size} | Color: {item.color}
                </p>
                <p className="font-medium">₹{item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id, item.size, item.color)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl font-semibold">Total: ₹{total}</h2>
          <div className="space-x-3">
            <button
              onClick={clearCart}
              className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Clear Cart
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            
            
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
