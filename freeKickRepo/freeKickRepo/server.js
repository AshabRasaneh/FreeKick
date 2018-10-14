const http = require("http");
const express = require("express");

const colyseus = require("colyseus");
const ChatRoom = require('./rooms/chat_room');
const frone = require('./rooms/fr1');

const PORT = process.env.PORT || 3015;

const app = new express();
const gameServer = new colyseus.Server({
    server: http.createServer(app)
});

// Register ChatRoom as "chat"
gameServer.register("chat", ChatRoom);
gameServer.register("fr1", frone);

app.get("/something", function (req, res) {
    console.log("something!", process.pid);
    res.send("Hey!");
});

// Listen on specified PORT number
gameServer.listen(PORT);

console.log("Running on ws://localhost:" + PORT);

(function () {
    
    try {
        var timeout = setInterval(function () {
            //GetNotificationMysql();
            console.log(":");
        }, 10000);
    }
    catch (e) {
        console.log("2: " + e.message);
    }
})();
