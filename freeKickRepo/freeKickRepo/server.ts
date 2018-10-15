import { Server } from "colyseus";
import { createServer } from "http";

const gameServer = new Server({
    server: createServer()
});

let fr1 = require("./rooms/fr1");

gameServer.register("fr1", fr1);

gameServer.listen(3015);

