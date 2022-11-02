import { Router } from "express";
import { GraficaData } from "../classes/grafica";
import Servidorcito from "../classes/servidorcito";
import * as MySQLConnector from "../classes/mysql.connector";
import { execute } from "../classes/mysql.connector";
import { getData}  from "../classes/mysql.connector";
const router = Router();
const grafica =  new GraficaData();
MySQLConnector.init();
router.get('/grafica', (request, response)=>{
      response.json( grafica.getGraficaData() );
});

router.post('/grafica', (request, response)=>{
    const mes = request.body.mes;
    const valor = Number(request.body.valor);
    console.log(request.body);
    grafica.agregarValor(valor);
    const server = Servidorcito.instance;
    // execute("INSERT INTO dispositivo (data) VALUES ('"+valor+"');",[]);
    console.log(getData);
   
    server.io.emit('cambio-grafica', grafica.getGraficaData());
    response.json(grafica.getGraficaData());
});

export default router;
