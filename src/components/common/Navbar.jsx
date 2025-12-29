import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Ambulance,
  Plane,
  MapPin,
  Phone,
  Heart,
  Shield,
  User,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("themeChange"));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const services = [
    {
      icon: <Ambulance size={22} />,
      title: "Ground Medical Transport",
      description: "Advanced life support ambulances with 24/7 availability",
      link: "/services/ground",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Plane size={22} />,
      title: "Air Ambulance",
      description: "Rapid emergency air transport for critical cases",
      link: "/services/air",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin size={22} />,
      title: "State-to-State Transport",
      description: "Long-distance medical transfers with expert care",
      link: "/services/state",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield size={22} />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance support and billing",
      link: "/services/insurance",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-gradient-to-r from-blue-50 via-white to-cyan-50 border-blue-300"
      } shadow-lg fixed w-full z-50 border-b transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden
                ${
                  darkMode
                    ? "bg-gray-800"
                    : "bg-gradient-to-br from-blue-600 to-cyan-600"
                }`}
              >
                <Ambulance
                  size={28}
                  className="text-white relative z-10 animate-pulse"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span
                className={`text-xl md:text-2xl font-bold tracking-tight ${
                  darkMode ? "text-white" : "text-blue-900"
                }`}
              >
                Medical Transport
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
                <Heart size={12} className="text-red-600" />
                Care in Motion
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {/* Services */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                  darkMode
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-blue-900 hover:bg-blue-100"
                }`}
              >
                <span className="relative z-10">Services</span>
                <ChevronDown
                  size={16}
                  className={`relative z-10 transform transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-3 w-96 rounded-2xl shadow-2xl overflow-hidden border transform transition-all duration-500 ${
                  servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-4"
                } ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-blue-200 shadow-blue-100"
                }`}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className={`flex items-start gap-4 px-6 py-5 border-b last:border-b-0 transition-all duration-300 relative overflow-hidden ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-700 hover:text-blue-400 text-white"
                        : "border-blue-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 text-blue-900"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${service.color} p-3 rounded-xl text-white shadow-md transform transition-all duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-bold text-lg mb-1 transition-colors`}
                      >
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/booking"
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                darkMode
                  ? "text-gray-200 hover:bg-gray-800"
                  : "text-blue-900 hover:bg-blue-100"
              }`}
            >
              Book Now
            </Link>
            <Link
              to="/about"
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                darkMode
                  ? "text-gray-200 hover:bg-gray-800"
                  : "text-blue-900 hover:bg-blue-100"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                darkMode
                  ? "text-gray-200 hover:bg-gray-800"
                  : "text-blue-900 hover:bg-blue-100"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Emergency */}
            <a
              href="tel:911"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg transform hover:scale-105
              bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
            >
              <Phone size={18} className="animate-pulse" />
              Emergency: 911
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl shadow-md transition-all duration-500 transform hover:rotate-180 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-200' 
                  : 'bg-blue-100 text-blue-900'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Sign Up */}
            <Link
              to="/signup"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg transform hover:scale-105
              bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
            >
              <User size={18} />
              Sign Up
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-3 rounded-xl shadow-md ${
                darkMode 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-blue-100 text-blue-900'
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-gradient-to-b from-blue-50 to-white border-blue-300"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link
            to="/"
            className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              darkMode
                ? "text-white hover:bg-gray-800"
                : "text-blue-900 hover:bg-blue-100"
            }`}
          >
            Home
          </Link>
          <Link
            to="/booking"
            className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              darkMode
                ? "text-white hover:bg-gray-800"
                : "text-blue-900 hover:bg-blue-100"
            }`}
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              darkMode
                ? "text-white hover:bg-gray-800"
                : "text-blue-900 hover:bg-blue-100"
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              darkMode
                ? "text-white hover:bg-gray-800"
                : "text-blue-900 hover:bg-blue-100"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              darkMode
                ? "text-white hover:bg-gray-800"
                : "text-blue-900 hover:bg-blue-100"
            }`}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;