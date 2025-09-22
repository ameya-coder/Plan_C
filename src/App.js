import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register"; 
import AdminLogin from "./components/AdminLogin";
import ProfileEdit from "./components/ProfileEdit";
import AdminDashboard from "./components/AdminDashboard";
import RegisterComplaint from "./components/RegisterComplaint";
import TrackProgress from "./components/TrackProgress";
import './App.css'; 



export default function App() {
  const [page, setPage] = useState("home"); // track which page is active
  const [user, setUser] = useState(null); // track logged-in user

  const complaints = [
    {
      id: 1,
      image: "/pothole.jpg",
      location: "Mavoor Road",
      complaint: "Pothole",
      status: "Solved",
    },
    {
      id: 2,
      image: "/waste.jpg",
      location: "Mavoor Road",
      complaint: "Waste",
      status: "In Progress",
    },
    {
      id: 3,
      image: "/streetlight.jpg",
      location: "Easthill",
      complaint: "Streetlight",
      status: "Not Solved",
    },
    {
      id: 4,
      image: "/pothole2.jpg",
      location: "Pavangad",
      complaint: "Pothole",
      status: "In Progress",
    },
  ];

  const myComplaints = [
    {
      id: 1,
      image: "/pothole.jpg",
      location: "Mavoor Road",
      complaint: "Pothole",
      status: "In Progress",
    },
    {
      id: 2,
      image: "/waste.jpg",
      location: "Westhill Road",
      complaint: "Waste",
      status: "Registered",
    },
  ];

  return (
    <div className="font-sans bg-[#F4FFFF] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#384959] text-white px-8 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-3">
                    <img src="/logoo.png" alt="Plan C Logo" className="h-15 w-50" />
          <span className="font-bold tracking-wide"></span>
        </div>
        <div className="flex gap-6 items-center">
          <button onClick={() => setPage("home")} className="hover:text-[#F4FFFF]">HOME</button>
          <button onClick={() => setPage("about")} className="hover:text-[#F4FFFF]">ABOUT</button>
          <button onClick={() => setPage("complaints")} className="hover:text-[#F4FFFF]">VIEW COMPLAINTS</button>
          
          {user ? (
            <span className="text-[#F4FFFF] font-semibold">{user}</span>
          ) : (
          <button 
            onClick={() => setPage("login")} 
            className="hover:text-[#F4FFFF]"
          >
          LOGIN/REGISTER
          </button>
)}
          <img 
            src="/user.jpg" 
            alt="User Icon" 
            className="h-8 w-10 cursor-pointer"
            onClick={() => setPage("profile")} 
          />
        </div>
      </nav>

      {/* Page Content */}
      {page === "home" && (
        <>
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16 flex-grow">
            {/* Left */}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#384959]">
                Plan C – Your Voice in Urban Planning
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                An AI-powered citizen platform for Kozhikode that makes it easy
                to report civic issues, track their progress, and ensure your
                voice shapes urban planning decisions.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setPage("register-complaint")} className="px-5 py-2 rounded-lg bg-[#384959] text-white hover:bg-[#4c6274]">
                REGISTER COMPLAINT
                </button>

                <button onClick={() => setPage("track-progress")} className="px-5 py-2 rounded-lg bg-[#A7C7E7] text-[#384959] hover:bg-[#91b6dc]">
                  TRACK PROGRESS
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <img src="/city.jpg" alt="City Illustration" className="max-w-sm" />
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12 py-12">
            <div className="bg-[#A7C7E7] rounded-xl p-6 text-center shadow">
              <h3 className="font-bold text-lg mb-2 text-[#384959]">TRANSPARENCY</h3>
              <p className="text-gray-700 text-sm">
                Every complaint is visible to all citizens with realtime status
                updates, ensuring accountability.
              </p>
            </div>
            <div className="bg-[#A7C7E7] rounded-xl p-6 text-center shadow">
              <h3 className="font-bold text-lg mb-2 text-[#384959]">CITIZEN EMPOWERMENT</h3>
              <p className="text-gray-700 text-sm">
                Your voice matters – report issues, upvote complaints, and
                influence planning decisions.
              </p>
            </div>
            <div className="bg-[#A7C7E7] rounded-xl p-6 text-center shadow">
              <h3 className="font-bold text-lg mb-2 text-[#384959]">AI PLANNING</h3>
              <p className="text-gray-700 text-sm">
                AI-powered classification and mapping help prioritize issues for
                quicker and more-efficient resolution.
              </p>
            </div>
          </section>
        </>
      )}

      {page === "complaints" && (
        <section className="px-12 py-12 flex-grow">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => setPage("home")} 
              className="text-white bg-[#384959] px-4 py-2 rounded-lg hover:bg-[#4c6274]"
            >
              ← Back
            </button>
            <div className="flex gap-4 text-[#384959]">
              <button onClick={() => setPage("register-complaint")} className="hover:underline font-bold">
              Register Complaint
              </button>

              <span>|</span>
              <button
              onClick={() => setPage("mycomplaints")}
              className="hover:underline font-bold">View my Complaints</button>
            </div>
          </div>

          {/* Complaints grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {complaints.map((c) => (
              <div key={c.id} className="bg-white rounded-lg shadow p-4">
                <img src={c.image} alt={c.complaint} className="w-full h-40 object-cover rounded-lg mb-3" />
                <div className="flex items-center gap-2 mb-2">
                   <img src="/upvote.jpg" alt="Upvote"className="w-6 h-6 cursor-pointer"/>
                </div>
                <p className="text-sm font-bold">LOCATION: {c.location}</p>
                <p className="text-sm font-bold">COMPLAINT: {c.complaint}</p>
                <p className="text-sm">STATUS: {c.status}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === "mycomplaints" && (
        <div className="flex-grow px-12 py-8">
          <button
            onClick={() => setPage("complaints")}
            className="mb-6 px-4 py-2 bg-[#384959] text-white rounded hover:bg-[#4c6274]"
          >
            ← Back
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myComplaints.map((c) => (
              <div key={c.id} className="bg-white rounded-lg shadow p-4">
                <img
                  src={c.image}
                  alt={c.complaint}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <p className="text-sm font-bold">LOCATION: {c.location}</p>
                <p className="text-sm font-bold">COMPLAINT: {c.complaint}</p>
                <p className="text-sm">STATUS: {c.status}</p>
                <div className="flex items-center space-x-5 mt-3">
                  <button className="px-3 py-1 bg-[#384959] text-white text-sm rounded hover:bg-[#4c6274]">
                    EDIT POST
                  </button>
                  <button onClick={() => setPage("track-progress")} className="px-3 py-1 bg-[#384959] text-white text-sm rounded hover:bg-[#4c6274]">
                    TRACK PROGRESS
                  </button>
                  <img src="/bin.jpg" alt="Delete" className="ml-35 h-6 w-5 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === "login" && <Login setPage={setPage} setUser={setUser} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "admin-login" && <AdminLogin setPage={setPage} />}
      {page === "profile" && <ProfileEdit setPage={setPage} />}
      {page === "admin-dashboard" && <AdminDashboard setPage={setPage} />}
      {page === "register-complaint" && <RegisterComplaint setPage={setPage} />}
      {page === "track-progress" && <TrackProgress setPage={setPage} />}





      {/* Footer */}
      <footer className="bg-[#384959] py-6 text-center text-white text-sm">
        Copyright 2025 <br />
        All rights reserved. Powered by Government Engineering College
        Kozhikode
      </footer>
    </div>
  );
}
