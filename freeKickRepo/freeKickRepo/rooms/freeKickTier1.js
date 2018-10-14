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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // this room supports only 4 clients connected
        _this.maxClients = 2;
        return _this;
    }
    fr1.prototype.onInit = function (options) {
        console.log("BasicRoom created!", options);
    };
    fr1.prototype.onJoin = function (client) {
        this.broadcast(client.sessionId + " joined.");
    };
    fr1.prototype.onLeave = function (client) {
        this.broadcast(client.sessionId + " left.");
    };
    fr1.prototype.onMessage = function (client, data) {
        console.log("BasicRoom received message from", client.sessionId, ":", data);
        this.broadcast("(" + client.sessionId + ") " + data.message);
    };
    fr1.prototype.onDispose = function () {
        console.log("Dispose BasicRoom");
    };
    return fr1;
}(colyseus_1.Room));
exports.fr1 = fr1;
//# sourceMappingURL=freeKickTier1.js.map