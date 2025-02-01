// src/pages/OnlineStudents.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiUserVoiceFill, 
  RiUserUnfollowFill,
  RiMessage3Fill,
  RiVideoChatFill,
  RiSearchLine,
  RiCloseCircleFill,
  RiSparkling2Fill,
  RiEarthFill,
  RiCheckDoubleFill
} from "react-icons/ri";

export default function OnlineStudents() {
  // Enhanced demo data with more details
  const initialUsers = [
    {
      id: 1,
      name: "Aditi Sharma",
      status: "online",
      lastActive: "Just now",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      course: "Quantum Computing",
      level: "Advanced",
      achievements: 12,
    },
    {
      id: 2,
      name: "Rahul Verma",
      status: "dnd",
      lastActive: "5 min ago",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      course: "Neural Networks",
      level: "Intermediate",
      achievements: 8,
    },
    {
      id: 3,
      name: "Simran Kaur",
      status: "offline",
      lastActive: "20 min ago",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      course: "Space Engineering",
      level: "Beginner",
      achievements: 3,
    },
    {
      id: 4,
      name: "Michael Chen",
      status: "online",
      lastActive: "Just now",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      course: "Bioinformatics",
      level: "Expert",
      achievements: 15,
    },
    {
      id: 5,
      name: "Claire Dubois",
      status: "offline",
      lastActive: "2 hours ago",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      course: "Cybersecurity",
      level: "Advanced",
      achievements: 10,
    },
  ];

  const [users] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = activeTab === "all" ? true : user.status === activeTab;
    return matchesSearch && matchesStatus;
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, rotateZ: 0.5 },
  };

  return (
    <div className="min-h-screen w-7/8 ml-36 mr-0 mt-0 bg-gradient-to-br from-gray-900 via-space-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            <RiEarthFill className="inline-block mr-3 -mt-2" />
            Global Learning Hub
          </h1>
          <p className="text-gray-400 text-lg">
            Connect with {users.filter(u => u.status === 'online').length}+ active learners worldwide
          </p>
        </motion.div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <RiSearchLine className="absolute left-3 top-3.5 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search learners..."
              className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 sm:w-96">
            {['all', 'online', 'dnd', 'offline'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                    : 'bg-gray-800/50 hover:bg-gray-700/30'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Users Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredUsers.map((user) => (
              <motion.div
                key={user.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                className="relative group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 cursor-pointer transition-colors"
                onClick={() => {
                  setSelectedUser(user);
                  setIsModalOpen(true);
                }}
              >
                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    user.status === 'online' ? 'bg-green-400 animate-pulse' :
                    user.status === 'dnd' ? 'bg-red-400' : 'bg-gray-500'
                  }`} />
                  <span className="text-xs text-gray-400">
                    {user.lastActive}
                  </span>
                </div>

                {/* User Content */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-24 h-24 rounded-full border-2 border-cyan-400/30 object-cover mb-3"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 px-3 py-1 rounded-full text-xs border border-gray-700">
                      Lvl. {user.level}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{user.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{user.course}</p>
                  
                  <div className="flex gap-2">
                    <div className="flex items-center bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                      <RiSparkling2Fill className="text-amber-400 mr-1" />
                      {user.achievements} Achievements
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* User Modal */}
        <AnimatePresence>
          {isModalOpen && selectedUser && (
            <ModalUserChat
              user={selectedUser}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedUser(null);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ModalUserChat({ user, onClose }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, want to collaborate on the quantum algorithms project?", sender: 'them', time: '2:45 PM' },
    { id: 2, text: "Absolutely! When are you available?", sender: 'me', time: '2:46 PM' },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="relative bg-gray-900 rounded-2xl w-full max-w-2xl border border-gray-700/50"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-14 h-14 rounded-full border-2 border-cyan-400/30"
              />
              <div>
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="text-gray-400 text-sm">{user.course}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <RiCloseCircleFill className="text-2xl" />
            </button>
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 py-2.5 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors flex items-center justify-center gap-2">
              <RiUserVoiceFill />
              Audio Call
            </button>
            <button className="flex-1 py-2.5 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center justify-center gap-2">
              <RiVideoChatFill />
              Video Call
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-md p-4 rounded-2xl ${
                msg.sender === 'me' 
                  ? 'bg-cyan-500/10 border border-cyan-400/20' 
                  : 'bg-gray-800/50 border border-gray-700/30'
              }`}>
                <p className="text-sm">{msg.text}</p>
                <div className="flex items-center justify-end gap-2 mt-2">
                  <span className="text-xs text-gray-400">{msg.time}</span>
                  {msg.sender === 'me' && (
                    <RiCheckDoubleFill className="text-cyan-400/60 text-xs" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-gray-700/50">
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
            <button
              onClick={handleSend}
              className="px-6 bg-cyan-500/20 text-cyan-400 rounded-xl hover:bg-cyan-500/30 transition-colors flex items-center gap-2"
            >
              <RiMessage3Fill />
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}