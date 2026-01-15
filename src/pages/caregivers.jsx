import React, { useState, useEffect } from "react";
import { Users, MapPin, Clock, AlertCircle } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const caregiversFeatures = [
  {
    icon: <Users size={28} className="text-[#4B5BD7]" />,
    title: "Manage Multiple Patients",
    desc: "Easily switch between patients and manage ride requests for each.",
  },
  {
    icon: <MapPin size={28} className="text-[#3ECFB2]" />,
    title: "Save Frequent Locations",
    desc: "Quickly access commonly used pickup and drop-off addresses.",
  },
  {
    icon: <Clock size={28} className="text-[#FF7A6C]" />,
    title: "Ride History & Upcoming Rides",
    desc: "Track past rides and view scheduled rides at a glance.",
  },
  {
    icon: <AlertCircle size={28} className="text-[#FBBF24]" />,
    title: "Emergency Contact Configuration",
    desc: "Set up emergency contacts for every patient for added safety.",
  },
];

const Caregivers = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

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
      <Navbar />

      {/* Page Wrapper */}
      <div
  className={`min-h-screen pt-24 transition-colors duration-500 ${
    darkMode ? "bg-gray-900 text-white" : "bg-[#F7F9FC] text-[#1F2937]"
  }`}
>
      
      
        <div
          className={`max-w-6xl mx-auto px-4 py-20 font-inter transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >

          {/* Header */}
          <header className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4B5BD7] mb-4">
              Caregiver & Elderly-Focused Features
            </h1>
            <p
  className={`text-lg max-w-2xl mx-auto text-center ${
    darkMode ? "text-gray-300" : "text-[#6B7280]"
  }`}
>
              Simplify transportation management and ensure comfort, safety, and
              peace of mind for your patients.
            </p>
          </header>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {caregiversFeatures.map((feature, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group rounded-3xl p-8 backdrop-blur-sm border transition-all duration-700
                  hover:-translate-y-3 hover:shadow-2xl
                  ${
                    darkMode
                      ? "bg-gray-800/40 border-[#3ECFB2]/30"
                      : "bg-white border-gray-200"
                  }
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <div className="mb-5 transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-[#6B7280]"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <a
              href="/services/ground-medical-transport"
              className="inline-block px-10 py-4 rounded-full text-lg font-semibold
              bg-[#FF7A6C] text-white transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A6C]/40"
            >
              Schedule a Ride
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Caregivers;
