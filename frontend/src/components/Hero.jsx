function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center bg-white py-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition" >
          Hindustan Virtual University
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Your gateway to a modern, immersive learning experience.
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 transition">
        Get Started
        </button>
      </section>
    );
  }
  
  export default Hero;