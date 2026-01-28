import { useState, useEffect } from "react";
import {
  MapPin,
  Plane,
  Truck,
  Calendar,
  Clock,
  HeartPulse,
  CheckCircle,
} from "lucide-react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function BookingPage() {
  /* ================= DARK MODE (READ-ONLY) ================= */
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  /* ================= BOOKING STATE ================= */
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    rideType: "",
    date: "",
    time: "",
    assistance: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 font-inter ${
        darkMode
          ? "bg-[#0F172A] text-[#E5E7EB]"
          : "bg-[#F7F9FC] text-[#1F2937]"
      }`}
    >
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="w-full max-w-4xl">
          <div
            className={`rounded-3xl shadow-xl overflow-hidden ${
              darkMode ? "bg-[#020617]" : "bg-white"
            }`}
          >
            {/* Header */}
            <div className="px-10 py-8 border-b border-white/10 bg-gradient-to-r from-[#4B5BD7]/10 to-transparent">
              <h1 className="text-3xl md:text-4xl font-bold text-[#4B5BD7]">
                Book a Medical Ride
              </h1>
              <p className="mt-2 max-w-xl text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                Safe, reliable, and compassionate medical transportation — guided
                step by step.
              </p>
            </div>

            {/* Progress */}
            <div className="px-10 pt-8">
              <div className="flex items-center gap-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border transition ${
                        step >= s
                          ? "bg-[#4B5BD7] text-white border-[#4B5BD7]"
                          : darkMode
                          ? "border-white/30 text-gray-400"
                          : "border-gray-300 text-gray-400"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 5 && (
                      <div
                        className={`h-[2px] flex-1 ${
                          step > s
                            ? "bg-[#4B5BD7]"
                            : darkMode
                            ? "bg-white/20"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="px-10 py-10">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <FormField
                    label="Pickup Location"
                    placeholder="Hospital, home, or clinic address"
                    value={form.pickup}
                    onChange={(v) => setForm({ ...form, pickup: v })}
                    darkMode={darkMode}
                  />
                  <FormField
                    label="Drop-off Location"
                    placeholder="Destination address"
                    value={form.dropoff}
                    onChange={(v) => setForm({ ...form, dropoff: v })}
                    darkMode={darkMode}
                  />
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <RideCard
                    icon={<Truck />}
                    label="Ground Transport"
                    active={form.rideType === "ground"}
                    onClick={() => setForm({ ...form, rideType: "ground" })}
                  />
                  <RideCard
                    icon={<Plane />}
                    label="Air Ambulance"
                    active={form.rideType === "air"}
                    onClick={() => setForm({ ...form, rideType: "air" })}
                  />
                  <RideCard
                    icon={<MapPin />}
                    label="Long Distance"
                    active={form.rideType === "long"}
                    onClick={() => setForm({ ...form, rideType: "long" })}
                  />
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormIconField
                    label="Preferred Date"
                    icon={<Calendar />}
                    type="date"
                    onChange={(v) => setForm({ ...form, date: v })}
                    darkMode={darkMode}
                  />
                  <FormIconField
                    label="Preferred Time"
                    icon={<Clock />}
                    type="time"
                    onChange={(v) => setForm({ ...form, time: v })}
                    darkMode={darkMode}
                  />
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="space-y-4 max-w-xl">
                  {["Wheelchair", "Stretcher", "Full Medical Support"].map(
                    (a) => (
                      <button
                        key={a}
                        onClick={() => setForm({ ...form, assistance: a })}
                        className={`w-full p-5 rounded-2xl border flex items-center gap-4 transition ${
                          form.assistance === a
                            ? "border-[#3ECFB2] bg-[#3ECFB2]/10"
                            : "hover:border-[#3ECFB2]"
                        }`}
                      >
                        <HeartPulse className="text-[#3ECFB2]" />
                        <span className="text-lg">{a}</span>
                      </button>
                    )
                  )}
                </div>
              )}

              {/* Step 5 */}
              {step === 5 && (
                <div className="text-center space-y-6 max-w-lg mx-auto">
                  <CheckCircle className="w-14 h-14 text-[#3ECFB2] mx-auto" />
                  <h2 className="text-2xl font-semibold">
                    Confirm Your Ride
                  </h2>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                    Our dispatch team will review your request and contact you
                    shortly.
                  </p>
                  <button className="px-12 py-4 bg-[#FF7A6C] text-white rounded-xl shadow-md hover:opacity-90">
                    Confirm Booking
                  </button>
                </div>
              )}
            </div>

            {/* Footer Nav */}
            <div className="px-10 py-6 border-t border-white/10 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="text-sm text-[#6B7280] dark:text-[#9CA3AF]"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 && (
                <button
                  onClick={next}
                  className="px-8 py-3 bg-[#4B5BD7] text-white rounded-xl shadow"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function FormField({ label, placeholder, value, onChange, darkMode }) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border p-4 text-sm outline-none ${
          darkMode
            ? "bg-transparent border-white/30"
            : "border-gray-300"
        }`}
      />
    </div>
  );
}

function FormIconField({ label, icon, type, onChange, darkMode }) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3ECFB2]">
          {icon}
        </div>
        <input
          type={type}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border p-4 pl-12 text-sm outline-none ${
            darkMode
              ? "bg-transparent border-white/30"
              : "border-gray-300"
          }`}
        />
      </div>
    </div>
  );
}

function RideCard({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-8 flex flex-col items-center gap-4 transition ${
        active
          ? "border-[#4B5BD7] bg-[#4B5BD7]/10"
          : "hover:border-[#4B5BD7]"
      }`}
    >
      <div className="text-[#3ECFB2] w-8 h-8">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
