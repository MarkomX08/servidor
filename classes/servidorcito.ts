import express from 'express';
import { Server } from "socket.io";
import http from 'http';
import { SERVER_PORT } from '../global/enviroment';
import * as socket from '../sockets/socket';

export default class Servidorcito {
    private static _instance: Servidorcito;
    public app: express.Application;
    public port: number;
    private httpServer: http.Server;
    public io : Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = new Server(this.httpServer,{
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
              }
        });
        this.escucharSockets();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    private escucharSockets() {

        console.log('Escuchando conexiones - sockets');

        this.io.on('connection', cliente => {

            // Conectar cliente
            socket.conectarCliente( cliente, this.io );

            // Configurar usuario
            socket.configurarUsuario( cliente, this.io );

            // Obtener usuarios activos
            socket.obtenerUsuarios( cliente, this.io );

            // Mensajes
            socket.mensaje( cliente, this.io );

            // Desconectar
            socket.desconectar( cliente, this.io );    
            

        });

    }

    

    start( callback: any){
        this.httpServer.listen(this.port, callback);
    }
}