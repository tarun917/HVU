// src/pages/About.jsx

import React, { useState } from 'react';
import { AcademicCapIcon, LightBulbIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/solid';
import unipic from '../assets/images/imgassets/unipic.png'; // इमेज इम्पोर्ट करें

function About() {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // यहां आप फॉर्म डेटा को सर्वर पर भेज सकते हैं या अन्य प्रक्रिया कर सकते हैं
    console.log('Form Data Submitted:', formData);
    // फॉर्म को रीसेट करें
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Your message has been submitted!');
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl mt-20 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          About MilkyWay Virtual University
        </h2>
        <p className="text-lg p-6 text-gray-300 max-w-2xl mx-auto">
          MilkyWay Virtual University is at the forefront of online education, offering immersive learning experiences through state-of-the-art virtual classrooms and real-time communication tools.
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Our Journey
            </h3>
            <p className="text-gray-200 mb-4">
              Founded in January 2025, MilkyWay Virtual University was established with the vision to make quality education accessible to everyone, anywhere in the world. Our mission is to leverage cutting-edge technology to deliver an unparalleled learning experience.
            </p>
            <p className="text-gray-200">
              We believe in fostering a community of learners who are empowered to achieve their goals through innovative teaching methods and collaborative platforms.
            </p>
          </div>
          {/* Image Content */}
          <div className="md:w-1/2">
            <img
              src={unipic} // इम्पोर्ट किए गए वेरिएबल का उपयोग करें
              alt="Virtual Classroom"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <LightBulbIcon className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-200">
              To provide accessible, high-quality education through cutting-edge virtual platforms, empowering students worldwide to achieve their academic and professional goals.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-gradient-to-tr from-blue-600 to-teal-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <GlobeAltIcon className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-200">
              To be a global leader in virtual education, setting the standard for online learning excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Our Core Values
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Value 1 */}
          <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-2">Integrity</p>
            <p className="text-gray-200">
              We uphold the highest standards of integrity in all our actions, fostering trust and respect within our community.
            </p>
          </div>
          {/* Value 2 */}
          <div className="bg-gradient-to-tr from-green-500 to-teal-600 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-2">Innovation</p>
            <p className="text-gray-200">
              We embrace innovation to continuously improve our educational offerings and stay ahead in the dynamic world of virtual learning.
            </p>
          </div>
          {/* Value 3 */}
          <div className="bg-gradient-to-tr from-pink-500 to-red-600 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-2">Inclusivity</p>
            <p className="text-gray-200">
              We strive to create an inclusive environment where all students and staff feel valued and empowered to contribute.
            </p>
          </div>
          {/* Value 4 */}
          <div className="bg-gradient-to-tr from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-2">Excellence</p>
            <p className="text-gray-200">
              We are committed to excellence in education, research, and community service, ensuring the best outcomes for our students.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">
          What Our Students Say
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-200 mb-4">
              "MilkyWay Virtual University has transformed my learning experience with its immersive virtual classrooms and dedicated faculty."
            </p>
            <p className="text-gray-400 font-semibold">- Ayesha Khan</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-200 mb-4">
              "The real-time communication tools have made collaboration with peers seamless and effective."
            </p>
            <p className="text-gray-400 font-semibold">- Rajiv Malhotra</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-200 mb-4">
              "Access to the virtual library has been invaluable for my research and studies."
            </p>
            <p className="text-gray-400 font-semibold">- Sneha Verma</p>
          </div>
          {/* Testimonial 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-200 mb-4">
              "Access to the virtual gamezone has been invaluable for my fun and for relaxing mind."
            </p>
            <p className="text-gray-400 font-semibold">- Parag Agrawal</p>
          </div>
        </div>
      </section>

      {/* Message Form Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
          Send Us a Message
        </h3>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-gray-300 font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-300 font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
                rows="5"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default About;
