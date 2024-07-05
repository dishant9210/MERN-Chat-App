import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["https://mern-chat-app-kohv.onrender.com"],
    methods: ["GET", "POST"],
  },
});
console.log("will do a connection")
const userSocketMap = {};//{userId : socketId}
export const getReciverSocketId = (reciverId)=>{
  return userSocketMap[reciverId];
}

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    if(userId != undefined){
      userSocketMap[userId] = socket.id
    }

    //io.emit is used to send events/informations to all the connected clients or sockets
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    console.log("a user connected", socket.id);
  
    socket.on("error", (error) => {
      console.error("Socket error:", error);
    });
  
    socket.on("disconnect", () => {
      delete userSocketMap[userId];
      io.emit("getOlineUsers", Object.keys(userSocketMap) ); 

      console.log("user disconnected", socket.id);
    });
  });

export { app, httpServer, io };
