"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MySQLConnector = __importStar(require("../classes/mysql.connector"));
MySQLConnector.init();
var GraficaData = /** @class */ (function () {
    function GraficaData() {
        this.meses = [];
        this.valores = [];
    }
    GraficaData.prototype.getGraficaData = function () {
        return [
            { data: this.valores, label: this.meses }
        ];
    };
    GraficaData.prototype.incrementarValor = function (mes, valor) {
        mes = mes.toLowerCase().trim();
        for (var i in this.meses) {
            if (this.meses[i] === mes) {
                this.valores[i] += valor;
            }
        }
        return this.getGraficaData();
    };
    GraficaData.prototype.agregarValor = function (valor) {
        var date_ob = new Date();
        // adjust 0 before single digit date
        var date = ("0" + date_ob.getDate()).slice(-2);
        // current month
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        // current year
        var year = date_ob.getFullYear();
        // current hours
        var hours = date_ob.getHours();
        // current minutes
        var minutes = date_ob.getMinutes();
        // current seconds
        var seconds = date_ob.getSeconds();
        // prints date & time in YYYY-MM-DD HH:MM:SS format
        var label = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
        this.meses.push(label);
        this.valores.push(valor);
        return this.getGraficaData();
    };
    return GraficaData;
}());
exports.GraficaData = GraficaData;
