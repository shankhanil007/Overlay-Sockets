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

const users = {};

io.on("connect", (socket) => {
  socket.on("join", ({ name }, callback) => {
    users[socket.id] = name;

    callback();
  });

  socket.on("post-question", (name) => {
    if (name.localeCompare("Teacher") == 0) {
      socket.broadcast.emit("pop-up", {
        message: obj,
        name: users[socket.id],
      });
    }
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on  port 5000.`)
);
