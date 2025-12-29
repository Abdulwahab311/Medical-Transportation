import React, { useState, useEffect } from "react";
import { Star, Quote, Heart, Shield, Award } from "lucide-react";

const reviews = [
  { 
    name: "Sarah Khan", 
    text: "The paramedics arrived within minutes and provided exceptional care during transport. Professional and compassionate team!",
    rating: 5,
    service: "Ground Transport"
  },
  { 
    name: "Ahmed Raza", 
    text: "Best medical transport service I've experienced. Clean ambulances, state-of-the-art equipment, and caring staff.",
    rating: 5,
    service: "Air Ambulance"
  },
  { 
    name: "John Smith", 
    text: "Highly trained staff who handled my emergency with expertise. They made a stressful situation much easier to manage.",
    rating: 5,
    service: "State Transfer"
  },
];

const stats = [
  { icon: <Heart size={24} />, value: "98%", label: "Patient Satisfaction" },
  { icon: <Shield size={24} />, value: "24/7", label: "Emergency Response" },
  { icon: <Award size={24} />, value: "15+", label: "Years Experience" },
];

const RatingsSection = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [activeCard, setActiveCard] = useState(null);

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
      if (e.key === "theme") {
        setDarkMode(e.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const handleThemeChange = () => {
      const theme = localStorage.getItem("theme");
      setDarkMode(theme === "dark");
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return (
    <section
      className={`relative py-24 transition-colors duration-500 overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-b from-white via-blue-50/30 to-white"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-float ${
            darkMode ? "bg-blue-500/10" : "bg-blue-200/20"
          }`}
        />
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float-delayed ${
            darkMode ? "bg-indigo-500/10" : "bg-indigo-200/20"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 border ${
              darkMode
                ? "bg-blue-500/20 border-blue-400/50 text-blue-300"
                : "bg-blue-100 border-blue-300 text-blue-600"
            }`}
          >
            <Heart size={18} className="animate-pulse" />
            <span className="text-sm font-semibold">Patient Testimonials</span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-extrabold mb-6 leading-tight`}
          >
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode 
                  ? "from-blue-400 via-blue-500 to-blue-600" 
                  : "from-blue-600 via-blue-500 to-blue-700"
              }`}
            >
              Trusted by Thousands
            </span>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Don't just take our word for it — hear from the patients and families 
            who've experienced our life-saving care
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800/60 border-blue-500/30 hover:border-blue-400/60"
                  : "bg-white/80 border-blue-200 hover:border-blue-400 shadow-lg"
              }`}
            >
              <div className={`mb-3 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              className={`relative group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                darkMode 
                  ? "bg-gray-800/80 hover:bg-gray-800" 
                  : "bg-white hover:bg-blue-50/50 shadow-xl hover:shadow-2xl"
              } ${activeCard === i ? "scale-105" : ""}`}
              style={{
                boxShadow: activeCard === i 
                  ? darkMode 
                    ? "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                    : "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                  : ""
              }}
            >
              <div className={`absolute top-6 right-6 opacity-20 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                <Quote size={48} />
              </div>

              <div
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 ${
                  darkMode
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-blue-100 text-blue-700 border border-blue-300"
                }`}
              >
                {review.service}
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`transition-all duration-300 ${
                      activeCard === i ? "scale-110" : ""
                    } ${
                      darkMode 
                        ? "fill-blue-400 text-blue-400" 
                        : "fill-blue-600 text-blue-600"
                    }`}
                    size={20}
                  />
                ))}
              </div>

              <p
                className={`text-base leading-relaxed mb-6 relative z-10 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    darkMode
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p
                    className={`font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {review.name}
                  </p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Verified Patient
                  </p>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 rounded-b-3xl ${
                  activeCard === i ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Join thousands of satisfied patients who trust us with their care
          </p>
          <button
            className={`group px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl"
            }`}
          >
            <span className="flex items-center gap-2">
              Share Your Experience
              <Heart size={20} className="group-hover:scale-110 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.1); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default RatingsSection;
