﻿import { Room, Client } from "colyseus";

export class fr1 extends Room {
    // Authorize client based on provided options before WebSocket handshake is complete
    onAuth(options: any) {
        return true;
    }

    // When room is initialized
    onInit(options: any) {
        this.setState({
            players: {}
        });

        this.setPatchRate(1000 / 20);
        this.setSimulationInterval(this.update.bind(this));
    }

    // Checks if a new client is allowed to join. (default: `return true`)
    requestJoin(options: any, isNew: boolean) {

        return true;
    }

    // When client successfully join the room
    onJoin(client: Client) {
        this.state.players[client.sessionId] = {specification:""}
    }

    // When a client leaves the room
    onLeave(client: Client, consented: boolean) { }

    // When a client sends a message
    onMessage(client: Client, message: any) {
        if (message.action === "setSpec") {
            this.state.players[client.sessionId].specification = message;
        }
    }

    // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
    onDispose() {
        console.log("Dispose fr1");
    }

    update() {
        console.log("num clients:", Object.keys(this.clients).length);
        //for (var sessionId in this.state.players) {
        //    this.state.players[sessionId].x += 0.0001;
        //}
    }
}