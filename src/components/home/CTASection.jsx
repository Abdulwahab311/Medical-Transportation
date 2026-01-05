import { Phone, Ambulance, Clock, Shield, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }

    const handleStorageChange = (e) => {
      if (e.key === "theme") setDarkMode(e.newValue === "dark");
    };

    const handleThemeChange = () => {
      const theme = localStorage.getItem("theme");
      setDarkMode(theme === "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChange", handleThemeChange);

    setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  const features = [
    { icon: <Clock size={20} />, text: "24/7 Availability" },
    { icon: <Ambulance size={20} />, text: "Rapid Response" },
    { icon: <Shield size={20} />, text: "Certified Paramedics" },
  ];

  return (
    <section
      className={`relative py-24 transition-colors duration-500 overflow-hidden font-inter ${
        darkMode ? "bg-gray-900" : "bg-[#F7F9FC]"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
            darkMode ? "bg-[#4B5BD7]/10" : "bg-[#3ECFB2]/15"
          }`}
        />
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float ${
            darkMode ? "bg-[#4B5BD7]/10" : "bg-[#4B5BD7]/15"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float-delayed ${
            darkMode ? "bg-[#3ECFB2]/10" : "bg-[#3ECFB2]/15"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 border transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          } ${
            darkMode
              ? "border-[#3ECFB2]/40 bg-white/10 text-white"
              : "border-[#3ECFB2] bg-white text-[#4B5BD7]"
          }`}
        >
          <Heart size={18} className="text-[#3ECFB2] animate-heartbeat" />
          <span className="font-semibold text-sm">Emergency Care Available</span>
        </div>

        {/* Heading */}
        <h2
          className={`text-5xl md:text-6xl font-extrabold mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${darkMode ? "text-white" : "text-[#1F2937]"}`}
        >
          Need Emergency
          <br />
          <span className="relative inline-block">
            Medical Transport?
            <span
              className={`absolute -bottom-2 left-0 w-full h-3 -skew-x-12 animate-pulse-slow ${
                darkMode ? "bg-white/20" : "bg-[#3ECFB2]/30"
              }`}
            />
          </span>
        </h2>

        {/* Subheading */}
        <p
          className={`mb-10 text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${darkMode ? "text-gray-300" : "text-[#6B7280]"}`}
        >
          Our expert response team is standing by 24/7 to provide life-saving care.
          <br />
          <span className="font-semibold text-[#4B5BD7]">
            One call away from immediate help.
          </span>
        </p>

        {/* Features */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`group flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer
                hover:-translate-y-1 hover:shadow-lg ${
                  darkMode
                    ? "border-[#3ECFB2]/40 bg-white/10 text-white hover:bg-white/20"
                    : "border-[#3ECFB2] bg-white text-[#4B5BD7] hover:bg-[#3ECFB2]/10"
                }`}
            >
              <span className="text-[#3ECFB2] group-hover:scale-110 transition-transform">
                {f.icon}
              </span>
              <span className="font-semibold text-sm">{f.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="tel:911"
          className="group inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-xl bg-[#FF7A6C] text-white transition-all duration-300
                     hover:scale-110 hover:shadow-2xl hover:shadow-[#FF7A6C]/40 active:scale-95"
        >
          <Phone
            size={28}
            className="group-hover:rotate-12 transition-transform"
          />
          Call Emergency: 911
        </a>

        <p
          className={`mt-6 text-sm animate-pulse-slow ${
            darkMode ? "text-gray-400" : "text-[#6B7280]"
          }`}
        >
          Average response time:{" "}
          <span className="font-bold">Under 8 minutes</span>
        </p>
      </div>
    </section>
  );
};

export default CTASection;

