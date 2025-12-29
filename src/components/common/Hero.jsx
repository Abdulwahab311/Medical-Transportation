import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Phone,
  Ambulance,
  Heart,
  Activity,
  Zap,
} from "lucide-react";

/* ================= COUNT UP COMPONENT ================= */
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

/* ================= HERO SECTION ================= */
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

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

  const images = [
    "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((p) => (p + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <Clock size={20} />, text: "24/7 Emergency Response" },
    { icon: <Shield size={20} />, text: "Certified Medical Staff" },
    { icon: <Ambulance size={20} />, text: "Advanced Equipment" },
    { icon: <Star size={20} />, text: "5-Star Rated Service" },
  ];

  const stats = [
    {
      value: 15,
      suffix: "K+",
      label: "Patients Transported",
      icon: <Heart size={24} />,
    },
    {
      value: 99,
      suffix: ".8%",
      label: "Success Rate",
      icon: <CheckCircle size={24} />,
    },
    {
      value: 24,
      suffix: "/7",
      label: "Available Always",
      icon: <Clock size={24} />,
    },
    {
      value: 50,
      suffix: "+",
      label: "Medical Vehicles",
      icon: <Ambulance size={24} />,
    },
  ];

  return (
    <div
      className={`relative pt-20 overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-96 h-96 rounded-full filter blur-3xl opacity-40 animate-blob ${
            darkMode ? "bg-blue-900/20" : "bg-blue-100"
          }`}
        ></div>
        <div
          className={`absolute top-40 right-10 w-96 h-96 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000 ${
            darkMode ? "bg-blue-800/20" : "bg-blue-200"
          }`}
        ></div>
        <div
          className={`absolute -bottom-20 left-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000 ${
            darkMode ? "bg-blue-900/20" : "bg-blue-100"
          }`}
        ></div>

        {/* Animated Grid Lines */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent ${
            darkMode ? "via-blue-900/10" : "via-blue-50/30"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg border animate-slide-in-left ${
                darkMode
                  ? "bg-blue-900/30 text-blue-300 border-blue-800"
                  : "bg-blue-50 text-blue-700 border-blue-200"
              }`}
            >
              <Activity className="animate-pulse" size={18} />
              <span>Trusted Medical Transport Service Since 2010</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent animate-gradient">
                  Medical Transport
                </span>
                <br />
                <span className="text-gray-900 dark:text-white animate-text-shimmer">
                  When Every Second
                </span>
                <br />
                <span className="relative inline-block">
                  <span
                    className={`${
                      darkMode ? " text-blue-300 " : " text-blue-700 "
                    }`}
                  >
                    Counts
                  </span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-300">
                Professional emergency medical transportation services with
                advanced life support, experienced paramedics, and
                state-of-the-art equipment. Available 24/7 for all your medical
                transport needs across the nation.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up animation-delay-500">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-5 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 border group cursor-pointer animate-slide-in-up ${
                    darkMode
                      ? "bg-gray-800 border-blue-900/30"
                      : "bg-white border-blue-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`p-3 rounded-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md ${
                      darkMode
                        ? "text-blue-400 bg-blue-900/30"
                        : "text-blue-600 bg-blue-50"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <span
                    className={`text-sm font-bold transition-colors ${
                      darkMode
                        ? "text-gray-200 group-hover:text-blue-400"
                        : "text-gray-800 group-hover:text-blue-600"
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-700">
              <button className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-500 overflow-hidden text-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Request Transport
                  <ArrowRight
                    size={22}
                    className="group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500"
                  />
                </span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <a
                href="tel:911"
                className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-500 flex items-center gap-3 relative overflow-hidden text-lg"
              >
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative z-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <Phone size={22} className="relative z-10 animate-pulse-fast" />
                <span className="relative z-10 font-extrabold">
                  Emergency: 911
                </span>
              </a>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t-2 animate-fade-in-up animation-delay-1000 ${
                darkMode ? "border-blue-900/30" : "border-blue-100"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500 animate-bounce-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`mb-3 flex justify-center transform group-hover:scale-125 group-hover:rotate-360 transition-all duration-700 ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {stat.icon}
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </div>

                  <div
                    className={`text-xs sm:text-sm font-semibold mt-1 whitespace-nowrap overflow-hidden text-ellipsis ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative lg:h-[700px] h-[500px] animate-fade-in-right">
            {/* Main Image Container */}
            <div className="relative h-full">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl opacity-20 animate-pulse-slow animation-delay-1000"></div>

              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 animate-spin-slow opacity-20 blur-xl"></div>

              {/* Image Slider */}
              <div
                className={`relative h-full rounded-3xl overflow-hidden shadow-2xl border-4 ${
                  darkMode ? "border-blue-900/30" : "border-blue-100"
                }`}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentImage
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-110 rotate-3"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Medical Transport ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent animate-shimmer"></div>
                  </div>
                ))}

                {/* Image Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-3 rounded-full transition-all duration-500 ${
                        index === currentImage
                          ? "bg-white w-12 shadow-lg"
                          : "bg-white/60 hover:bg-white/90 w-3"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Card - Response Time */}
              <div
                className={`absolute top-12 -left-6 rounded-2xl shadow-2xl p-6 max-w-xs transform hover:scale-110 hover:rotate-3 transition-all duration-500 border-2 animate-float ${
                  darkMode
                    ? "bg-gray-800 border-blue-900/30"
                    : "bg-white border-blue-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-2xl shadow-lg animate-pulse-slow">
                    <Zap size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      {"<"}5 Min
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Average Response Time
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div
                className={`absolute bottom-12 -right-6 rounded-2xl shadow-2xl p-6 transform hover:scale-110 hover:-rotate-3 transition-all duration-500 border-2 animate-float animation-delay-2000 ${
                  darkMode
                    ? "bg-gray-800 border-blue-900/30"
                    : "bg-white border-blue-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className="fill-blue-600 text-blue-600 animate-pulse-slow"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <div className="text-lg font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  5.0 Rating
                </div>
                <div
                  className={`text-xs font-semibold ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From 2,500+ Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          75% {
            transform: translate(30px, 30px) scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(2deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(30px);
          }
          50% {
            transform: scale(1.1) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes expand-width {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes text-shimmer {
          0% {
            text-shadow: 0 0 0 transparent;
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          100% {
            text-shadow: 0 0 0 transparent;
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out backwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out backwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 1s ease-in-out infinite;
        }

        .animate-expand-width {
          animation: expand-width 1s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-text-shimmer {
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
