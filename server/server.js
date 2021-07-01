const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

const obj = [
  {
    question: "What is Harry Potter",
    answer: "Tom Riddle",
  },
];

io.on("connection", (socket) => {
  console.log("user connected");
});
