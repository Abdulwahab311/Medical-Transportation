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
    { value: 15, suffix: "K+", label: "Patients Transported", icon: <Heart size={24} /> },
    { value: 99, suffix: ".8%", label: "Success Rate", icon: <CheckCircle size={24} /> },
    { value: 24, suffix: "/7", label: "Always Available", icon: <Clock size={24} /> },
    { value: 50, suffix: "+", label: "Medical Vehicles", icon: <Ambulance size={24} /> },
  ];

  return (
    <div
      className={`relative pt-20 overflow-hidden transition-colors duration-300 font-inter ${
        darkMode ? "bg-gray-900" : "bg-[#F7F9FC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         
          {/* LEFT */}
          <div className="space-y-8">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-[#4B5BD7]/20 text-[#3ECFB2] border-[#3ECFB2]/40"
                  : "bg-white text-[#4B5BD7] border-[#3ECFB2]"
              }`}
            >
              <Activity size={18} className="animate-pulse" />
              Trusted Medical Transport Since 2010
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4B5BD7] to-[#3ECFB2] animate-gradient-x">
                Medical Transportation
              </span>
              <br />
              <span className={darkMode ? "text-white" : "text-[#1F2937]"}>
                That Moves With Care
              </span>
            </h1>

            <p
              className={`text-lg max-w-2xl ${
                darkMode ? "text-gray-300" : "text-[#6B7280]"
              }`}
            >
              Safe, reliable, and compassionate medical transportation with
              advanced life support and trained professionals — available 24/7.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    darkMode
                      ? "bg-gray-800 border-[#3ECFB2]/20 hover:border-[#3ECFB2]"
                      : "bg-white border-gray-200 hover:border-[#3ECFB2]"
                  }`}
                >
                  <div className="text-[#3ECFB2] group-hover:scale-125 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <span
                    className={`font-medium transition-colors ${
                      darkMode
                        ? "text-white group-hover:text-[#3ECFB2]"
                        : "text-[#1F2937] group-hover:text-[#4B5BD7]"
                    }`}
                  >
                    {f.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-[#FF7A6C] hover:bg-[#ff6657] text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                Book a Ride
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>

              <a
                href="tel:911"
                className="group px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center gap-2
                text-[#FF7A6C] border-[#FF7A6C]"
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                Emergency Call
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-[#3ECFB2]/20">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="flex justify-center text-[#3ECFB2] mb-2 group-hover:scale-125 transition-transform">
                    {s.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#4B5BD7]">
                    <CountUp end={s.value} />
                    {s.suffix}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-[#6B7280]"
                    }`}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:h-[650px] h-[450px] group">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-[#3ECFB2]/20 transition-all duration-500 group-hover:scale-[1.02]">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    i === currentImage
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;

