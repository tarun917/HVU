// src/ThreeJs/multiplayer/Server.jsx
import React, { useEffect } from 'react';
import { useWebSocketServer } from 'some-websocket-library'; // Replace with the actual WebSocket library you're using

const Server = () => {
  const { startServer, onConnection, broadcast } = useWebSocketServer();

  useEffect(() => {
    startServer();

    onConnection((socket) => {
      console.log('A player connected:', socket.id);

      socket.on('message', (message) => {
        console.log('Received message:', message);
        // Broadcast the message to all connected clients
        broadcast(message);
      });

      socket.on('disconnect', () => {
        console.log('A player disconnected:', socket.id);
      });
    });

    return () => {
      // Cleanup server on component unmount
      stopServer();
    };
  }, [startServer, onConnection, broadcast]);

  return <div>Multiplayer Server Running</div>;
};

export default Server;