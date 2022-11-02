"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

//numero del puerto al cual se va a lanzar el servidor
exports.SERVER_PORT = 4003;

//configuracion de los datos de conexion a la base de datos
exports.DB_CONFIG = {
    mySqlDataSource: {
        BD_HOST: '127.0.0.1',
        DB_USER: 'root',
        DB_PASSWORD: '',
        DB_DATABASE: 'full',
        DB_PORT: 3306,
        DB_CONNECTION_LIMIT: 4
    }
};
