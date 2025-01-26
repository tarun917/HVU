// src/pages/Dashboard.jsx
import { useState, useRef } from "react";

export default function Dashboard() {
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const fileInputRef = useRef(null);

  // बेसिक यूज़र स्टेट
  const [name, setName] = useState("Tarun");
  const userId = "USER-20230816-001";
  const [country, setCountry] = useState("India");
  const [city, setCity] = useState("");
  const [timeZone, setTimeZone] = useState("(GMT+5:30) Chennai, Kolkata...");
  const [language, setLanguage] = useState("English");
  const [faculty, setFaculty] = useState("");
  const [accessOptions, setAccessOptions] = useState({
    library: true,
    canteen: false,
    playgrounds: false,
    labs: false,
  });
  const [about, setAbout] = useState(
    "I am working as a content writer in Bangalore. Now want to change my career as a full stack developer."
  );

  // अतिरिक्त सेक्शन:
  const [interests, setInterests] = useState("Web Development, VR/AR, Gaming");
  const [skills, setSkills] = useState("React, Python, 3D Modeling");

  // 3D/VR Setup Info
  const [vrHeadset, setVrHeadset] = useState("");
  const [deviceSpecs, setDeviceSpecs] = useState("");
  // e.g., “Oculus Quest 2”, “16GB RAM, NVIDIA GTX 1660ti”

  // Avatar फ़ाइल चयन
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatarPreview(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeAvatarClick = () => {
    fileInputRef.current.click();
  };

  // Access toggles
  const handleAccessChange = (e) => {
    const { name, checked } = e.target;
    setAccessOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: Print in console or call your API
    console.log("Saving user data => ", {
      avatarFile,
      name,
      userId,
      country,
      city,
      timeZone,
      language,
      faculty,
      accessOptions,
      about,
      interests,
      skills,
      vrHeadset,
      deviceSpecs,
    });
    alert("Profile data saved (demo)!");
  };

  // Tailwind gradient + 3D-ish style
  return (
    <div className="ml-[12.5%] min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 flex justify-center items-start py-10 px-4">
      <div
        className="w-full max-w-4xl rounded-xl shadow-2xl p-8 relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-4xl font-bold mb-5 text-white drop-shadow-md">
          User Profile
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-purple-300 shadow-lg">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="User Avatar"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-sm text-gray-400">
                  No Avatar
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleChangeAvatarClick}
              className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transition font-semibold"
            >
              Change Avatar
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              className="hidden"
              accept="image/*"
            />
            <p className="text-sm text-white mt-2">
              (3D/real avatar can be integrated)
            </p>
          </div>

          {/* Form fields */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="bg-white/70 text-gray-800 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Unique ID */}
            <div>
              <label className="block mb-1 font-medium">Unique ID</label>
              <input
                type="text"
                className="bg-gray-300/80 w-full rounded px-3 py-2"
                value={userId}
                disabled
              />
            </div>

            {/* Country */}
            <div>
              <label className="block mb-1 font-medium">Country</label>
              <select
                className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                {/* ... */}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 font-medium">City</label>
              <input
                type="text"
                className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Timezone */}
            <div>
              <label className="block mb-1 font-medium">Time Zone</label>
              <select
                className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
              >
                <option value="(GMT+5:30) Chennai, Kolkata...">
                  (GMT+5:30) Chennai, Kolkata...
                </option>
                <option value="(GMT-5:00) Eastern Time (US & Canada)">
                  (GMT-5:00) Eastern Time (US & Canada)
                </option>
                <option value="(GMT+1:00) Central European Time">
                  (GMT+1:00) Central European Time
                </option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block mb-1 font-medium">Language</label>
              <select
                className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
                {/* more */}
              </select>
            </div>
          </div>
        </div>

        {/* Faculty, Access */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div>
            <label className="block mb-1 font-medium">Faculty (Department)</label>
            <input
              type="text"
              className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
              placeholder="E.g. Computer Science"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Access</label>
            <div className="mt-2 space-y-2">
              {Object.keys(accessOptions).map((key) => (
                <label
                  className="flex items-center gap-2"
                  key={key}
                >
                  <input
                    type="checkbox"
                    name={key}
                    checked={accessOptions[key]}
                    onChange={(e) => handleAccessChange(e)}
                    className="h-4 w-4 text-purple-500"
                  />
                  <span className="capitalize">{key}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-6 text-white">
          <label className="block mb-1 font-medium">About</label>
          <textarea
            rows={4}
            className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        {/* Interests + Skills */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div>
            <label className="block mb-1 font-medium">Interests</label>
            <input
              type="text"
              className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
              placeholder="e.g. Web Dev, Gaming"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Skills</label>
            <input
              type="text"
              className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
              placeholder="e.g. React, 3D modeling"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        </div>

        {/* VR Setup */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div>
            <label className="block mb-1 font-medium">VR/AR Headset</label>
            <input
              type="text"
              className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
              placeholder="e.g. Oculus Quest 2"
              value={vrHeadset}
              onChange={(e) => setVrHeadset(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Device Specs</label>
            <input
              type="text"
              className="bg-white/70 text-gray-800 w-full rounded px-3 py-2"
              placeholder="e.g. 16GB RAM, NVIDIA 3060"
              value={deviceSpecs}
              onChange={(e) => setDeviceSpecs(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-400 hover:bg-green-500 text-white font-bold rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Save Profile
          </button>
          <button
            onClick={() => alert("Launching 3D Avatar Editor... (demo)")}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Launch 3D Editor
          </button>
        </div>
      </div>
    </div>
  );
}