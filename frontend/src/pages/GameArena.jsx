import { 
    GiSoccerBall, 
    GiCricketBat, 
    GiStairs, 
    GiCube,
    GiSpaceship,
    GiArtificialIntelligence,
    GiAbstract024  // Verified existing icon
  } from "react-icons/gi";
  import { motion } from 'framer-motion'; // Don't forget to import motion
  
  const games = [
    { 
      id: 1,
      title: "Neon Squid Challenge",
      players: "2.4M",
      popularity: "🔥 98%",
      icon: <GiStairs className="w-12 h-12 text-cyan-400" />, // Existing icon
      gradient: "from-purple-600 via-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "Cyber Football Pro",
      players: "1.8M",
      popularity: "⚡ 94%",
      icon: <GiSoccerBall className="w-12 h-12 text-green-400" />,
      gradient: "from-green-600 via-yellow-400 to-amber-600"
    },
    {
      id: 3,
      title: "Quantum Cricket X",
      players: "1.2M",
      popularity: "🚀 89%",
      icon: <GiCricketBat className="w-12 h-12 text-orange-400" />,
      gradient: "from-orange-600 via-red-500 to-pink-600"
    },
    {
      id: 4,
      title: "Neural Battlegrounds",
      players: "890K",
      popularity: "💫 92%",
      icon: <GiArtificialIntelligence className="w-12 h-12 text-purple-400" />,
      gradient: "from-indigo-600 via-purple-500 to-fuchsia-600"
    },
    {
      id: 5,
      title: "Zero-G Sports",
      players: "680K",
      popularity: "🌌 87%",
      icon: <GiSpaceship className="w-12 h-12 text-blue-400" />,
      gradient: "from-blue-600 via-cyan-400 to-teal-500"
    },
    {
      id: 6,
      title: "Hologrid Champions",
      players: "1.1M",
      popularity: "🌟 91%",
      icon: <GiAbstract024 className="w-12 h-12 text-pink-400" />, // Existing icon
      gradient: "from-pink-600 via-rose-500 to-red-600"
    }
  ];
  function GameArena() {
    return (
    <div className="min-h-screen w-7/8 ml-36 mr-0 mt-0 bg-gradient-to-br from-gray-900 via-space-900 to-black p-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 neon-glow"
        >
          GAME ARENA 2.0
        </motion.h1>
        <p className="text-gray-400 text-lg font-light mb-8">
          Enter the Metaverse of Competitive Gaming
        </p>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {games.map((game) => (
          <motion.div 
            key={game.id}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-gradient-to-br ${game.gradient} rounded-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:z-10 group`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                {game.icon}
                <span className="text-sm font-bold bg-black/30 px-3 py-1 rounded-full">
                  {game.popularity}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">Active Players</span>
                <span className="font-mono text-cyan-400">{game.players}</span>
              </div>
              <div className="mt-6">
                <button className="w-full py-3 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                    ENTER ARENA
                  </span>
                  <GiCube className="text-cyan-400 animate-pulse" />
                </button>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Live Competition Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20" />
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Live Competitions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-400">LIVE NOW</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Tournament #{item}</h4>
                <p className="text-gray-400 text-sm">Prize Pool: ${
                  Math.floor(Math.random() * 900 + 100) * 1000
                }</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="max-w-7xl mx-auto mt-12 p-8 bg-black/20 rounded-2xl backdrop-blur-lg">
        <h3 className="text-xl font-bold mb-6 text-cyan-400">Latest Updates</h3>
        <div className="space-y-4">
          {['New Tournament Mode Added', 'Cyber Football Season 3 Launch', 'Neural Interface Update', 'Global Leaderboards Reset'].map((news, index) => (
            <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-800/30 rounded-xl transition-all duration-300">
              <div className="h-2 w-2 bg-cyan-400 rounded-full" />
              <span className="text-gray-300">{news}</span>
              <span className="ml-auto text-sm text-cyan-400">Just now</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }




export default GameArena;