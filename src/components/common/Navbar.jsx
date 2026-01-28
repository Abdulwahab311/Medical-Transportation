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
  User,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext"; // ✅ Import AuthContext

const Navbar = () => {
  const { isAuthenticated, role } = useAuth(); // ✅ Get auth state
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

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)}>
              <button
                onClick={() => setServicesOpen(false)}
                className="flex items-center gap-1 px-4 py-2 font-medium transition-all duration-300 hover:text-[#4B5BD7] hover:bg-transparent"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-3 w-96 rounded-xl shadow-xl border transition-all duration-300 origin-top z-50 ${
                  servicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                } ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
              >
                {services.map((service, i) => (
                  <Link
                    key={i}
                    to={service.link}
                    onClick={() => setServicesOpen(false)}
                    className={`flex gap-4 px-6 py-4 transition-all duration-300 ${
                      darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-[#F7F9FC] text-gray-800"
                    }`}
                  >
                    <div className="text-[#3ECFB2]">{service.icon}</div>
                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-[#6B7280]"}`}>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact us */}
            <Link
              to="/contact-us"
              className="relative px-4 py-2 font-medium transition-all duration-300 hover:text-[#4B5BD7] hover:-translate-y-0.5"
            >
              Contact Us
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

            {/* ✅ Conditional Button */}
            {!isAuthenticated && (
              <Link
                to="/login"
                className="hidden md:flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-[#4B5BD7] hover:scale-105 transition-transform duration-300"
              >
                Sign In
              </Link>
            )}

{isAuthenticated && role === "user" && (
  <div className="hidden md:flex items-center gap-3">
    {/* Profile Icon */}
    <Link
      to="/profile"
      className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
        darkMode
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-white text-[#4B5BD7] hover:bg-gray-100"
      }`}
      title="Profile"
    >
      <User size={22} />
    </Link>

    {/* Book a Ride */}
    <Link
      to="/booking"
      className="flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-[#FF7A6C] hover:scale-105 transition-transform duration-300"
    >
      Book a Ride
    </Link>
  </div>
)}


            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-3 rounded-xl ${darkMode ? "bg-gray-800 text-white" : "bg-white text-[#4B5BD7]"}`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden border-t ${
            darkMode
              ? "bg-[#1F2937] border-gray-800 text-white"
              : "bg-[#F7F9FC] border-gray-200 text-[#1F2937]"
          }`}
        >
          <div className="flex flex-col px-4 py-5 space-y-2 font-medium">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">
              Home
            </Link>

            <Link to="/how-it-works" onClick={() => setOpen(false)} className="py-2">
              How It Works
            </Link>

            <Link to="/caregivers" onClick={() => setOpen(false)} className="py-2">
              For Caregivers
            </Link>

            <Link to="/about" onClick={() => setOpen(false)} className="py-2">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="pt-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between py-2 font-semibold"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-2 flex flex-col space-y-2">
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      to={service.link}
                      onClick={() => {
                        setServicesOpen(false);
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <div className="text-[#3ECFB2]">{service.icon}</div>
                      <p className="font-semibold">{service.title}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact-us" onClick={() => setOpen(false)} className="py-2">
              Contact Us
            </Link>

            {/* ✅ Mobile Conditional Button */}
            {!isAuthenticated && (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-4 flex justify-center rounded-xl bg-[#4B5BD7] py-3 font-semibold text-white"
              >
                Sign In
              </Link>
            )}

{isAuthenticated && (
  <Link
    to="/profile"
    onClick={() => setOpen(false)}
    className="mt-2 flex items-center justify-center gap-2 rounded-xl border py-3 font-semibold dark:border-gray-700"
  >
    <User size={18} />
    Profile
  </Link>
)}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
