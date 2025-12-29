import { Ambulance, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
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

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return (
    <footer
      className={`relative overflow-hidden py-16 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-blue-50 text-blue-800"
      }`}
    >
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 animate-float bg-blue-300/30 dark:bg-red-500/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-delayed bg-blue-200/20 dark:bg-purple-500/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2 animate-fadeIn">
            <Ambulance
              className={`transition-colors duration-500 ${
                darkMode ? "text-red-500" : "text-blue-500"
              }`}
            />
            <span
              className={`text-xl font-bold transition-colors duration-500 ${
                darkMode ? "text-white" : "text-blue-800"
              }`}
            >
              Medical Transport
            </span>
          </div>
          <p className="text-sm leading-relaxed transition-colors duration-500">
            Professional emergency & non-emergency medical transport services
            nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4
            className={`font-bold mb-2 transition-colors duration-500 ${
              darkMode ? "text-white" : "text-blue-800"
            }`}
          >
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Services", "Booking", "About Us", "Contact"].map((link, i) => (
              <li
                key={i}
                className="hover:underline hover:translate-x-1 transition-transform duration-300 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Care Info */}
        <div className="space-y-4">
          <h4
            className={`font-bold mb-2 transition-colors duration-500 ${
              darkMode ? "text-white" : "text-blue-800"
            }`}
          >
            Care in Motion
          </h4>
          <p className="text-sm flex items-center gap-2 transition-colors duration-500">
            <Heart
              className={`transition-colors duration-500 ${
                darkMode ? "text-red-500" : "text-red-600"
              }`}
              size={16}
            />
            Serving patients since 2010
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs mt-12 transition-colors duration-500">
        <span className={darkMode ? "text-gray-500" : "text-blue-600/70"}>
          © {new Date().getFullYear()} Medical Transport. All rights reserved.
        </span>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-20px) scale(1.05); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-20px,20px) scale(1.05); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
      `}</style>
    </footer>
  );
};

export default Footer;
