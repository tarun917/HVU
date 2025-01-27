// src/pages/Organisation.jsx

import React from 'react';
import { AcademicCapIcon, LightBulbIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/solid';
import tarunCeo from '../assets/images/founder/tarunCeo.png';
import anuragCoFounder from '../assets/images/founder/anuragCoFounder.png';

function Organisation() {
  // Leadership Members Data
  const leadershipMembers = [
    {
      name: 'Tarun Daharwal',
      role: 'CEO&CTO',
      image: tarunCeo,
      description: 'Tarun Daharwal leads our organization with a vision for innovation and excellence in virtual education.',
    },
    {
      name: 'Anurag Singh',
      role: 'Co-Founder',
      image: anuragCoFounder,
      description: 'Anurag Singh co-founded MilkyWay Virtual University to revolutionize online learning experiences.',
    },
    // आप और भी सदस्यों को यहाँ जोड़ सकते हैं
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl mt-20 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Our Organisation
        </h2>
        <p className="text-lg text-gray-300">
          Discover the core values and structure that make MilkyWay Virtual University unique.
        </p>
      </div>

      {/* Organisation Details */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Management Section */}
        <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <AcademicCapIcon className="h-12 w-12 text-white mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Management</h3>
          <p className="text-gray-200">
            Our management team is dedicated to fostering innovation and excellence in virtual education.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-tr from-green-500 to-teal-600 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <LightBulbIcon className="h-12 w-12 text-white mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-200">
            To provide accessible, high-quality education through cutting-edge virtual platforms.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-tr from-pink-500 to-red-600 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <GlobeAltIcon className="h-12 w-12 text-white mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-gray-200">
            To be a global leader in virtual education, empowering students worldwide to achieve their goals.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-tr from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <UsersIcon className="h-12 w-12 text-white mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Values</h3>
          <p className="text-gray-200">
            Integrity, Innovation, Inclusivity, and Excellence are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-16">
        {/* Management Team */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Meet Our Leadership
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {leadershipMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
                <p className="text-gray-300 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mission */}
            <div className="flex-1 bg-gradient-to-tr from-purple-600 to-pink-500 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                Our Mission
              </h4>
              <p className="text-gray-200">
                To democratize education by leveraging advanced virtual technologies, making learning accessible to all.
              </p>
            </div>
            {/* Vision */}
            <div className="flex-1 bg-gradient-to-tr from-blue-600 to-teal-500 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                Our Vision
              </h4>
              <p className="text-gray-200">
                To create a globally recognized virtual university that sets the standard for online education and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Our Core Values
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold mb-2">Integrity</p>
              <p className="text-gray-200">
                We uphold the highest standards of integrity in all of our actions.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-gradient-to-tr from-green-500 to-teal-600 p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold mb-2">Innovation</p>
              <p className="text-gray-200">
                We foster a culture of innovation to continually improve and adapt.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-gradient-to-tr from-pink-500 to-red-600 p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold mb-2">Inclusivity</p>
              <p className="text-gray-200">
                We strive to create an inclusive environment for all students and staff.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-gradient-to-tr from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold mb-2">Excellence</p>
              <p className="text-gray-200">
                We are committed to excellence in education, research, and community service.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Organisation;
