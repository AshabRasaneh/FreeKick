import { Server } from "colyseus";
import { createServer } from "http";
import * as express from 'express';



import { fr1 } from "./rooms/fr1";

const port = Number(process.env.PORT || 3015);
const app = express();

const gameServer = new Server({
    server: createServer(app)
});

gameServer.register("fr1", fr1);

gameServer.onShutdown(function () {
    console.log(`game server is going down.`);
});

gameServer.listen(port);

