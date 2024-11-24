"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
//whenever there is a new conenction
wss.on("connection", (socket) => {
    userCount += 1;
    console.log("user connected #", userCount);
    socket.on("message", (message) => {
        console.log("message received " + message.toString());
        setTimeout(() => {
            socket.send(message.toString() + " : send from the server");
        }, 1000);
    });
});
