import { Server } from "socket.io";

export const realtimeServer = (httpServer) => {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on("message", (message) => {
      io.emit("message", {
        user: "bmolina",
        message,
      });
    });
  });
};
