// src/pages/ActiveClasses.jsx
import { useState } from "react";

export default function ActiveClasses() {
  // डेमो के लिए नकली क्लास टाइम-टेबल
  const initialClasses = [
    {
      id: 101,
      subject: "Quantum Computing 101",
      teacher: "Dr. Sheldon",
      startTime: "9:00 AM",
      endTime: "10:30 AM",
      hall: "Virtual Hall A",
      section: "B.Tech CSE - Section A",
      status: "Live", // Live, Upcoming, or Completed
    },
    {
      id: 102,
      subject: "3D Game Dev Lab",
      teacher: "Prof. Helen",
      startTime: "10:45 AM",
      endTime: "12:00 PM",
      hall: "VR Lab 2",
      section: "B.Sc Gaming - Sec B",
      status: "Upcoming",
    },
    {
      id: 103,
      subject: "AI-Driven Robotics",
      teacher: "Dr. Kapoor",
      startTime: "1:00 PM",
      endTime: "2:30 PM",
      hall: "Mech VR Lab",
      section: "M.Tech Robotics - Sec R1",
      status: "Upcoming",
    },
    {
      id: 104,
      subject: "Web XR Masterclass",
      teacher: "Ms. Emily",
      startTime: "2:45 PM",
      endTime: "4:00 PM",
      hall: "Virtual Hall B",
      section: "Adv. Web Tech - Sec X",
      status: "Live",
    },
    {
      id: 105,
      subject: "Neural Networks",
      teacher: "Dr. Ramesh",
      startTime: "4:15 PM",
      endTime: "5:45 PM",
      hall: "Virtual Hall C",
      section: "M.Sc AI - Sec 1",
      status: "Upcoming",
    },
  ];

  const [classes] = useState(initialClasses);

  // Filter: सब / Live / Upcoming / Completed
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Live", "Upcoming", "Completed"];

  const filteredClasses = classes.filter((cls) => {
    return (
      selectedFilter === "All" || cls.status === selectedFilter
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-purple-900 to-black px-6 py-10 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6 tracking-tight neon-text">
          Active & Upcoming Classes
        </h1>
        <p className="text-center mb-8 text-gray-300">
          Real-time schedule of ongoing and future classes in our 3D Virtual University.
        </p>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedFilter === f
                  ? "bg-purple-500 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="relative bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg 
                transform transition hover:-translate-y-1 hover:scale-105 hover:rotate-1"
            >
              {/* Subtle 3D overlay */}
              <div className="absolute inset-0 bg-black opacity-20 pointer-events-none rounded-lg"></div>

              <h2 className="relative text-xl font-bold drop-shadow z-10">
                {cls.subject}
              </h2>
              <p className="relative text-gray-300 text-sm z-10 mb-1">
                Teacher: <span className="text-gray-100">{cls.teacher}</span>
              </p>
              <p className="relative text-gray-300 text-sm z-10 mb-1">
                Time:{" "}
                <span className="text-gray-100">
                  {cls.startTime} - {cls.endTime}
                </span>
              </p>
              <p className="relative text-gray-300 text-sm z-10 mb-1">
                Hall/Room: <span className="text-gray-100">{cls.hall}</span>
              </p>
              <p className="relative text-gray-300 text-sm z-10 mb-1">
                Section: <span className="text-gray-100">{cls.section}</span>
              </p>
              <p className="relative text-gray-200 text-sm font-semibold z-10 mt-2">
                Status:{" "}
                <span
                  className={`px-2 py-1 rounded ${
                    cls.status === "Live"
                      ? "bg-green-600"
                      : cls.status === "Upcoming"
                      ? "bg-blue-600"
                      : "bg-gray-500"
                  }`}
                >
                  {cls.status}
                </span>
              </p>

              {/* 3D Join Button */}
              {cls.status === "Live" && (
                <div className="relative z-10 mt-4">
                  <button
                    onClick={() =>
                      alert(`Joining ${cls.subject} in ${cls.hall} (3D)!`)
                    }
                    className="px-4 py-2 bg-black/40 rounded text-sm hover:bg-black/60 transition"
                  >
                    Join 3D Class Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}