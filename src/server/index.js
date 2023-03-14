const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");

app.use(cors());


const server = http.createServer(app);

//localhost:3000 is the client side
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods:["GET", "POST"],
    },
});

//someone has connected
io.on("connection", (socket)=>{
    //when user gets to the website
    console.log(`User Connected: ${socket.id}`);
    
    socket.on("disconnect", () =>{
        console.log("User disconnected", socket.id);
    });

    //Check when user joins the room
    socket.on("roomID", (roomID) => {
        socket.join(roomID);
        console.log(`User ${socket.id} connected with room id ${roomID}`);

    });

    //When user sends message to that room
    socket.on("sendMessage", (data) =>{
        socket.to(data.roomID).emit("receiveMsg", data);
    })
});


const port = 3001;
server.listen(port, () => {
    console.log("server is running");
});
