import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Ambulance } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Optional: auto-login after signup

  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user", // default role
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role, // ✅ send selected role
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // Optional auto-login after signup
      // login(data);

      // Redirect to login page
      navigate("/login");
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
          <span className="text-xl font-bold text-[#4B5BD7]">
            Create an Account
          </span>
          <span
            className={`text-sm ${
              darkMode ? "text-[#9CA3AF]" : "text-[#6B7280]"
            } text-center`}
          >
            Access fast, reliable medical transport anytime
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[320px] flex flex-col gap-4"
          >
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium mb-1 block">Full Name</label>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-gray-300">
                <User size={18} />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-1 block">Email address</label>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-gray-300">
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

            {/* Role Dropdown */}
            <div>
              <label className="text-sm font-medium mb-1 block">Select Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-full border border-gray-300 bg-white text-sm"
              >
                <option value="user">User</option>
                <option value="driver">Driver</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium mb-1 block">Password</label>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-gray-300">
                <Lock size={18} />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter password"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Confirm Password
              </label>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-gray-300">
                <Lock size={18} />
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Re-enter password"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#4B5BD7] text-white rounded-md py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            <p className="text-center text-xs">
              Already have an account?{" "}
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
