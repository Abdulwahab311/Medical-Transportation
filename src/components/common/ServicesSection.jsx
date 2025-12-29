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

const services = [
  {
    icon: <Ambulance size={28} />,
    title: "Ground Medical Transport",
    desc: "24/7 advanced life support ambulances with trained paramedics.",
    image:
      "https://images.unsplash.com/photo-1582719366846-7a0ebb53af7b?w=800&q=80",
    colorLight: "from-red-600 to-red-700",
    colorDark: "from-red-500 to-red-600",
  },
  {
    icon: <Plane size={28} />,
    title: "Air Ambulance",
    desc: "Rapid emergency air transfer for critical patients.",
    image:
      "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&q=80",
    colorLight: "from-red-600 to-red-700",
    colorDark: "from-red-500 to-red-600",
  },
  {
    icon: <MapPin size={28} />,
    title: "State-to-State Transfer",
    desc: "Safe long-distance medical transport across regions.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    colorLight: "from-red-600 to-red-700",
    colorDark: "from-red-500 to-red-600",
  },
  {
    icon: <Shield size={28} />,
    title: "Insurance Assistance",
    desc: "Complete insurance coordination & documentation support.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    colorLight: "from-red-600 to-red-700",
    colorDark: "from-red-500 to-red-600",
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

    // Listen for storage changes (when theme changes in Navbar)
    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        setDarkMode(e.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Also listen for custom event from same window
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`relative transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900"
          : "bg-white"
      }`}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-float ${
            darkMode ? "bg-red-500/10" : "bg-red-200/10"
          }`}
        />
        <div
          className={`absolute top-40 right-40 w-96 h-96 rounded-full blur-3xl animate-float-delayed ${
            darkMode ? "bg-red-400/10" : "bg-red-300/10"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl animate-float-slow ${
            darkMode ? "bg-red-600/10" : "bg-red-400/10"
          }`}
        />
      </div>

      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 animate-pulse-slow border ${
                darkMode
                  ? "bg-red-500/20 border-red-400 text-red-300"
                  : "bg-red-100 border-red-300 text-red-600"
              }`}
            >
              <Heart size={18} className="animate-heartbeat" />
              <span className="text-sm font-semibold">Trusted Medical Care</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r animate-gradient-x ${
                  darkMode
                    ? "from-red-400 via-red-500 to-red-600"
                    : "from-red-600 via-red-500 to-red-700"
                }`}
              >
                Our Medical Services
              </span>
            </h1>

            <p
              className={`text-xl max-w-3xl mx-auto leading-relaxed mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Professional medical transportation solutions designed to provide
              rapid, safe, and compassionate care when you need it most
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, i) => {
                const numericValue =
                  parseInt(stat.number.replace(/\D/g, "")) || 0;
                const animatedCount = useCountUp(numericValue, 2000);

                let displayCount = "";
                if (stat.number.includes("K")) displayCount = `${animatedCount}K+`;
                else if (stat.number.includes("%")) displayCount = `${animatedCount}%`;
                else if (stat.number.includes("/")) displayCount = stat.number;
                else displayCount = animatedCount;

                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 backdrop-blur-sm border rounded-2xl px-6 py-4 hover:scale-105 transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-800/40 border-red-500/30 hover:bg-gray-700/40"
                        : "bg-white/20 border-gray-300 hover:bg-gray-100"
                    }`}
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <div className={`text-red-400`}>{stat.icon}</div>
                    <div className="text-left">
                      <div className={`text-${darkMode ? "white" : "gray-900"} text-2xl font-bold`}>
                        {displayCount}
                      </div>
                      <div className={darkMode ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-3xl overflow-hidden backdrop-blur-sm border transition-all duration-700 hover:scale-105 hover:-translate-y-3 ${
                  darkMode
                    ? "bg-gray-800/40 border-red-500/30"
                    : "bg-white/10 border-gray-300 hover:border-red-500/30"
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${i * 100 + 400}ms`,
                  boxShadow:
                    hoveredIndex === i
                      ? "0 25px 50px -12px rgba(220, 38, 38, 0.4)"
                      : "none",
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80";
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-white/70 to-transparent`} />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      darkMode ? service.colorDark : service.colorLight
                    } opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                  />
                  <div className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-700 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <div
                    className={`flex items-center gap-2 font-semibold text-sm cursor-pointer transition-all duration-500 text-red-600 ${
                      hoveredIndex === i ? "translate-x-2" : "translate-x-0"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        hoveredIndex === i ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                      darkMode ? service.colorDark : service.colorLight
                    } transition-all duration-700 ${
                      hoveredIndex === i ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <button
              className={`group relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 overflow-hidden ${
                darkMode
                  ? "bg-gradient-to-r from-red-500 to-red-600 hover:shadow-2xl hover:shadow-red-500/50 text-white"
                  : "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Emergency Help Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(30px,-30px) scale(1.1);}}
        @keyframes float-delayed {0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-30px,30px) scale(1.1);}}
        @keyframes float-slow {0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(20px,-40px) scale(1.05);}}
        @keyframes gradient-x {0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
        @keyframes heartbeat {0%,100%{transform:scale(1);}50%{transform:scale(1.1);}}
        @keyframes pulse-slow {0%,100%{opacity:1;}50%{opacity:0.8;}}
        @keyframes bounce-gentle {0%,100%{transform:translateY(0) scale(1.1) rotate(12deg);}50%{transform:translateY(-5px) scale(1.1) rotate(12deg);}}
        .animate-float {animation:float 8s ease-in-out infinite;}
        .animate-float-delayed {animation:float-delayed 10s ease-in-out infinite;}
        .animate-float-slow {animation:float-slow 12s ease-in-out infinite;}
        .animate-gradient-x {background-size:200% 200%; animation:gradient-x 3s ease infinite;}
        .animate-heartbeat {animation:heartbeat 1.5s ease-in-out infinite;}
        .animate-pulse-slow {animation:pulse-slow 3s ease-in-out infinite;}
        .animate-bounce-gentle {animation:bounce-gentle 1s ease-in-out infinite;}
        * {scroll-behavior:smooth;}
        ::-webkit-scrollbar {width:10px;}
        ::-webkit-scrollbar-track {background:#1e293b;}
        ::-webkit-scrollbar-thumb {background:linear-gradient(to bottom, #dc2626, #b91c1c); border-radius:5px;}
        ::-webkit-scrollbar-thumb:hover {background:linear-gradient(to bottom, #b91c1c, #991b1b);}
      `}</style>
    </div>
  );
};

export default ServicesSection;
