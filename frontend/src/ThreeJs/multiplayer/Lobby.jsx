// src/ThreeJs/multiplayer/Lobby.jsx
import React, { useState } from 'react';

const Lobby = () => {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  const handleCreateRoom = () => {
    const roomName = `Room ${rooms.length + 1}`;
    setRooms((prevRooms) => [...prevRooms, roomName]);
  };

  const handleJoinRoom = (roomName) => {
    setCurrentRoom(roomName);
  };

  return (
    <div>
      <h1>Lobby</h1>
      <button onClick={handleCreateRoom}>Create Room</button>
      <div>
        <h2>Available Rooms</h2>
        {rooms.map((room, index) => (
          <div key={index}>
            {room}
            <button onClick={() => handleJoinRoom(room)}>Join Room</button>
          </div>
        ))}
      </div>
      {currentRoom && <div>Joined {currentRoom}</div>}
    </div>
  );
};

export default Lobby;