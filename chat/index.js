const express = require('express');
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
httpServer.listen(8080, () => {
  console.log('listening on *:8080');
});

io.on('connection', (socket) => {
  socket.on('chat message', (amount,user) => {
    io.emit('chat message', amount,user);
  });
});
