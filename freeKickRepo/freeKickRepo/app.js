import * as http from "http";
import * as express from "express";
import * as ws from "ws";
import { Server } from "colyseus";

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({
    // your custom WebSocket.Server setup.
});
wss.listen(3015);
const gameServer = new Server();
gameServer.attach({ ws: wss });