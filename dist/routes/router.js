"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var grafica_1 = require("../classes/grafica");
var servidorcito_1 = __importDefault(require("../classes/servidorcito"));
var MySQLConnector = __importStar(require("../classes/mysql.connector"));
var mysql_connector_1 = require("../classes/mysql.connector");
var router = express_1.Router();
var grafica = new grafica_1.GraficaData();
MySQLConnector.init();

router.get('/grafica', function (request, response) {
    response.json(grafica.getGraficaData());
});
router.post('/grafica', function (request, response) {
    var mes = request.body.mes;
    var valor = Number(request.body.valor);
    console.log(request.body);
    grafica.agregarValor(valor);
    var server = servidorcito_1.default.instance;
    // execute("INSERT INTO dispositivo (data) VALUES ('"+valor+"');",[]);
    console.log(mysql_connector_1.getData);
    server.io.emit('cambio-grafica', grafica.getGraficaData());
    response.json(grafica.getGraficaData());
});
exports.default = router;
