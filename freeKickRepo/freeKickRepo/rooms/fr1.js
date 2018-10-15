var Room = require('colyseus').Room;

class fr1 extends Room {

var playerReady = 0;

constructor() {
    super();
    this.maxClients = 2;
    this.setState({
        players: { },
        shootData:"",
        fk:"",
        diveData:""
    });
  }

onInit(options) {
    this.setPatchRate(1000 / 20);
    this.setSimulationInterval(this.update.bind(this));
    
    console.log("ChatRoom created!", options);
}

requestJoin(options) {
    console.log("request join!", options);
    return true;
}

onJoin(client) {
    console.log("client joined!", client.sessionId);
    //this.state.players[client.sessionId] = { x: 0, y: 0 };
}

onLeave(client) {
    console.log("client left!", client.sessionId);
    //delete this.state.players[client.sessionId];
}

onMessage(client, data) {
    console.log(data, "received from", client.sessionId);
    //this.state.messages.push(client.sessionId + " sent " + data);
    var tp = data.type;
    if (tp == "style") {
        this.state.players[client.sessionId] = { style: data, isFk: playerReady, ShootData: "", };
        this.broadcast({ type: "style", data: data });
    }
    else if (tp == "ready") {
        playerReady++;
        if (playerReady == 2) {
            this.broadcast({ type: "startGame", data:"1"});
        }
    }
    
    
}

update() {

    if (Object.keys(this.clients).length == 2) {
        this.broadcast({type:"style"});
    }
    
    //console.log("num clients:", Object.keys(this.clients).length);
    //for (var sessionId in this.state.players) {
    //    this.state.players[sessionId].x += 0.0001;
    //}

}

onDispose() {
    console.log("Dispose ChatRoom");
}

}

module.exports = fr1;