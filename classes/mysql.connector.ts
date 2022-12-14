import { DB_CONFIG } from "../global/enviroment";
import { createPool, Pool } from "mysql";
const dataSource = DB_CONFIG.mySqlDataSource;

let pool: Pool;

export const init = ()=>{
    try{
        pool = createPool({
            connectionLimit: dataSource.DB_CONNECTION_LIMIT,
            host: dataSource.BD_HOST,
            user: dataSource.DB_USER,
            password: dataSource.DB_PASSWORD,
            database: dataSource.DB_DATABASE
        });
        console.debug('MySql Pool generated successfully');
    }catch(error){
        console.error('[mysql.connector][init][Error]', error);
        throw new Error('Failed');

    }
};

export const execute = <T>( query: string, params: string[]| Object): Promise<T> => {
    try{
        if(!pool) throw new Error('Pool was not created');
        return new Promise<T>((resolve, reject)=>{
            pool.query(query,params,(error,results)=>{
                if(error) reject(error);
                else resolve(results);
                console.log(resolve(results));
            });
        });

    }catch(error){
        console.error('[mysql.connector][execute][Error]', error);
        throw new Error('Failed to execute');
    }
}

export const getData = async () => {
    pool.query('SELECT * FROM dispositivo', function(err, rows, fields) {
        if (err) throw err;
        console.log(rows[0].example); //Show 1
        return rows;
      });
    // return execute<[]>("SELECT * FROM dispositivo", []);
  };


;