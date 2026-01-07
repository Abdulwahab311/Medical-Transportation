import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const ContactUs = () => {
  // Observe dark mode from <html> class
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-[#F7F9FC] text-[#1F2937]"
        }`}
      >
          {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[#3ECFB2]/20" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl bg-[#4B5BD7]/20" />
      
        <div className="max-w-6xl mx-auto px-4 py-20 font-inter">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4B5BD7] mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] dark:text-gray-300">
              We’re here to assist you 24/7. Reach out to us via any of the methods below.
            </p>
          </header>

          {/* Contact Info Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div
              className={`flex items-start gap-4 p-6 rounded-xl shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <MapPin size={28} className="text-[#3ECFB2]" />
              <div>
                <h3 className="font-semibold text-[#4B5BD7] mb-1">Address</h3>
                <p>123 Medical Transport Ave, City, Country</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 p-6 rounded-xl shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <Phone size={28} className="text-[#FF7A6C]" />
              <div>
                <h3 className="font-semibold text-[#4B5BD7] mb-1">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 p-6 rounded-xl shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <Mail size={28} className="text-[#4B5BD7]" />
              <div>
                <h3 className="font-semibold text-[#4B5BD7] mb-1">Email</h3>
                <p>support@medic-trans.com</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 p-6 rounded-xl shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <Clock size={28} className="text-[#FBBF24]" />
              <div>
                <h3 className="font-semibold text-[#4B5BD7] mb-1">Working Hours</h3>
                <p>24/7 Availability</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-xl shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-2xl font-semibold text-[#4B5BD7] mb-6">Send Us a Message</h2>
            <form className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className={`p-4 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                    : "bg-[#F7F9FC] border-gray-300 text-[#1F2937] placeholder-gray-500"
                }`}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className={`p-4 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                    : "bg-[#F7F9FC] border-gray-300 text-[#1F2937] placeholder-gray-500"
                }`}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className={`p-4 rounded-lg border md:col-span-2 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                    : "bg-[#F7F9FC] border-gray-300 text-[#1F2937] placeholder-gray-500"
                }`}
                required
              />
              <textarea
                placeholder="Message"
                rows={5}
                className={`p-4 rounded-lg border md:col-span-2 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                    : "bg-[#F7F9FC] border-gray-300 text-[#1F2937] placeholder-gray-500"
                }`}
                required
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-[#FF7A6C] hover:scale-105 transition-transform duration-300 py-4 rounded-xl text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
