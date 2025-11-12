import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white text-center py-24">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          We’d love to hear from you — whether it’s feedback, questions, or collaborations.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/20"></div>
      </section>

      {/* Contact Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 py-20 px-6 md:px-20 bg-[#f8f8f8] text-center">
        <div className="flex flex-col items-center space-y-4 bg-white shadow-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
          <FaPhoneAlt className="text-3xl text-black" />
          <h3 className="font-semibold text-xl text-black">Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
          <p className="text-gray-600">Mon - Sat, 10am - 6pm</p>
        </div>

        <div className="flex flex-col items-center space-y-4 bg-white shadow-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
          <FaEnvelope className="text-3xl text-black" />
          <h3 className="font-semibold text-xl text-black">Email</h3>
          <p className="text-gray-600">support@stylepress.in</p>
          <p className="text-gray-600">sales@stylepress.in</p>
        </div>

        <div className="flex flex-col items-center space-y-4 bg-white shadow-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
          <FaMapMarkerAlt className="text-3xl text-black" />
          <h3 className="font-semibold text-xl text-black">Address</h3>
          <p className="text-gray-600">StylePress HQ</p>
          <p className="text-gray-600">New Delhi, India</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Send us a Message</h2>
        <div className="w-24 h-[2px] bg-black mx-auto mb-8"></div>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px]">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.7953161982!2d77.06889741531796!3d28.527582020884938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ef4f3c3e6fb%3A0x3f15f8fca4a843a7!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699366190456!5m2!1sen!2sin"
          className="w-full h-full border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
      <Footer/>
    </>
  );
}
