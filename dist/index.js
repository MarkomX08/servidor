"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

// llamado del archivo classes/servidorcito
var servidorcito_1 = __importDefault(require("./classes/servidorcito"));

var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
// llamado del archivo  route/router
var router_1 = __importDefault(require("./routes/router"));

var server = servidorcito_1.default.instance;
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default({
    origin: true,
    credentials: true
}));
server.app.use('/', router_1.default);
server.start(function () {
    console.log("Servidor corriendo en el puerto " + server.port);
});
