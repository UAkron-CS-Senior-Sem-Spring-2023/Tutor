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
    console.log(`User Connected: ${socket.id}`);
    socket.on("disconnect", () =>{
        console.log("User disconnected", socket.id);
    });
});


const port = 3001;
server.listen(port, () => {
    console.log("server is running");
});
