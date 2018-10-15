import { Server } from "colyseus";
import { createServer } from "http";

const gameServer = new Server({
    server: createServer()
});

import { fr1 } from "./rooms/fr1";

gameServer.register("fr1", fr1);

gameServer.listen(3015);

