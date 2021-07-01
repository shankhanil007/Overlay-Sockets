const io = require("socket.io")(3000);

const users = {};

io.on("connection", (socket) => {
  console.log("user connected");
});
