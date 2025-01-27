// src/pages/Dashboard.jsx

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AcademicCapIcon, LightBulbIcon, GlobeAltIcon, UsersIcon, ChatBubbleLeftRightIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import io from "socket.io-client";

// Yup Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  city: yup.string().required("City is required"),
  faculty: yup.string().required("Faculty is required"),
  about: yup.string().required("About section cannot be empty"),
});

export default function Dashboard() {
  const fileInputRef = useRef(null);
  const socketRef = useRef();

  // React Hook Form का उपयोग करें
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  // Avatar Preview State
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);


  // Avatar फ़ाइल चयन हैंडलर
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeAvatarClick = () => {
    fileInputRef.current.click();
  };
  // फॉर्म सबमिशन हैंडलर
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    console.log("Avatar File:", avatarFile);
    alert("प्रोफ़ाइल डेटा सफलतापूर्वक सेव हो गया!");
    reset();
    setAvatarPreview("");
    setAvatarFile(null);
  };

  // Chat Initialization
  useEffect(() => {
    // Socket.io server का URL
    socketRef.current = io("http://localhost:4000");

    socketRef.current.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-7/8 ml-36 mr-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 flex justify-center items-start py-10 px-6">
      <div
        className="w-full max-w-6xl rounded-xl shadow-2xl p-8 relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
      >
        <h1 className="text-5xl font-bold mb-5 text-white drop-shadow-md text-center">
          User Profile
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 border-4 border-purple-300 shadow-lg">
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
                className="mt-4 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transition font-semibold"
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
            
            {/* Basic Information */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-purple-300'}`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-purple-300'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  {...register("subject")}
                  className={`w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 ${errors.subject ? 'focus:ring-red-500' : 'focus:ring-purple-300'}`}
                  placeholder="Subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  {...register("city")}
                  className={`w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 ${errors.city ? 'focus:ring-red-500' : 'focus:ring-purple-300'}`}
                  placeholder="City"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
              </div>

              {/* Faculty */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">Faculty (Department)</label>
                <input
                  type="text"
                  {...register("faculty")}
                  className={`w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 ${errors.faculty ? 'focus:ring-red-500' : 'focus:ring-purple-300'}`}
                  placeholder="E.g. Computer Science"
                />
                {errors.faculty && <p className="text-red-500 text-sm mt-1">{errors.faculty.message}</p>}
              </div>
            </div>
          </div>

          {/* Access Options */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-white">Access</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("accessOptions.library")}
                  className="h-5 w-5 text-purple-500"
                />
                <span className="capitalize">Library</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("accessOptions.canteen")}
                  className="h-5 w-5 text-purple-500"
                />
                <span className="capitalize">Canteen</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("accessOptions.playgrounds")}
                  className="h-5 w-5 text-purple-500"
                />
                <span className="capitalize">Playgrounds</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("accessOptions.labs")}
                  className="h-5 w-5 text-purple-500"
                />
                <span className="capitalize">Labs</span>
              </label>
            </div>
          </div>

          {/* About */}
          <div className="mt-6">
            <label className="block mb-1 font-medium">About</label>
            <textarea
              {...register("about")}
              className={`w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 ${errors.about ? 'focus:ring-red-500' : 'focus:ring-purple-300'}`}
              placeholder="Tell us about yourself..."
              rows="5"
            ></textarea>
            {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about.message}</p>}
          </div>

          {/* Additional Information */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Interests */}
            <div>
              <label className="block mb-1 font-medium">Interests</label>
              <input
                type="text"
                {...register("interests")}
                className="w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="e.g. Web Dev, Gaming"
              />
            </div>
            {/* Skills */}
            <div>
              <label className="block mb-1 font-medium">Skills</label>
              <input
                type="text"
                {...register("skills")}
                className="w-full px-4 py-3 rounded bg-white/70 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="e.g. React, 3D Modeling"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-full shadow-md hover:from-blue-600 hover:to-green-600 transition-transform transform hover:scale-105"
            >
              Save Profile
            </button>
          </div>
        </form>

        {/* Advanced Features */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">
            Advanced Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1: 3D Avatar Editor */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <AcademicCapIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3D Avatar Editor</h3>
              <p className="text-gray-300 mb-4">
                Customize your avatar in a 3D environment to represent yourself uniquely in our virtual classrooms.
              </p>
              <button
                type="button"
                onClick={() => alert("Launching 3D Avatar Editor... (demo)")}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transition"
              >
                Launch Editor
              </button>
            </div>

            {/* Feature 2: Real-Time Analytics */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <LightBulbIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-gray-300 mb-4">
                Gain insights into your learning patterns and performance with our integrated analytics dashboard.
              </p>
              <button
                type="button"
                onClick={() => alert("Accessing Real-Time Analytics... (demo)")}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition"
              >
                View Analytics
              </button>
            </div>

            {/* Feature 3: Global Community */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <GlobeAltIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-300 mb-4">
                Connect with students and faculty from around the world, fostering a diverse and inclusive learning environment.
              </p>
              <button
                type="button"
                onClick={() => alert("Joining Global Community... (demo)")}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition"
              >
                Join Now
              </button>
            </div>

            {/* Feature 4: Interactive Forums */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <UsersIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Forums</h3>
              <p className="text-gray-300 mb-4">
                Participate in interactive discussions, Q&A sessions, and collaborative projects within our forums.
              </p>
              <button
                type="button"
                onClick={() => alert("Accessing Interactive Forums... (demo)")}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow transition"
              >
                Explore Forums
              </button>
            </div>

            {/* Feature 5: Certification */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <AcademicCapIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-300 mb-4">
                Earn recognized certifications upon successful completion of courses and projects.
              </p>
              <button
                type="button"
                onClick={() => alert("Viewing Certifications... (demo)")}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
              >
                View Certifications
              </button>
            </div>

            {/* Feature 6: Virtual Events */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Virtual Events</h3>
              <p className="text-gray-300 mb-4">
                Attend webinars, workshops, and seminars hosted by industry experts and thought leaders.
              </p>
              <button
                type="button"
                onClick={() => alert("Accessing Virtual Events... (demo)")}
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow transition"
              >
                Join Events
              </button>
            </div>
          </div>
        </div>

        {/* Meet Your Partner Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">
            Meet Your Partner
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Partner Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/partner1.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Partner 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Anjali Mehta</h3>
              <p className="text-gray-300 mb-2">Computer Science</p>
              <p className="text-gray-300 mb-4">
                Passionate about AI and machine learning. Let's collaborate on projects!
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Anjali... (demo)")}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>

            {/* Partner Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/partner2.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Partner 2"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Rahul Singh</h3>
              <p className="text-gray-300 mb-2">Web Development</p>
              <p className="text-gray-300 mb-4">
                Enthusiastic about frontend technologies and UX/UI design.
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Rahul... (demo)")}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>

            {/* Partner Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/partner3.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Partner 3"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Priya Kapoor</h3>
              <p className="text-gray-300 mb-2">Data Science</p>
              <p className="text-gray-300 mb-4">
                Data enthusiast with a love for big data and analytics.
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Priya... (demo)")}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>

            {/* Partner Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/partner4.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Partner 4"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Karan Verma</h3>
              <p className="text-gray-300 mb-2">Cybersecurity</p>
              <p className="text-gray-300 mb-4">
                Dedicated to protecting digital assets and ensuring security.
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Karan... (demo)")}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* International Students Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">
            International Students
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* International Student Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/foreign1.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Foreign Student 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Liam Johnson</h3>
              <p className="text-gray-300 mb-2">USA</p>
              <p className="text-gray-300 mb-4">
                Specializing in Machine Learning and AI.
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Liam... (demo)")}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>

            {/* International Student Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/foreign2.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Foreign Student 2"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Emma Brown</h3>
              <p className="text-gray-300 mb-2">Canada</p>
              <p className="text-gray-300 mb-4">
                Passionate about Web Development and Design.
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Emma... (demo)")}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>

            {/* International Student Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/foreign3.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Foreign Student 3"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Noah Williams</h3>
              <p className="text-gray-300 mb-2">Australia</p>
              <p className="text-gray-300 mb-4">
                Focused on Data Science and Big Data Analytics.
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Noah... (demo)")}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>

            {/* International Student Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="/assets/images/foreign4.jpg" // सुनिश्चित करें कि पथ सही है
                alt="Foreign Student 4"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sophia Martinez</h3>
              <p className="text-gray-300 mb-2">Spain</p>
              <p className="text-gray-300 mb-4">
                Enthusiastic about Cybersecurity and Network Security.
              </p>
              <button
                type="button"
                onClick={() => alert("Connecting with Sophia... (demo)")}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
