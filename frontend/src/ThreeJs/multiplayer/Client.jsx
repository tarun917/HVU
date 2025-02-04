// src/ThreeJs/multiplayer/Client.jsx
import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const Client = () => {
  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('connect', () => {
      console.log('connected to server');
    });

    socket.on('exampleResponse', (data) => {
      console.log('Received exampleResponse:', data);
    });

    // Emit an example event
    socket.emit('exampleEvent', { message: 'Hello from client!' });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Client Component</div>;
};

export default Client;