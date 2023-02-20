const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());


const server = http.createServer(app);

const port = 3001;
server.listen(port, () => {
    console.log("server is running");
});
