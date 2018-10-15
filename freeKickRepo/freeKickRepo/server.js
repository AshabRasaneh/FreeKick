"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var http_1 = require("http");
var colyseus_1 = require("colyseus");
var fr1_1 = require("./rooms/fr1");
var port = Number(process.env.PORT || 3015);
var app = express_1.express();
var gameServer = new colyseus_1.Server({
    server: http_1.createServer(app)
});
gameServer.register("fr1", fr1_1.fr1);
gameServer.onShutdown(function () {
    console.log("game server is going down.");
});
gameServer.listen(port);
//# sourceMappingURL=server.js.map