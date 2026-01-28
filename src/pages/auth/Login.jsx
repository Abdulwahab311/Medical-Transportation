import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Ambulance } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useAuth } from "../../context/AuthContext"; // ✅ Import AuthContext

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Use login from context

  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  // ✅ handleChange to update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Call login from AuthContext to store token & user info
      login(data); // data = { token, user: { role } }

      // ✅ Redirect based on role
      if (data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else if (data.user.role === "user") {
        navigate("/user-dashboard");
      } else if (data.user.role === "driver") {
        navigate("/driver-dashboard");
      } else {
        navigate("/"); // fallback
      }
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
          <span className="text-xl font-bold text-[#4B5BD7]">Welcome Back</span>
          <span className={`text-sm ${darkMode ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>
            Log in to manage your medical transport services
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[320px] flex flex-col gap-4"
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <div className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                darkMode ? "border-white/60" : "border-gray-300"
              }`}>
                <User size={18} />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                darkMode ? "border-white/60" : "border-gray-300"
              }`}>
                <Lock size={18} />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end text-xs">
              <Link to="/forgot-password" className="font-medium text-[#4B5BD7] hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            {/* CTA Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full max-w-[190px] bg-[#4B5BD7] text-white rounded-md py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            {/* Footer Link */}
            <p className="text-center text-xs">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#4B5BD7] font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
