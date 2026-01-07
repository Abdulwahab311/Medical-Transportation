import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { CheckCircle, Truck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
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

  const steps = [
    {
      icon: <Users size={32} />,
      title: "Sign Up & Create Profile",
      desc: "Create your account and add your patient or caregiver information for easy booking.",
      color: "#4B5BD7",
    },
    {
      icon: <Truck size={32} />,
      title: "Request a Ride",
      desc: "Schedule your non-emergency transport in just a few clicks — choose pickup, drop-off, and time.",
      color: "#3ECFB2",
    },
    {
      icon: <Clock size={32} />,
      title: "Real-Time Tracking",
      desc: "Monitor your ride status in real time and get updates when the vehicle arrives.",
      color: "#FF7A6C",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Safe & Reliable Transport",
      desc: "Ride with certified drivers in sanitized vehicles — comfort and safety guaranteed.",
      color: "#FBBF24",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`${darkMode ? "dark" : ""}`}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <motion.div
        className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-[#F7F9FC] text-[#1F2937]"}`}
        variants={sectionVariants}
      >
          {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[#3ECFB2]/20" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl bg-[#4B5BD7]/20" />
      
        <div className="max-w-6xl mx-auto px-4 py-20 font-inter">
          {/* Header */}
          <motion.header className="text-center mb-20" variants={sectionVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4B5BD7] mb-4">
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] dark:text-gray-300">
              Simple, reliable, and compassionate non-emergency medical transportation — just a few steps away.
            </p>
          </motion.header>

          {/* Steps Section */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={`group rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-700 hover:-translate-y-2 hover:shadow-xl p-8 text-center ${
                  darkMode ? "bg-gray-800/40 border-[#3ECFB2]/30" : "bg-white border-gray-200"
                }`}
                variants={cardVariants}
              >
                <div
                  className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  {React.cloneElement(step.icon, { className: step.color })}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-[#1F2937]"}`}>
                  {step.title}
                </h3>
                <p className={`${darkMode ? "text-gray-300" : "text-[#6B7280]"} text-sm`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div className="mt-32 text-center" variants={sectionVariants}>
            <h2 className="text-3xl font-bold mb-6 text-[#4B5BD7]">
              Ready to Book Your Ride?
            </h2>
            <p className="text-lg mb-8 text-[#6B7280] dark:text-gray-300">
              Schedule your non-emergency medical transport easily and securely.
            </p>
            <a
              href="/services/ground-medical-transport"
              className="inline-block px-10 py-4 rounded-full text-lg font-semibold transition-all
              bg-[#FF7A6C] text-white hover:bg-[#FF5B40] hover:scale-105 hover:shadow-lg"
            >
              Book a Ride
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default HowItWorks;

