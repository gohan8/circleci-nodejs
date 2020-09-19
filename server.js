const http = require("http");
const handlers = require("./src/handlers");
var config = require("./config");

const server = http.createServer(handlers.httpGet);

server.listen(config.server.port, config.server.host,handlers.serverCallback);