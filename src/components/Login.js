import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setPage,setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [popupEmail, setPopupEmail] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    setPopupEmail(form.email); // <-- set the email here
    setShowPopup(true);
    setForm({ email: "", password: "" });
    setErrors({});
  }
};



  return (
    <div className="min-h-screen bg-[#F4FFFF] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        <nav className="bg-[#384959] text-white text-center py-3 text-lg font-semibold">LOGIN</nav>

        <div className="p-6">
          <div className="flex justify-center mb-6">
            <svg className="h-12 w-12 text-[#384959]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#384959]"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#384959]"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#384959] text-white py-2 rounded-lg hover:bg-[#2c3a47] transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Login as Admin?{" "}
           <span
            className="text-[#384959] font-semibold hover:underline cursor-pointer"
            onClick={() => setPage("admin-login")}
          >
          Admin Login
          </span>
          </p>

          <p className="mt-2 text-center text-sm">
            Don’t have an account?{" "}
            <span
  className="text-[#384959] font-semibold hover:underline cursor-pointer"
  onClick={() => setPage("register")}
>
  Register
</span>

          </p>
        </div>
      </div>

      
      {/* popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
            <p className="mb-4 text-lg font-semibold text-green-600">Logged in Successfully!</p>
            <button
        onClick={() => {
          setShowPopup(false);
          setPage("home");
          setUser(popupEmail); // now it has the correct email
        }}
        className="bg-[#384959] text-white px-6 py-2 rounded-lg hover:bg-[#2c3a47] transition"
      >
        OK
      </button>

          </div>
        </div>
      )}
    </div>
  );
}
