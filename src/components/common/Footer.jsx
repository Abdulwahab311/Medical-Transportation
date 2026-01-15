import { Link, useNavigate, useLocation } from "react-router-dom";
import { Ambulance, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const applyTheme = () => {
      const theme = localStorage.getItem("theme");
      setDarkMode(theme === "dark");
    };

    applyTheme();
    window.addEventListener("storage", applyTheme);
    window.addEventListener("themeChange", applyTheme);

    return () => {
      window.removeEventListener("storage", applyTheme);
      window.removeEventListener("themeChange", applyTheme);
    };
  }, []);

  /* ---------- SERVICES SCROLL HANDLER ---------- */
  const handleServicesClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "services" } });
    } else {
      const section = document.getElementById("services");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`relative overflow-hidden py-16 font-inter transition-colors duration-500 backdrop-blur-md
        ${
          darkMode
            ? "bg-gray-900 text-[#F7F9FC]"
            : "bg-[#F7F9FC]/95 text-[#1F2937]"
        }
      `}
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 bg-[#3ECFB2]/30 pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[#4B5BD7]/20 pointer-events-none animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div className="space-y-4 animate-fade-up">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <Ambulance className="text-[#3ECFB2] transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-semibold text-[#4B5BD7]">
              Medical Transport
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-[#6B7280]">
            Professional emergency & non-emergency medical transportation services
            with patient-first care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 animate-fade-up delay-100">
          <h4 className="font-semibold text-[#4B5BD7]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#6B7280]">
            <li
              onClick={handleServicesClick}
              className="cursor-pointer transition-all duration-300 hover:text-[#4B5BD7] hover:translate-x-1"
            >
              Services
            </li>
            <li className="cursor-pointer hover:text-[#4B5BD7]">Booking</li>
            <li className="cursor-pointer hover:text-[#4B5BD7]">
              Accessibility Statement
            </li>
            <li className="cursor-pointer hover:text-[#4B5BD7]">
              Privacy Policy & Terms
            </li>
          </ul>
        </div>

        {/* Contact & Care Info */}
        <div className="space-y-4 animate-fade-up delay-200">
          <h4 className="font-semibold text-[#4B5BD7]">Care in Motion</h4>

          <p className="text-sm flex items-center gap-2 text-[#6B7280]">
            <Heart size={16} className="text-[#FF7A6C] animate-pulse" />
            Serving patients since 2010
          </p>

          <div className="text-sm text-[#6B7280] space-y-1">
            <p>📞 24/7 Dispatch: +1 (800) 123-4567</p>
            <p>✉️ support@medicaltransport.com</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-4 mt-12 text-center text-xs text-[#6B7280] animate-fade-up delay-300">
        <p>
          Medical disclaimer: This service does not replace emergency medical
          services. In case of a life-threatening emergency, call your local
          emergency number immediately.
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs mt-6 text-[#6B7280] animate-fade-up delay-400">
        © {new Date().getFullYear()} Medical Transport. All rights reserved.
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 16s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </footer>
  );
};

export default Footer;
