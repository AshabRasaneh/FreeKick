"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colyseus_1 = require("colyseus");
var http_1 = require("http");
var gameServer = new colyseus_1.Server({
    server: http_1.createServer()
});
// Import demo room handlers
var freeKickTier1_1 = require("./rooms/freeKickTier1");
// Register ChatRoom as "chat"
gameServer.register("freeKickTier1", freeKickTier1_1.fr1);
gameServer.onShutdown(function () {
    console.log("game server is going down.");
});
gameServer.listen(3015);
//# sourceMappingURL=server.js.map