"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var http_1 = __importDefault(require("http"));
var enviroment_1 = require("../global/enviroment");
var Servidorcito = /** @class */ (function () {
    function Servidorcito() {
        this.app = express_1.default();
        this.port = enviroment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.Server(this.httpServer, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });
    }
    Object.defineProperty(Servidorcito, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Servidorcito.prototype.start = function (callback) {
        this.httpServer.listen(this.port, callback);
    };
    return Servidorcito;
}());
exports.default = Servidorcito;
