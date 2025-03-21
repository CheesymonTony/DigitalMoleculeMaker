// import { useState } from 'react'
// import React from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { io } from "socket.io-client"; // Import Socket.IO
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

//for local hosting
const socket = io.connect(`http://localhost:${4000}`);

//for deployment
// const socket = io("https://digitalmoleculemaker.onrender.com", {
//   transports: ["websocket"], // Ensures WebSockets are used
// });

function App() {
  return (
    <BrowserRouter>
      <AppRouter socket={socket} />
    </BrowserRouter>
  );
}

export default App;
