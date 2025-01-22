// src/pages/OnlineStudents.jsx
import { useState } from "react";

export default function OnlineStudents() {
  // डेमो डाटा: कुछ स्टूडेंट्स
  const initialUsers = [
    {
      id: 1,
      name: "Aditi",
      status: "online", // "online", "dnd", "offline"
      lastActive: "Just now",
    },
    {
      id: 2,
      name: "Rahul",
      status: "dnd", // do not disturb
      lastActive: "5 min ago",
    },
    {
      id: 3,
      name: "Simran",
      status: "offline",
      lastActive: "20 min ago",
    },
    {
      id: 4,
      name: "Michael",
      status: "online",
      lastActive: "Just now",
    },
    {
      id: 5,
      name: "Claire",
      status: "offline",
      lastActive: "2 hours ago",
    },
  ];

  const [users] = useState(initialUsers);

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Selected user for chat/call
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtered list
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleOpenUserCard = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleCallAudio = (userName) => {
    alert(`Starting audio call with ${userName} (demo).`);
  };
  const handleCallVideo = (userName) => {
    alert(`Starting video call with ${userName} (demo).`);
  };

  // Dummy chat send
  const handleSendMessage = (msg) => {
    alert(`Sending message: "${msg}" (demo).`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6 neon-text">
          Online Students
        </h1>
        <p className="text-center mb-8 text-gray-300">
          Connect with currently active (or recently active) students in real-time.
        </p>

        {/* Search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search student..."
            className="w-full max-w-md p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredUsers.map((user) => {
            // Badge color per status
            let badgeColor;
            if (user.status === "online") {
              badgeColor = "bg-green-500";
            } else if (user.status === "dnd") {
              badgeColor = "bg-red-500";
            } else {
              badgeColor = "bg-gray-500";
            }

            return (
              <div
                key={user.id}
                onClick={() => handleOpenUserCard(user)}
                className="relative bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg cursor-pointer
                  transform transition hover:-translate-y-1 hover:scale-105 hover:rotate-1"
              >
                {/* 3D overlay */}
                <div className="absolute inset-0 bg-black opacity-20 pointer-events-none rounded-lg"></div>

                <h2 className="relative text-xl font-bold z-10 drop-shadow">
                  {user.name}
                </h2>
                <p className="relative text-gray-300 text-sm z-10">
                  Last Active: <span className="text-gray-100">{user.lastActive}</span>
                </p>

                <span
                  className={`relative inline-block px-2 py-1 mt-2 text-xs font-semibold rounded-full z-10 ${badgeColor}`}
                >
                  {user.status === "online"
                    ? "Online"
                    : user.status === "dnd"
                    ? "Do Not Disturb"
                    : "Offline"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for selected user */}
      {isModalOpen && selectedUser && (
        <ModalUserChat
          user={selectedUser}
          onClose={handleCloseModal}
          onCallAudio={handleCallAudio}
          onCallVideo={handleCallVideo}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}

// A separate component for the user chat/call card
function ModalUserChat({ user, onClose, onCallAudio, onCallVideo, onSendMessage }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage.trim());
      setNewMessage("");
    }
  };

  let statusColor;
  if (user.status === "online") {
    statusColor = "bg-green-500";
  } else if (user.status === "dnd") {
    statusColor = "bg-red-500";
  } else {
    statusColor = "bg-gray-500";
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full relative shadow-xl text-white">
        <button
          className="absolute top-3 right-3 text-gray-300 hover:text-gray-100"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2 neon-text">{user.name}</h2>

        <div className="mb-3">
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${statusColor} mr-2`}
          >
            {user.status === "online"
              ? "Online"
              : user.status === "dnd"
              ? "Do Not Disturb"
              : "Offline"}
          </span>
          <span className="text-sm text-gray-400">
            Last Active: {user.lastActive}
          </span>
        </div>

        {/* Chat placeholder (demo) */}
        <div className="bg-gray-800 p-3 rounded mb-3 h-32 overflow-y-auto text-sm">
          <p className="text-gray-400">
            -- Chat history would appear here --
          </p>
        </div>

        {/* Message input */}
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            className="flex-1 px-3 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
          >
            Send
          </button>
        </div>

        {/* Call buttons */}
        <div className="flex justify-end space-x-2">
          {user.status === "offline" ? (
            <p className="text-gray-500 text-sm italic">
              Audio/Video call not available (user offline)
            </p>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                onClick={() => onCallAudio(user.name)}
              >
                Audio Call
              </button>
              <button
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
                onClick={() => onCallVideo(user.name)}
              >
                Video Call
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}