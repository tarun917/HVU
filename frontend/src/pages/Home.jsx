import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

function Home() {
  const features = [
    { title: "Virtual Library", description: "Access thousands of books and comics in our state-of-the-art virtual library.", gradient: "bg-gradient-to-r from-purple-500 to-indigo-500" },
    { title: "Virtual Games", description: "Compete in exciting games like football, cricket, and more with students worldwide.", gradient: "bg-gradient-to-r from-green-400 to-blue-500" },
    { title: "Virtual Classrooms", description: "Attend immersive virtual classes with cutting-edge technology.", gradient: "bg-gradient-to-r from-yellow-400 to-orange-500" },
    { title: "Study Rooms", description: "Study in private or group virtual rooms for uninterrupted focus.", gradient: "bg-gradient-to-r from-pink-400 to-red-500" },
    { title: "Virtual Dates", description: "Connect and socialize virtually, just like in real life.", gradient: "bg-gradient-to-r from-blue-400 to-cyan-500" },
    { title: "Global Collaboration", description: "Collaborate with students worldwide to create, learn, and grow together.", gradient: "bg-gradient-to-r from-green-400 to-lime-500" },
  ];

  return (
    <div>
      <Hero />
      <section className="py-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Virtual University</h2>
        <div className="grid gap-6 px-4 sm:px-6 md:px-10 lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:animate-[neon-glow-purple_1.5s_infinite] transition duration-300 transform hover:scale-105 hover:rotate-1">
            <h3 className="text-xl font-bold mb-2">Virtual Library</h3>
            <p>Access thousands of books and comics in our state-of-the-art virtual library.</p>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white hover:animate-[neon-glow-green_1.5s_infinite] transition duration-300 transform hover:scale-105 hover:-rotate-1">
            <h3 className="text-xl font-bold mb-2">Virtual Games</h3>
            <p>Compete in exciting games like football, cricket, and more with students worldwide.</p>
          </div>
          {/* Card 3 */}
          <div className="p-6 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:animate-[neon-glow-orange_1.5s_infinite] transition duration-300 transform hover:scale-105 hover:rotate-1">
            <h3 className="text-xl font-bold mb-2">Virtual Classrooms</h3>
            <p>Attend immersive virtual classes with cutting-edge technology.</p>
          </div>
          {/* Card 4 */}
          <div className="p-6 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white hover:animate-[neon-glow-pink_1.5s_infinite] transition duration-300 transform hover:scale-105 hover:-rotate-1">
            <h3 className="text-xl font-bold mb-2">Study Rooms</h3>
            <p>Study in private or group virtual rooms for uninterrupted focus.</p>
          </div>
          {/* Card 5 */}
          <div className="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-teal-500 text-white hover:animate-[neon-glow-blue_1.5s_infinite] transition duration-300 transform hover:scale-105 hover:rotate-1">
            <h3 className="text-xl font-bold mb-2">Virtual Dates</h3>
            <p>Connect and socialize virtually, just like in real life.</p>
          </div>
          {/* Card 6 */}
          <div className="p-6 rounded-lg bg-gradient-to-r from-green-400 to-lime-500 text-white hover:animate-[neon-glow-lime_1.5s_infinite] transition duration-300 transform hover:scale-105 hover:-rotate-1">
            <h3 className="text-xl font-bold mb-2">Global Collaboration</h3>
            <p>Collaborate with students worldwide to create, learn, and grow together.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;