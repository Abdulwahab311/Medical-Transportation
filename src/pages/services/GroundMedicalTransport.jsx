import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import groundTransportImg from "../../assets/images/ground-ambulance.jfif"; // replace with your image

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
      {/* Navbar */}
      <Navbar />

      {/* Hero / Header */}
      <section
        className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${groundTransportImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-[#4B5BD7]">
            Ground Medical Transport
          </h1>
          <p className="text-lg mb-8 text-[#F3F4F6] dark:text-gray-300">
            Our 24/7 ground medical transport service provides fully equipped
            ambulances with certified paramedics, ensuring patient safety,
            comfort, and timely hospital transfers.
          </p>
        </div>
      </section>

      {/* Overview / Info */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={groundTransportImg}
            alt="Ground Ambulance"
            className="rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
          />

          <div>
            <h2
              className={`text-4xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-[#4B5BD7]"
              }`}
            >
              Why Choose Our Ground Transport?
            </h2>
            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-300" : "text-[#6B7280]"
              }`}
            >
              Our ground medical transport ensures timely transfers, patient
              monitoring, and professional care during every ride.
            </p>

            <ul
              className={`space-y-3 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>✔ Advanced Life Support</li>
              <li>✔ Trained EMTs & Drivers</li>
              <li>✔ Emergency & Scheduled Transport</li>
              <li>✔ Modern & Sanitized Fleet</li>
            </ul>

            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-4 bg-[#FF7A6C] text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A6C]/40"
            >
              Book Ground Transport
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GroundMedicalTransport;

  