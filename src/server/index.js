const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost/3000",
        methods:["GET", "POST"],
    },
});

//someone has connected
io.on("connection", (socket)=>{
    console.log(socket.id);
    socket.on("disconnect", () =>{
        console.log("User disconnected", socket.id);
    });
});


const port = 3001;
server.listen(port, () => {
    console.log("server is running");
});
