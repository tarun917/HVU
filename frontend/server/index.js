import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import socketHandler from './socket.js';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server, {
  cors: {
    origin: '*',
  }
});

const PORT = process.env.PORT || 4000;

io.on('connection', (socket) => {
  console.log('a user connected');
  socketHandler(socket);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});