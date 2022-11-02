import * as MySQLConnector from "../classes/mysql.connector";
import { execute } from "../classes/mysql.connector";
MySQLConnector.init();

export class GraficaData{
    
    private meses: string[] = [];
    private valores: number[] = [];
    
    constructor(){
        
    }

    getGraficaData(){
        return [
            {data:this.valores, label:this.meses}
        ];
    }

    incrementarValor(mes:string, valor:number){
        mes = mes.toLowerCase().trim();

        for( let i in this.meses){
            if( this.meses[i] === mes){
                this.valores[i] += valor;
            }
        }
        return this.getGraficaData();
    }

    agregarValor(valor:number){
      
        let date_ob = new Date();

        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);
        
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        
        // current year
        let year = date_ob.getFullYear();
        
        // current hours
        let hours = date_ob.getHours();
        
        // current minutes
        let minutes = date_ob.getMinutes();
        
        // current seconds
        let seconds = date_ob.getSeconds();
        
       
        // prints date & time in YYYY-MM-DD HH:MM:SS format
        let label = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
        
        this.meses.push(label);
        this.valores.push(valor);
           
        
        return this.getGraficaData();
    }
}