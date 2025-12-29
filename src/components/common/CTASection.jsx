import { Phone, Ambulance, Clock, Shield, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const CTASection = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isVisible, setIsVisible] = useState(false);

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

    // Trigger animation on mount
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
      className="relative py-24 bg-gray-900 overflow-hidden transition-colors duration-500"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing Circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-reverse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Emergency Badge */}
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="relative">
              <Heart size={18} className="text-white animate-heartbeat" />
              <div className="absolute inset-0 animate-ping">
                <Heart size={18} className="text-white opacity-50" />
              </div>
            </div>
            <span className="text-white font-semibold text-sm">Emergency Care Available</span>
          </div>

          {/* Main Heading */}
          <h2
            className={`text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Need Emergency
            <br />
            <span className="relative inline-block">
              Medical Transport?
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-white/20 -skew-x-12 animate-pulse-slow" />
            </span>
          </h2>

          {/* Subheading */}
          <p
            className={`mb-10 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our expert response team is standing by 24/7 to provide life-saving care.
            <br />
            <span className="font-semibold text-white">One call away from immediate help.</span>
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
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
              className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-white text-red-700 font-bold text-xl shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:scale-110 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Phone Icon with Pulse */}
              <div className="relative z-10">
                <div className="relative">
                  <Phone className="group-hover:rotate-12 transition-transform duration-300" size={28} />
                  <div className="absolute inset-0 animate-ping opacity-75">
                    <Phone size={28} className="text-red-600" />
                  </div>
                </div>
              </div>
              
              {/* Text */}
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Call Emergency: 911
              </span>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </a>

            {/* Secondary Info */}
            <p className="mt-6 text-white/70 text-sm animate-pulse-slow">
              Average response time: <span className="font-bold text-white">Under 8 minutes</span>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-white/30 animate-bounce"
                style={{ animationDelay: `${i * 200}ms`, animationDuration: '1.5s' }}
              />
            ))}
          </div>
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slide-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .animate-slide {
          animation: slide 3s linear infinite;
        }
        .animate-slide-reverse {
          animation: slide-reverse 3s linear infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default CTASection;