import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import backgroundImg from "../../assets/images/background.jpg";
import  groundImage from "../../assets/images/ground.png";
import groundTransportImg from "../../assets/images/ground-ambulance.jfif";

// Icons
import { Ambulance, Users, HeartPulse, Clock } from "lucide-react";

const GroundMedicalTransport = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-colors duration-500 font-inter ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#F7F9FC] text-[#1F2937]"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
            darkMode ? "bg-[#4B5BD7]/10" : "bg-[#3ECFB2]/15"
          }`}
        />
      </div>

      {/* Navbar */}
      <Navbar />
  
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 text-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80')] bg-[center_20%] bg-cover opacity-60 transition-all duration-700" />

        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4B5BD7]">
            Ground Medical Transport Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white dark:text-gray-300 max-w-3xl mx-auto">
            Reliable, safe, and professional ground ambulance services available
            24/7 — delivering patients with comfort, care, and medical oversight.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#FF7A6C] text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A6C]/50 hover:bg-[#FF6A5A]"
          >
            Book Ground Transport
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-4xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-[#4B5BD7]"
              }`}
            >
              What Is Ground Medical Transport?
            </h2>
            <p
    className={`text-lg mb-6 ${
      darkMode ? "text-gray-300" : "text-[#6B7280]"
    }`}
  >
    Ground medical transport provides non-emergency and emergency
    ambulance services staffed with trained EMTs and equipped vehicles
    designed for patient safety, monitoring, and comfort during
    transport.
  </p>
  <ul className={`space-y-2 ${darkMode ? "text-gray-300" : "text-[#1F2937]"}`}>
    <li>✔ Advanced Life Support ambulances</li>
    <li>✔ Certified EMTs & trained drivers</li>
    <li>✔ Scheduled & emergency transfers</li>
  </ul>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={groundImage}
              alt="Ground Medical Transport"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className={`text-4xl font-semibold mb-12 ${
              darkMode ? "text-white" : "text-[#4B5BD7]"
            }`}
          >
            Our Ground Transport Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "bg-gray-800/40 border-[#3ECFB2]/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <Ambulance className="text-[#3ECFB2] mx-auto mb-4" size={40} />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-[#1F2937]"
                }`}
              >
                Emergency Transport
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-[#6B7280]"
                } text-sm`}
              >
                Rapid emergency response with advanced medical equipment onboard.
              </p>
            </div>

            <div
              className={`group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "bg-gray-800/40 border-[#3ECFB2]/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <Users className="text-[#3ECFB2] mx-auto mb-4" size={40} />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-[#1F2937]"
                }`}
              >
                Non-Emergency Transfers
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-[#6B7280]"
                } text-sm`}
              >
                Scheduled hospital, clinic, and facility transfers.
              </p>
            </div>

            <div
              className={`group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "bg-gray-800/40 border-[#3ECFB2]/30"
                  : "bg-white border-gray-200"
              }`}
            >
              <Clock className="text-[#3ECFB2] mx-auto mb-4" size={40} />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-[#1F2937]"
                }`}
              >
                24/7 Availability
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-[#6B7280]"
                } text-sm`}
              >
                Around-the-clock medical transport when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* CTA Section */}
<section className="py-24 text-center">
  <h2 className="text-3xl font-semibold mb-6 text-[#4B5BD7]">
    Need Ground Medical Transport?
  </h2>
  <p
    className={`text-lg max-w-2xl mx-auto text-center ${
      darkMode ? "text-gray-300" : "text-[#6B7280]"
    }`}
  >
    Contact us anytime for reliable, safe, and professional ground medical
    transportation services.
  </p>
  <a
    href="/contact"
    className="inline-block mt-6 px-6 py-3 bg-[#FF7A6C] text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A6C]/50 hover:bg-[#FF6A5A]"
  >
    Book Ground Transport
  </a>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GroundMedicalTransport;
