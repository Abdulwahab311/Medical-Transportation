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
  Heart,
  Shield,
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
    window.dispatchEvent(new Event("themeChange"));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const services = [
    {
      icon: <Ambulance size={22} />,
      title: "Ground Medical Transport",
      description: "Advanced life support ambulances with trained staff",
      link: "/services/ground-medical-transport",
    },
    {
      icon: <Plane size={22} />,
      title: "Air Ambulance",
      description: "Rapid air transport for critical care cases",
      link: "/services/air-ambulance",
    },
    {
      icon: <MapPin size={22} />,
      title: "Long Distance Transfers",
      description: "State-to-state medical transportation",
      link: "/services/long-distance-transfer",
    },
    {
      icon: <Shield size={22} />,
      title: "Insurance Assistance",
      description: "Billing and insurance coordination support",
      link: "/services/insurance-assistance",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 font-inter transition-all duration-300
      backdrop-blur-md border-b shadow-sm
      ${darkMode ? "bg-[#1F2937]/95 border-gray-800 text-white" : "bg-[#F7F9FC]/95 border-gray-200 text-[#1F2937]"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
                darkMode ? "bg-gray-800" : "bg-[#4B5BD7]"
              }`}
            >
              <Ambulance size={26} className="text-white" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-[#4B5BD7]">
                Medical Transport
              </span>
              <span className="text-xs text-[#6B7280] flex items-center gap-1">
                <Heart size={12} className="text-[#FF7A6C]" />
                Care in Motion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {[ 
              { label: "Home", to: "/" },
              { label: "How It Works", to: "/how-it-works" },
              { label: "For Caregivers", to: "/caregivers" },
              { label: "About Us", to: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="relative px-4 py-2 font-medium transition-all duration-300 hover:text-[#4B5BD7] hover:-translate-y-0.5"
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown after About Us */}
<div
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  
>
  <button
    className="flex items-center gap-1 px-4 py-2 font-medium hover:text-[#4B5BD7] transition-all duration-300 hover:-translate-y-0.5"
  >
    Services
    <ChevronDown
      size={16}
      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
    />
  </button>

  <div
    className={`absolute left-0 mt-3 w-96 rounded-xl shadow-xl border transition-all duration-300 origin-top
    ${servicesOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
    ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
  >
    {services.map((service, i) => (
      <Link
        key={i}
        to={service.link}
        onClick={(e) => e.stopPropagation()} // Prevent hover close on click
        className="flex gap-4 px-6 py-4 transition-all duration-300 hover:bg-[#F7F9FC] dark:hover:bg-gray-700"
      >
        <div className="text-[#3ECFB2]">{service.icon}</div>
        <div>
          <h3 className="font-semibold">{service.title}</h3>
          <p className="text-sm text-[#6B7280] dark:text-gray-300">{service.description}</p>
        </div>
      </Link>
    ))}
  </div>
</div>

            {/* Support */}
            <Link
              to="/support"
              className="relative px-4 py-2 font-medium transition-all duration-300 hover:text-[#4B5BD7] hover:-translate-y-0.5"
            >
              Support
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-transform duration-300 hover:rotate-180 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-[#4B5BD7]"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/booking"
              className="hidden md:flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-[#FF7A6C] hover:scale-105 transition-transform duration-300"
            >
              Book a Ride
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-3 rounded-xl ${darkMode ? "bg-gray-800 text-white" : "bg-white text-[#4B5BD7]"}`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
