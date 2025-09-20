import React, { useState } from "react";
import { Pencil, LogOut, ArrowLeft, User } from "lucide-react"; // using lucide icons

export default function ProfileEdit({setPage}) {
  const [form, setForm] = useState({
    name: "Rayna",
    email: "rayna@gmail.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [editableFields, setEditableFields] = useState({
    name: false,
    email: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleEdit = (field) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    // Clear user session (example: localStorage)
    localStorage.removeItem("userToken");
    alert("You have been logged out!");
    // Redirect (if using react-router-dom)
    window.location.href = "/login";
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Call API to delete account
      alert("Account deleted successfully!");
      localStorage.removeItem("userToken");
      window.location.href = "/signup"; // redirect to signup page
    }
  };

  return (
    <div className="min-h-screen bg-[#F4FFFF] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#384959] text-white px-4 py-3">
          <button className="text-lg">
            <ArrowLeft />
          </button>
          <h1 className="text-lg font-semibold">Profile</h1>
          <button onClick={handleLogout} className="flex items-center space-x-2 hover:text-gray-300">
            <span>Logout</span>
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Profile Icon */}
          <div className="flex justify-center mb-6">
            <User className="h-20 w-20 text-black border-2 border-gray-400 rounded-full p-2" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">Name :</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  readOnly={!editableFields.name}
                  className={`w-full border rounded-lg px-4 py-2 mt-1 ${
                    editableFields.name ? "bg-white" : "bg-gray-100"
                  }`}
                />
              </div>
              <button
                type="button"
                onClick={() => toggleEdit("name")}
                className="mt-6 text-gray-600 hover:text-black"
              >
                <Pencil className="h-5 w-5" />
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">Email :</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  readOnly={!editableFields.email}
                  className={`w-full border rounded-lg px-4 py-2 mt-1 ${
                    editableFields.email ? "bg-white" : "bg-gray-100"
                  }`}
                />
              </div>
              <button
                type="button"
                onClick={() => toggleEdit("email")}
                className="mt-6 text-gray-600 hover:text-black"
              >
                <Pencil className="h-5 w-5" />
              </button>
            </div>

            {/* Password Section */}
            <div>
              <label className="block text-gray-700 font-medium">Current Password :</label>
              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">New Password :</label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Confirm New Password :</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2c3a47] text-white py-2 rounded-lg hover:bg-[#384959] transition"
            >
              Save Changes
            </button>

            {/* Delete Account */}
            <button
              type="button"
              onClick={handleDelete}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
