import {
  Heart,
  Shield,
  Ambulance,
  Users,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [activeSlide, setActiveSlide] = useState(0);

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

  /** Auto slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1580281657527-47b3a7b0f84b",
    "https://images.unsplash.com/photo-1576765607924-3f7b8410a787",
    "https://images.unsplash.com/photo-1600959907703-bc7c08b0e40f",
    "https://images.unsplash.com/photo-1584515933487-779824d29309",
  ];

  const values = [
    {
      icon: <Heart size={30} />,
      title: "Compassion First",
      text: "Every ride is handled with dignity, empathy, and personal care.",
    },
    {
      icon: <Shield size={30} />,
      title: "Safety & Compliance",
      text: "HIPAA-compliant processes and strict clinical protocols.",
    },
    {
      icon: <Ambulance size={30} />,
      title: "Modern Fleet",
      text: "Fully equipped vehicles for emergency & non-emergency transport.",
    },
    {
      icon: <Users size={30} />,
      title: "Certified Professionals",
      text: "Trained drivers, EMTs, and care coordinators.",
    },
  ];

  return (
    <section
      className={`relative py-28 overflow-hidden font-inter transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#F7F9FC] text-[#1F2937]"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[#3ECFB2]/20" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl bg-[#4B5BD7]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-5 py-2 rounded-full text-sm font-semibold bg-[#3ECFB2]/20 text-[#3ECFB2]">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4B5BD7]">
            Trusted Medical Transportation
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#6B7280] dark:text-gray-300">
            Providing safe, reliable, and compassionate medical transport for
            patients, families, hospitals, and caregivers.
          </p>
        </div>

        {/* SLIDER + MISSION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Image Slider */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
  <img
    src={images[activeSlide]}
    alt=""
    onError={(e) => {
      e.currentTarget.src =
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&auto=format&fit=crop&q=80";
    }}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
</div>


          {/* Mission */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-[#6B7280] dark:text-gray-300">
              We exist to bridge the gap between patients and life-saving care.
              Our mission is to deliver every patient safely, comfortably, and
              on time — with professionalism and compassion at every step.
            </p>

            <ul className="space-y-4">
              {[
                "24/7 Emergency & Scheduled Transport",
                "Hospital & caregiver trusted",
                "Clean, modern, monitored vehicles",
                "Patient-first service culture",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#3ECFB2]" />
                  <span className="text-[#6B7280] dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ABOUT SERVICE (Stellar Style) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About Our Transportation Service
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#6B7280] dark:text-gray-300">
              We provide safe, reliable, and compassionate non-emergency medical
              transportation — treating every passenger like family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Service",
                text: "Certified drivers trained in patient sensitivity, first aid, and defensive driving.",
                img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
              },
              {
                title: "Safe & Clean Vehicles",
                text: "Routinely disinfected, detailed, and safety-inspected vehicles.",
                img: "https://images.unsplash.com/photo-1580281657527-47b3a7b0f84b",
              },
              {
                title: "We Care Like Family",
                text: "Comfort, dignity, and compassion are at the heart of every ride.",
                img: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2
                bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-block px-10 py-4 rounded-full text-lg font-semibold transition-all
              bg-[#4B5BD7] text-white hover:bg-[#3ECFB2]"
            >
              Learn More / Contact Us
            </a>
          </div>
        </div>

        {/* VALUES */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border text-center transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl hover:border-[#FF7A6C]
                bg-white border-gray-200 dark:bg-gray-800 dark:border-[#3ECFB2]/30"
              >
                <div className="flex justify-center mb-5 text-[#3ECFB2] transition-all duration-300 group-hover:text-[#FF7A6C] group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#6B7280] dark:text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Professional. Certified. Compassionate.
          </h3>
          <p className="max-w-2xl mx-auto text-[#6B7280] dark:text-gray-300">
            Every transport reflects our commitment to safety, compliance, and
            human-centered care — because every patient matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
