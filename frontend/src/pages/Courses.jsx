import { useState } from "react";

export default function Courses() {
  const initialCourses = [
    {
      id: 1,
      title: "3D Game Development",
      description: "Learn Unity, C# scripting, and build immersive 3D worlds.",
      level: "Beginner",
      colorFrom: "from-pink-500",
      colorTo: "to-red-500",
      longDescription:
        "In this course, you'll create full 3D games using Unity. Topics include physics, AI, advanced 3D modeling, and VR integrations. Perfect for beginners who want to jump into 3D game dev.",
    },
    {
      id: 2,
      title: "Web XR Mastery",
      description:
        "Create AR/VR experiences in the browser using Three.js and WebXR API.",
      level: "Advanced",
      colorFrom: "from-green-400",
      colorTo: "to-blue-500",
      longDescription:
        "This advanced course dives deep into AR/VR in the browser. We'll use Three.js, WebXR Device API, and learn to render immersive scenes accessible by standard headsets or even phone-based AR.",
    },
    {
      id: 3,
      title: "AI-Driven Robotics",
      description:
        "Combine AI & robotics to build next-gen humanoid robots for your virtual campus.",
      level: "Intermediate",
      colorFrom: "from-yellow-400",
      colorTo: "to-orange-500",
      longDescription:
        "A unique blend of AI, machine learning, and robotics. Learn how to program robots to autonomously navigate, interact, and even host campus tours in a virtual environment.",
    },
    {
      id: 4,
      title: "Neural Networks & Deep Learning",
      description:
        "Dive into neural nets, with hands-on labs in a futuristic VR environment.",
      level: "Advanced",
      colorFrom: "from-purple-500",
      colorTo: "to-indigo-500",
      longDescription:
        "Cover convolutional neural networks, recurrent networks, and advanced topologies. We'll use VR labs for data visualization, letting you literally walk through your model's layers.",
    },
    {
      id: 5,
      title: "Quantum Computing Basics",
      description:
        "Understand quantum bits, entanglement, and the future of computing.",
      level: "Beginner",
      colorFrom: "from-blue-400",
      colorTo: "to-cyan-500",
      longDescription:
        "Get introduced to the mind-bending world of quantum bits, superposition, and real-world quantum computers. Perfect for beginners who want a solid foundation.",
    },
    {
      id: 6,
      title: "Metaverse Architecture",
      description:
        "Learn world-building, VR design patterns & create your own campus environment.",
      level: "Intermediate",
      colorFrom: "from-teal-400",
      colorTo: "to-green-500",
      longDescription:
        "Focus on advanced 3D environment design, multi-user spaces, and distributed architecture that powers the Metaverse. Expect design patterns, user presence, and building your own mini-metaverse.",
    },
  ];

  const [courses] = useState(initialCourses);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.longDescription
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchLevel =
      selectedLevel === "All" || course.level === selectedLevel;

    return matchSearch && matchLevel;
  });

  return (
    <div className="ml-[12.5%] min-h-screen flex">

      {/* Main Content */}
      <div className=" min-h-screen flex flex-grow bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-6 tracking-tight neon-text">
            Explore Our Futuristic Courses
          </h1>
          <p className="text-center mb-8 text-gray-300">
            Learn cutting-edge tech in a fully immersive, futuristic environment.
          </p>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full md:w-1/3 p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedLevel === lvl
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  onClick={() => setSelectedLevel(lvl)}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className={`relative rounded-lg p-6 transform transition hover:-translate-y-1 hover:scale-105 hover:rotate-1 
                  bg-gradient-to-tr ${course.colorFrom} ${course.colorTo} shadow-lg`}
              >
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-sm">{course.description}</p>
                <span className="inline-block px-3 py-1 mt-4 bg-black/40 text-white text-xs font-semibold rounded-full">
                  Level: {course.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}