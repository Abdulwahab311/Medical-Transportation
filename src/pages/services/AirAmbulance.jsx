import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import backgroundImg from "../../assets/images/background.jpg";
import airAmbulanceImg from "../../assets/images/air‑ambulance.jpeg";

// Icons
import { Airplay, Users, HeartPulse, MapPin } from "lucide-react";

const AirAmbulance = () => {
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

        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[#3ECFB2]/20" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl bg-[#4B5BD7]/20" />
      

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4B5BD7]">
            Air Medical Transport Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white dark:text-gray-300 max-w-3xl mx-auto">
            Fast, safe, and professional air ambulance services worldwide—providing bedside‑to‑bedside care and critical patient transport when it matters most.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#FF7A6C] text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A6C]/50 hover:bg-[#FF6A5A]"
          >
            Request Quote
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-4xl font-semibold mb-6 ${darkMode ? "text-white" : "text-[#4B5BD7]"}`}>
              What Is Air Medical Transport?
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-gray-300 mb-6">
              Air ambulance transport is the fastest way to move critically ill patients with advanced medical care onboard aircraft configured as flying intensive care units. Our comprehensive coordination includes ground support and medical teams from pickup to destination.
            </p>
            <ul className="space-y-2 text-[#1F2937] dark:text-gray-300">
              <li>✔ ICU-equipped aircraft for critical transport</li>
              <li>✔ Dedicated flight medical crews</li>
              <li>✔ Worldwide coverage for emergencies</li>
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={airAmbulanceImg}
              alt="Air Ambulance"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className={`text-4xl font-semibold mb-12 ${darkMode ? "text-white" : "text-[#4B5BD7]"}`}>
            Our Air Medical Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Air Ambulance */}
            <div className={`group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${darkMode ? "bg-gray-800/40 border-[#3ECFB2]/30" : "bg-white border-gray-200"}`}>
              <Airplay className="text-[#3ECFB2] mx-auto mb-4" size={40} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-[#1F2937]"}`}>
                Air Ambulance
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-[#6B7280]"} text-sm`}>
                ICU‑equipped aircraft for critical and long‑distance patient transport delivered with dedicated flight medical crews.
              </p>
            </div>

            {/* Medical Escort */}
            <div className={`group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${darkMode ? "bg-gray-800/40 border-[#3ECFB2]/30" : "bg-white border-gray-200"}`}>
              <Users className="text-[#3ECFB2] mx-auto mb-4" size={40} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-[#1F2937]"}`}>
                Commercial Medical Escort
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-[#6B7280]"} text-sm`}>
                Expert medical staff accompany stable patients on commercial flights.
              </p>
            </div>

            {/* International Stretcher */}
            <div className={`group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${darkMode ? "bg-gray-800/40 border-[#3ECFB2]/30" : "bg-white border-gray-200"}`}>
              <MapPin className="text-[#3ECFB2] mx-auto mb-4" size={40} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-[#1F2937]"}`}>
                Int’l Commercial Stretcher
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-[#6B7280]"} text-sm`}>
                Stretcher setups on commercial jets for cost‑effective global travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#4B5BD7]">
          Need Air Medical Transport?
        </h2>
        <p className="text-lg text-[#6B7280] dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Contact us 24/7 for a free consultation and personalized transport plan tailored to you or your loved one’s needs.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-[#FF7A6C] text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A6C]/50 hover:bg-[#FF6A5A]"
        >
          Request Quote
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AirAmbulance;
