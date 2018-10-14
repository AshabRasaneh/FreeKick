var Room = require('colyseus').Room;

class frone extends Room {
constructor() {
    super();
    
    this.setState({
        players: { },
      messages: []
    });
  }

onInit(options) {
    //this.setPatchRate(1000 / 20);
    //this.setSimulationInterval(this.update.bind(this));
    //this.maxClients = 2;
    console.log("fr1 created!", options);
}

requestJoin(options) {
    console.log("request join!", options);
    return true;
}

onJoin(client) {
    console.log("client joined!", client.sessionId);
    this.state.players[client.sessionId] = { specification:null };
}

onLeave(client) {
    console.log("client left!", client.sessionId);
    delete this.state.players[client.sessionId];
}

onMessage(client, data) {
    console.log(data, "received from", client.sessionId);
    this.state.messages.push(client.sessionId + " sent " + data);
    
    this.broadcast({ hello: "hello world" });
}

onDispose() {
    console.log("Dispose ChatRoom");
}

}

module.exports = frone;
