import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import insuranceImg from "../../assets/images/insurance.jfif";
import { ShieldCheck, FileText, Users, CheckCircle } from "lucide-react";

const InsuranceAssistance = () => {
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
      className={`transition-colors duration-500 font-inter relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#F7F9FC] text-[#1F2937]"
      }`}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse-slow transition-all duration-700 ${
            darkMode ? "bg-[#4B5BD7]/10" : "bg-[#3ECFB2]/15"
          }`}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[#3ECFB2]/20 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl bg-[#4B5BD7]/20 animate-pulse-slow" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=1600&q=80')] bg-center bg-cover opacity-60 transition-opacity duration-700" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#4B5BD7] to-[#3ECFB2] bg-clip-text text-transparent transition-transform duration-700 hover:scale-105">
            Insurance Assistance
          </h1>
          <p className="text-lg leading-relaxed text-[#1F2937] dark:text-gray-300 max-w-3xl mx-auto transition-opacity duration-700">
            We manage insurance approvals, claims, and documentation so families
            can focus on care, recovery, and peace of mind.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 transition-all duration-700">
            <h2
              className={`text-4xl font-extrabold transition-transform duration-500 hover:scale-105 ${
                darkMode ? "text-white" : "text-[#4B5BD7]"
              }`}
            >
              How We Help With Insurance
            </h2>

            <p className="text-lg leading-relaxed text-[#6B7280] dark:text-gray-300 transition-opacity duration-500">
              Navigating medical transport insurance can be complex. Our
              experienced team works directly with providers to streamline
              approvals and reduce delays.
            </p>

            <ul className="space-y-3">
              {[
                {
                  icon: <ShieldCheck className="text-[#3ECFB2]" />,
                  text: "Insurance verification & eligibility checks",
                },
                {
                  icon: <FileText className="text-[#3ECFB2]" />,
                  text: "Claims processing & documentation",
                },
                {
                  icon: <Users className="text-[#3ECFB2]" />,
                  text: "Direct coordination with insurance providers",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 transition-transform duration-500 hover:translate-x-1"
                >
                  {item.icon}
                  <span className="text-base md:text-lg leading-relaxed text-[#1F2937] dark:text-gray-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105">
            <img
              src={insuranceImg}
              alt="Insurance assistance"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className={`text-4xl font-extrabold mb-12 transition-transform duration-500 hover:scale-105 ${
              darkMode ? "text-white" : "text-[#4B5BD7]"
            }`}
          >
            What You Can Expect
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Faster Approvals",
              "Clear Communication",
              "Reduced Paperwork",
              "Peace of Mind",
            ].map((title, i) => (
              <div
                key={i}
                className={`group p-8 rounded-3xl border backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "bg-gray-800/50 border-[#3ECFB2]/40"
                    : "bg-white border-gray-200"
                }`}
              >
                <CheckCircle
                  className="text-[#3ECFB2] mx-auto mb-4 transition-transform duration-500 group-hover:scale-125"
                  size={36}
                />
                <h3
                  className={`text-xl font-bold mb-2 transition-transform duration-500 group-hover:scale-105 ${
                    darkMode ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-base leading-relaxed transition-opacity duration-500 ${
                    darkMode ? "text-gray-300" : "text-[#6B7280]"
                  }`}
                >
                  {title === "Faster Approvals"
                    ? "Reduced delays for urgent transport needs."
                    : title === "Clear Communication"
                    ? "We keep families informed at every step."
                    : title === "Reduced Paperwork"
                    ? "We handle the complex documentation for you."
                    : "Focus on care while we manage insurance."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center animate-fade-in-up">
        <h2 className="text-3xl font-extrabold mb-4 text-[#4B5BD7] transition-transform duration-500 hover:scale-105">
          Need Help With Insurance?
        </h2>
        <p className="text-lg leading-relaxed text-[#6B7280] dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-opacity duration-500">
          Contact our team anytime for assistance with approvals and insurance
          coordination.
        </p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF7A6C] to-[#FF6A5A] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6A5A]/50"
        >
          Get Assistance
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InsuranceAssistance;

