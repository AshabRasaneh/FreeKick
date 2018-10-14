﻿import { Server } from "colyseus";
import { createServer } from "http";

const gameServer = new Server({
    server: createServer()
});

// Import demo room handlers
import { freeKickTier1 } from "./rooms/freeKickTier1";

// Register ChatRoom as "chat"
gameServer.register("freeKickTier1", freeKickTier1);

gameServer.onShutdown(function () {
    console.log(`game server is going down.`);
});

gameServer.listen(3015,"188.253.2.147");