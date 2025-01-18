import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const section = document.querySelector(".hero-section");

    const createBurstEffect = (e) => {
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        const size = Math.random() * 4 + 2; // Particle size between 2px and 8px
        const xOffset = Math.random() * 100 - 50; // Random offset for X-axis
        const yOffset = Math.random() * 100 - 50; // Random offset for Y-axis

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${e.clientX + xOffset}px`;
        particle.style.top = `${e.clientY + yOffset}px`;

        section.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 1000); // Particles fade out after 1.5 seconds
      }
    };

    section.addEventListener("mousemove", createBurstEffect);

    return () => {
      section.removeEventListener("mousemove", createBurstEffect);
    };
  }, []);

  return (
    <section className="hero-section relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black text-white py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-r from-gray-800 via-black to-gray-800 w-[200%] h-[200%] rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
        Hindustan Virtual University
      </h1>
      <p className="text-sm sm:text-base max-w-xl mb-6 text-gray-300">
        Your gateway to a modern, immersive learning experience.
      </p>
      <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
        Get Started
      </button>
    </section>
  );
}

export default Hero;