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

    setTimeout(() => setIsVisible(true), 100); // trigger animation

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
      className={`relative py-24 transition-colors duration-500 overflow-hidden ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-b from-white via-blue-50/30 to-white"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
            darkMode ? "bg-red-500/10" : "bg-blue-100/20"
          }`}
        />
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float ${
            darkMode ? "bg-blue-500/10" : "bg-blue-200/20"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float-delayed ${
            darkMode ? "bg-purple-500/10" : "bg-blue-100/20"
          }`}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent animate-slide" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent animate-slide-reverse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Emergency Badge */}
        <div
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 border-2 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          } ${
            darkMode
              ? "border-white/30 bg-white/10 text-white"
              : "border-blue-200 bg-blue-50 text-blue-600"
          }`}
        >
          <div className="relative">
            <Heart
              size={18}
              className={darkMode ? "text-white animate-heartbeat" : "text-blue-600 animate-heartbeat"}
            />
            <div className="absolute inset-0 animate-ping">
              <Heart
                size={18}
                className={darkMode ? "text-white/50" : "text-blue-400 opacity-50"}
              />
            </div>
          </div>
          <span className="font-semibold text-sm">Emergency Care Available</span>
        </div>

        {/* Main Heading */}
        <h2
          className={`text-5xl md:text-6xl font-extrabold mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${darkMode ? "text-white" : "text-blue-700"}`}
        >
          Need Emergency
          <br />
          <span className="relative inline-block">
            Medical Transport?
            <div
              className={`absolute -bottom-2 left-0 w-full h-3 -skew-x-12 animate-pulse-slow ${
                darkMode ? "bg-white/20" : "bg-blue-100"
              }`}
            />
          </span>
        </h2>

        {/* Subheading */}
        <p
          className={`mb-10 text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${darkMode ? "text-white/80" : "text-blue-700/90"}`}
        >
          Our expert response team is standing by 24/7 to provide life-saving care.
          <br />
          <span className="font-semibold">One call away from immediate help.</span>
        </p>

        {/* Features Bar */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-blue-200 bg-blue-50 text-blue-600"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="animate-pulse">{feature.icon}</div>
              <span className="font-semibold text-sm">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="tel:911"
            className={`group relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-500 hover:scale-110 overflow-hidden ${
              darkMode
                ? "bg-gray-700 text-white hover:shadow-white/30"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
            />
            <div className="relative z-10">
              <div className="relative">
                <Phone
                  className={`group-hover:rotate-12 transition-transform duration-300 ${
                    darkMode ? "text-white" : "text-white"
                  }`}
                  size={28}
                />
                <div className="absolute inset-0 animate-ping opacity-50">
                  <Phone
                    size={28}
                    className={darkMode ? "text-white/50" : "text-blue-300"}
                  />
                </div>
              </div>
            </div>
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              Call Emergency: 911
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </a>
          <p className={`mt-6 text-sm animate-pulse-slow ${darkMode ? "text-white/70" : "text-blue-700/70"}`}>
            Average response time: <span className="font-bold">Under 8 minutes</span>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full animate-bounce ${
                darkMode ? "bg-white/30" : "bg-blue-200"
              }`}
              style={{ animationDelay: `${i * 200}ms`, animationDuration: "1.5s" }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-30px) scale(1.1); }
        }
        @keyframes float-delayed {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-30px,30px) scale(1.1); }
        }
        @keyframes pulse-slow {0%,100%{opacity:1;}50%{opacity:0.6;}}
        @keyframes heartbeat {0%,100%{transform:scale(1);}25%{transform:scale(1.2);}50%{transform:scale(1);}}
        @keyframes slide {0%{transform:translateX(-100%);}100%{transform:translateX(100%);}}
        @keyframes slide-reverse {0%{transform:translateX(100%);}100%{transform:translateX(-100%);}}
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
        .animate-slide { animation: slide 3s linear infinite; }
        .animate-slide-reverse { animation: slide-reverse 3s linear infinite; }
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(0,0,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
