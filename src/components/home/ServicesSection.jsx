import {
  Ambulance,
  Plane,
  MapPin,
  Shield,
  ArrowRight,
  Heart,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import groundImage from "../../assets/images/ground.png";
import airImage from "../../assets/images/air.jpg"; 
import longImage from "../../assets/images/long.jpg"




const services = [
  {
    icon: <Ambulance size={28} />,
    title: "Ground Medical Transport",
    desc: "24/7 advanced life support ambulances with trained paramedics.",
    image: groundImage,
    colorLight: "from-[#4B5BD7] to-[#3ECFB2]",
    colorDark: "from-[#4B5BD7] to-[#3ECFB2]",
    path: "/services/ground-medical-transport",
  },
  {
    icon: <Plane size={28} />,
    title: "Air Ambulance",
    desc: "Rapid emergency air transfer for critical patients.",
    image:  airImage,
    colorLight: "from-[#4B5BD7] to-[#3ECFB2]",
    colorDark: "from-[#4B5BD7] to-[#3ECFB2]",
    path: "/services/air-ambulance",
  },
  {
    icon: <MapPin size={28} />,
    title: "Long Distance Transfer",
    desc: "Safe State-to-State medical transport across regions.",
    image: longImage,
    colorLight: "from-[#4B5BD7] to-[#3ECFB2]",
    colorDark: "from-[#4B5BD7] to-[#3ECFB2]",
    path: "/services/long-distance-transfer",
  },
  {
    icon: <Shield size={28} />,
    title: "Insurance Assistance",
    desc: "Complete insurance coordination & documentation support.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    colorLight: "from-[#4B5BD7] to-[#3ECFB2]",
    colorDark: "from-[#4B5BD7] to-[#3ECFB2]",
    path: "/services/insurance-assistance",
  },
];


const stats = [
  { icon: <Heart size={24} />, number: "10K+", label: "Patients Served" },
  { icon: <Clock size={24} />, number: "24/7", label: "Available" },
  { icon: <Shield size={24} />, number: "100%", label: "Insured" },
];

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(Math.floor((progress / duration) * end), end);
      setCount(value);
      if (progress < duration) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
      setDarkMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  useEffect(() => setIsVisible(true), []);

  return (
    <div className={`relative transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-[#F7F9FC]"}`}>
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">

{/* Background Glow */}
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[#3ECFB2]/20 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl bg-[#4B5BD7]/20 animate-pulse-slow" />


          {/* Header */}
          <div className={`mb-20 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4B5BD7] to-[#3ECFB2] animate-gradient-x">
                Our Medical Services
              </span>
            </h1>

            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-white" : "text-[#6B7280]"}`}>
              Professional medical transportation solutions designed to provide
              rapid, safe, and compassionate care when you need it most
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group rounded-3xl overflow-hidden backdrop-blur-sm border transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode
                    ? "bg-gray-800/40 border-[#3ECFB2]/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.colorLight} opacity-20`} />
                </div>

                <div className="p-6 text-left">
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-[#1F2937]"}`}>
                    {service.title}
                  </h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-[#6B7280]"} text-sm mb-5`}>
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Learn More */}
                    <Link
  to={service.path}
  className={`flex items-center gap-2 text-sm font-semibold cursor-pointer transition-all duration-300 ${
    hoveredIndex === i ? "translate-x-1" : ""
  } ${darkMode ? "text-[#3ECFB2]" : "text-[#4B5BD7]"}`}
>
  Learn More
  <ArrowRight
    size={16}
    className={`transition-transform duration-300 ${
      hoveredIndex === i ? "translate-x-1" : ""
    }`}
  />
</Link>


                    {/* Book Now */}
                    <button
                      className="text-sm font-semibold px-4 py-2 rounded-full bg-[#FF7A6C] text-white
                      transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A6C]/40"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
