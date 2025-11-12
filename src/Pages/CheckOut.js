import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


export default function Checkout() {
  const { state: product } = useLocation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    landmark: "",
    payment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!form.firstName || !form.lastName || !form.address || !form.payment) {
      alert("Please fill all required fields!");
      return;
    }
    alert("✅ Order placed successfully!");
  };

  

const { state } = useLocation();
const { items = [], total = 0 } = state || {};

  return (
    <>
      <Header />
      <section className="bg-gray-50 min-h-screen py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left - Billing Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Billing Details</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name *"
                  onChange={handleChange}
                  className="w-1/2 border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name *"
                  onChange={handleChange}
                  className="w-1/2 border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <input
                type="text"
                value="India"
                disabled
                className="w-full border p-3 rounded-md bg-gray-100"
              />

              <input
                type="text"
                name="address"
                placeholder="Street address *"
                onChange={handleChange}
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />

              <input
                type="text"
                name="landmark"
                placeholder="Landmark *"
                onChange={handleChange}
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />

              {/* Payment Options */}
              <div>
                <h3 className="font-semibold mt-4 mb-2">Payment Method</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="UPI"
                      onChange={handleChange}
                    />
                    <span>UPI / Online Payment</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      onChange={handleChange}
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="bg-white border p-6 rounded-md shadow-sm h-fit">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Your Order</h2>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Product:</span>
              <span>{product?.name}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Size:</span>
              <span>{product?.size}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Color:</span>
              <span>{product?.color}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹{product?.price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-3">
              <span>Total:</span>
              <span>₹{product?.price}</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
