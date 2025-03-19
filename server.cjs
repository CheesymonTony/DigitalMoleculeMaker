// server.js
// import express from 'express';
// import http from 'http';
// import { Server } from 'socket.io';
// import cors from 'cors';
// import { routing } from './constants.js'
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
// const io = new Server(server);
const io = require('socket.io')(server, {cors: {origin: "*"}});

// Allow requests from 'http://localhost:5173' (your Vite development server)
// app.use(cors({
//   origin: `http://localhost:${routing.clientPort}`, // Update with your actual Vite development server URL
// }));

app.use(cors());

io.on('connection', (socket) => {
  socket.on('imagesSelected', (selectedImages) => {
    console.log("imagesSelected, emitting....")
    io.emit('updateImages', selectedImages);
  });

  socket.on('sliderUpdate', (sliderData) => {
    console.log("Received sliderUpdate:", sliderData);
    io.emit('sliderUpdate', sliderData); // Broadcast to all clients
  });
});



const PORT = process.env.PORT || 4000; // Use Render's provided PORT

server.listen(PORT, "0.0.0.0", () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});

// server.listen(parseInt('4000', 10), () => {
//   console.log(`WebSocket server is running on http://localhost:${'4000'}`);
// });