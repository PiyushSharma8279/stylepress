import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Jones",
    role: "Fashion Blogger",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Absolutely love the designs! The material and fit are perfect. Definitely my favorite online store now.",
  },
  {
    name: "Mark Allen",
    role: "Creative Director",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
    text: "The customer service is top-notch, and the products exceeded my expectations. Stylish and affordable!",
  },
  {
    name: "Emma Watson",
    role: "Entrepreneur",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Beautiful craftsmanship and attention to detail. I always get compliments when I wear your products!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#fafafa] text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Our Customers Say</h2>
      <div className="w-24 h-[2px] bg-black mx-auto mb-12"></div>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300"
          >
            <FaQuoteLeft className="text-4xl text-gray-300 mx-auto mb-6" />
            <p className="text-gray-600 mb-8 leading-relaxed italic">“{t.text}”</p>
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full border-2 border-black mb-3"
              />
              <h4 className="font-semibold text-lg text-black">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
