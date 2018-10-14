const colyseus = require("colyseus");
const http = require("http");

const gameServer = new colyseus.Server({
    server: http.createServer()
});
gameServer.listen(3020);