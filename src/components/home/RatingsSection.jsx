import React, { useState, useEffect } from "react";
import {
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Headphones,
} from "lucide-react";

const trustBadges = [
  { icon: <Shield size={22} />, text: "HIPAA-Compliant Handling" },
  { icon: <CheckCircle size={22} />, text: "Trained & Verified Drivers" },
  { icon: <Heart size={22} />, text: "Sanitized Vehicles" },
  { icon: <Clock size={22} />, text: "On-Time Service" },
  { icon: <Headphones size={22} />, text: "Customer Support Availability" },
];

const RatingsSection = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    handleThemeChange();
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`relative py-24 transition-colors duration-500 overflow-hidden font-inter ${
        darkMode ? "bg-gray-900" : "bg-[#F7F9FC]"
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* TRUST & SAFETY */}
        <div className="text-center mb-14">
          <h3
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Trust & Safety
          </h3>
          <p
            className={`max-w-2xl mx-auto text-base ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Industry-leading standards to ensure safety, reliability, and peace of mind
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className={`group p-6 rounded-2xl border flex flex-col items-center gap-4
              transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-gray-800 border-[#3ECFB2]/30 hover:border-[#3ECFB2]/60"
                  : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  darkMode
                    ? "bg-[#3ECFB2]/20 text-[#3ECFB2]"
                    : "bg-[#3ECFB2]/15 text-[#3ECFB2]"
                }`}
              >
                {badge.icon}
              </div>

              {/* Text */}
              <p
                className={`text-sm font-semibold text-center leading-snug ${
                  darkMode ? "text-gray-200" : "text-black"
                }`}
              >
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
