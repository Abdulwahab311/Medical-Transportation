import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import distance from "../../assets/images/distance.jpg";
import vehicleImage from "../../assets/images/vehicle.jpg";
import { Ambulance, Users, HeartPulse, CheckCircle, MapPin, Clock } from "lucide-react";

const LongDistanceTransfer = () => {
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
      <section className="relative pt-32 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80')] bg-center bg-cover opacity-60 transition-all duration-700" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-[#4B5BD7] to-[#3ECFB2] bg-clip-text text-transparent transition-transform duration-700 hover:scale-105">
            Long Distance Medical Transport
          </h1>
          <p className="text-lg text-[#1F2937] dark:text-gray-300 mb-8 transition-opacity duration-700">
            Professional, comfortable, and reliable medical transport services
            for long intercity and interstate journeys.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#FF7A6C] to-[#FF6A5A] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-500 hover:shadow-lg hover:shadow-[#FF6A5A]/40"
            >
              Request Quote
            </a>
            <a
              href="#details"
              className="px-8 py-4 border border-[#4B5BD7] text-[#4B5BD7] rounded-full hover:bg-[#4B5BD7] hover:text-white transition-colors duration-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

    {/* Who It Is For Card */}
<section className="py-20 transition-colors duration-500 animate-fade-in-up">
  <div className="max-w-5xl mx-auto px-4">
    <div
      className={`group rounded-3xl overflow-hidden backdrop-blur-md border transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
        darkMode ? "bg-gray-800/50 border-[#3ECFB2]/40" : "bg-white border-gray-200"
      }`}
    >
      <div className="p-6 text-center">
        {/* Icon */}
        <div className="mb-4 flex justify-center animate-bounce-slow">
          <Users
            size={36}
            className={`${
              darkMode ? "text-[#3ECFB2]" : "text-[#4B5BD7]"
            } transition-transform duration-500 group-hover:scale-110`}
          />
        </div>

        {/* Heading */}
        <h2
          className={`text-3xl font-semibold mb-4 transition-colors duration-500 ${
            darkMode ? "text-white" : "text-[#4B5BD7]"
          }`}
        >
          Who it is for
        </h2>

        {/* Text */}
        <p
          className={`text-base transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-[#1F2937]"
          } max-w-2xl mx-auto mb-2`}
        >
          Perfect for patients requiring intercity medical transport, families seeking reliable care, and healthcare facilities arranging safe transfers. Our service is designed to meet the needs of all age groups, including seniors and patients with special medical requirements.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* What to Expect */}
      <section id="details" className="py-24 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 transition-opacity duration-700">
            <h2 className="text-4xl font-extrabold text-[#4B5BD7] transition-transform duration-500 hover:scale-105">
              What to Expect From Our Service
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-gray-300 transition-opacity duration-500">
              Our long-distance ambulance service delivers compassionate and
              medically supervised transport across states, ensuring safety,
              comfort, and peace of mind.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#1F2937] dark:text-gray-300 transition-transform duration-500 hover:translate-x-1">
                <Ambulance className="text-[#3ECFB2]" />
                Fully equipped ambulances for long journeys
              </li>
              <li className="flex items-center gap-3 text-[#1F2937] dark:text-gray-300 transition-transform duration-500 hover:translate-x-1">
                <HeartPulse className="text-[#3ECFB2]" />
                Medical professionals onboard throughout transport
              </li>
              <li className="flex items-center gap-3 text-[#1F2937] dark:text-gray-300 transition-transform duration-500 hover:translate-x-1">
                <MapPin className="text-[#3ECFB2]" />
                Nationwide and interstate coverage
              </li>
              <li className="flex items-center gap-3 text-[#1F2937] dark:text-gray-300 transition-transform duration-500 hover:translate-x-1">
                <Clock className="text-[#3ECFB2]" />
                24/7 scheduling and patient monitoring
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105 hover:shadow-2xl">
            <img
              src={distance}
              alt="Long distance medical transport"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Comfort & Features */}
      <section className="py-24 transition-colors duration-500 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className={`text-4xl font-extrabold mb-12 ${darkMode ? "text-white" : "text-[#4B5BD7]"} transition-transform duration-500 hover:scale-105`}>
            Safe, Comfortable & Professional
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
                title: "Medical-Grade Fleet",
                text: "Designed for comfort and safety during long routes.",
                icon: <Ambulance size={36} className="text-[#3ECFB2] mb-4 mx-auto transition-transform duration-500 group-hover:scale-125" />,
              },{
                title: "Trained Medical Staff",
                text: "Experienced professionals ensure patient care.",
                icon: <HeartPulse size={36} className="text-[#3ECFB2] mb-4 mx-auto transition-transform duration-500 group-hover:scale-125" />,
              },{
                title: "Nationwide Transfers",
                text: "Reliable intercity and interstate coverage.",
                icon: <Users size={36} className="text-[#3ECFB2] mb-4 mx-auto transition-transform duration-500 group-hover:scale-125" />,
              },{
                title: "Door-to-Door Care",
                text: "From hospital to home or facility.",
                icon: <CheckCircle size={36} className="text-[#3ECFB2] mb-4 mx-auto transition-transform duration-500 group-hover:scale-125" />,
            }].map((item, i) => (
              <div key={i} className={`group p-8 rounded-3xl border backdrop-blur-md transition-all duration-700 flex flex-col items-center text-center ${darkMode ? "bg-gray-800/50 border-[#3ECFB2]/40" : "bg-white border-gray-200"} hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up`}>
                {item.icon}
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-[#1F2937]"} transition-transform duration-500 hover:scale-105`}>
                  {item.title}
                </h3>
                <p className={`${darkMode ? "text-gray-300" : "text-[#6B7280]"} text-sm transition-opacity duration-500`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 text-center animate-fade-in-up">
        <h2 className="text-3xl font-extrabold mb-4 text-[#4B5BD7] transition-transform duration-500 hover:scale-105">
          Ready to Book Your Ride?
        </h2>
        <p className="text-lg text-[#6B7280] dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-opacity duration-500">
          Schedule your long-distance medical transport with confidence. Our team ensures a safe, professional, and comfortable journey for you or your loved ones.
        </p>
        <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF7A6C] to-[#FF6A5A] text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6A5A]/50">
          Book Now
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LongDistanceTransfer;
