import { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Lock,
  Save,
  Ambulance,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { token, login, logout } = useAuth();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  /* ================= DARK MODE SYNC ================= */
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

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setForm({
          name: res.data.user.name,
          email: res.data.user.email,
          password: "",
        });
      } catch {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  /* ================= UPDATE PROFILE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await axios.put(
        "http://localhost:5000/api/auth/profile",
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      login({ token, user: res.data.user });
      setForm((prev) => ({ ...prev, password: "" }));
      alert("Profile updated successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setSaving(false);
    }
  };

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return <div className="pt-40 text-center">Loading profile...</div>;
  }

  return (
    <div
      className={`min-h-screen relative flex flex-col transition-colors duration-300 font-inter ${
        darkMode ? "bg-[#0F172A] text-[#E5E7EB]" : "bg-[#F7F9FC] text-[#1F2937]"
      }`}
    >
      {/* ⬅️ Back Button */}
      <button
        onClick={() => navigate("/")}
        className={`absolute top-6 left-6 flex items-center gap-2 text-sm font-medium hover:opacity-70 transition ${
          darkMode ? "text-[#E5E7EB]" : "text-[#1F2937]"
        }`}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="flex-1 flex flex-col justify-center items-center px-4 pt-32 pb-16 gap-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-[#3ECFB2] flex items-center justify-center shadow-md">
            <Ambulance size={30} className="text-white" />
          </div>
          <span className="text-xl font-bold text-[#4B5BD7]">
            My Profile
          </span>
          <span
            className={`text-sm text-center ${
              darkMode ? "text-[#9CA3AF]" : "text-[#6B7280]"
            }`}
          >
            Update your personal information
          </span>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[320px] flex flex-col gap-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                darkMode ? "border-white/60" : "border-gray-300"
              }`}
            >
              <User size={18} />
              <input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                darkMode ? "border-white/60" : "border-gray-300"
              }`}
            >
              <Mail size={18} />
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              New Password
            </label>
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                darkMode ? "border-white/60" : "border-gray-300"
              }`}
            >
              <Lock size={18} />
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="Leave blank to keep current"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs text-center">{error}</p>
          )}

          {/* Update Button */}
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-[#4B5BD7] text-white rounded-md py-2 text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Save size={16} />
            {saving ? "Saving..." : "Update Profile"}
          </button>

          {/* Logout Button */}
          <button
            type="button"
            onClick={() => setShowLogoutModal(true)}
            className="w-full border border-red-500 text-red-500 rounded-md py-2 text-sm font-semibold flex items-center justify-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </button>
        </form>
      </div>

      {/* ================= LOGOUT MODAL ================= */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className={`w-[300px] rounded-xl p-6 text-center ${
              darkMode ? "bg-[#020617]" : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold mb-2">Confirm Logout</h2>
            <p className="text-sm mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-sm rounded-md border"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm rounded-md bg-red-500 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
