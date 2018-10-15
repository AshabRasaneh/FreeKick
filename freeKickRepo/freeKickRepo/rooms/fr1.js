"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var colyseus_1 = require("colyseus");
var fr1 = /** @class */ (function (_super) {
    __extends(fr1, _super);
    function fr1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Authorize client based on provided options before WebSocket handshake is complete
    fr1.prototype.onAuth = function (options) {
        return true;
    };
    // When room is initialized
    fr1.prototype.onInit = function (options) {
        this.setState({
            players: {}
        });
        //this.setPatchRate(1000 / 20);
        //this.setSimulationInterval(this.update.bind(this));
    };
    // Checks if a new client is allowed to join. (default: `return true`)
    fr1.prototype.requestJoin = function (options, isNew) {
        return true;
    };
    // When client successfully join the room
    fr1.prototype.onJoin = function (client) {
        this.state.players[client.sessionId] = { specification: "" };
    };
    // When a client leaves the room
    fr1.prototype.onLeave = function (client, consented) { };
    // When a client sends a message
    fr1.prototype.onMessage = function (client, message) {
        if (message.action === "setSpec") {
            this.state.players[client.sessionId].specification = message;
        }
    };
    // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
    fr1.prototype.onDispose = function () {
        console.log("Dispose fr1");
    };
    return fr1;
}(colyseus_1.Room));
exports.fr1 = fr1;
//# sourceMappingURL=fr1.js.map