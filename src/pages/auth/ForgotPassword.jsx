import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Ambulance } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function ForgotPassword() {
  const navigate = useNavigate();

  /* ================= READ-ONLY DARK MODE ================= */
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  /* ================= FORM STATE ================= */
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /* ================= SYNC WITH NAVBAR ================= */
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

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send reset link");
      }

      // ✅ Success: show message
      setMessage(data.message || "Reset link sent! Check your email.");

      // Optional: auto-redirect after 3 seconds
      // setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 font-inter ${
        darkMode ? "bg-[#0F172A] text-[#E5E7EB]" : "bg-[#F7F9FC] text-[#1F2937]"
      }`}
    >
      <Navbar />

      <div className="flex-1 flex flex-col justify-center items-center px-4 pt-32 pb-16 gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-[#3ECFB2] flex items-center justify-center shadow-md">
            <Ambulance size={30} className="text-white" />
          </div>
          <span className="text-xl font-bold text-[#4B5BD7]">Forgot Password</span>
          <span
            className={`text-sm ${
              darkMode ? "text-[#9CA3AF]" : "text-[#6B7280]"
            } text-center`}
          >
            We’ll send you a secure reset link
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[320px] flex flex-col gap-4"
          >
            {/* Email */}
            <div className="w-full">
              <label
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-[#E5E7EB]" : "text-[#1F2937]"
                }`}
              >
                Email address
              </label>
              <div
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                  darkMode ? "border-white/60" : "border-gray-300"
                }`}
              >
                <User size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* Success / Error Messages */}
            {message && (
              <p className="text-green-500 text-xs text-center">{message}</p>
            )}
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            {/* Send Reset Link Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full max-w-[190px] bg-[#4B5BD7] text-white rounded-md py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </div>

            {/* Footer Link */}
            <p
              className={`text-center text-xs ${
                darkMode ? "text-[#9CA3AF]" : "text-[#6B7280]"
              }`}
            >
              Remembered your password?{" "}
              <Link to="/login" className="text-[#4B5BD7] font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
