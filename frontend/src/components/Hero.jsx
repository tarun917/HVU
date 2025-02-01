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
    <section className="hero-section relative flex flex-col items-center justify-center text-center bg-black text-white py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-r from-gray-800 via-black to-gray-800 w-[200%] h-[200%] rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 drop-shadow-lg">
        MilkyWay{' '}
       <span className="relative">
       <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-red-500 to-green-500 glow-text">
        Virtual
       </span>{' '}
       <span className="absolute -inset-1 bg-gradient-to-r from-white-500 via-pink-500 to-yellow-500 blur-xl opacity-50 animate-glow"></span>
       <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-yellow-300 text-sm animate-sparkle">
       ✨
       </span>
       </span>{' '}
       University
      </h1>
        <p className="text-sm sm:text-base max-w-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-green-500 drop-shadow-md">
          Your gateway to a modern, 
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-700 to-yellow-400 animate-pulse drop-shadow-lg">{' '}
          immersive
          </span>{' '}
          learning experience.
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
        Get Started
        </button>
    </section>
  );
}

export default Hero;