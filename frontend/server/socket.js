export default (socket) => {
    // Handle socket events here
    socket.on('exampleEvent', (data) => {
      console.log('Received exampleEvent with data:', data);
      // Emit an event back to the client
      socket.emit('exampleResponse', { message: 'Hello from server!' });
    });
  };