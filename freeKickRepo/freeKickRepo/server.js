"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colyseus_1 = require("colyseus");
var http_1 = require("http");
var gameServer = new colyseus_1.Server({
    server: http_1.createServer()
});
var fr1 = require("./rooms/ft1");
gameServer.register("fr1", fr1);
gameServer.listen(3015);
//# sourceMappingURL=server.js.map