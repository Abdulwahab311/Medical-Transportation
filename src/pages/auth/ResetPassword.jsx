import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Lock, Ambulance } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function ResetPassword() {
  const { token } = useParams(); // get token from URL
  const navigate = useNavigate();

  /* ================= READ-ONLY DARK MODE ================= */
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  /* ================= FORM STATE ================= */
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

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

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: formData.password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      setMessage(data.message || "Password updated successfully!");
      setTimeout(() => navigate("/login"), 3000); // redirect to login after 3s
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
          <span className="text-xl font-bold text-[#4B5BD7]">Reset Password</span>
          <span
            className={`text-sm ${
              darkMode ? "text-[#9CA3AF]" : "text-[#6B7280]"
            } text-center`}
          >
            Create a new secure password
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[320px] flex flex-col gap-4"
          >
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <div
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                  darkMode ? "border-white/60" : "border-gray-300"
                }`}
              >
                <Lock size={18} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter new password"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <div
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                  darkMode ? "border-white/60" : "border-gray-300"
                }`}
              >
                <Lock size={18} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Re-enter your password"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Success / Error Messages */}
            {message && <p className="text-green-500 text-xs text-center">{message}</p>}
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            {/* CTA Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full max-w-[190px] bg-[#4B5BD7] text-white rounded-md py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
