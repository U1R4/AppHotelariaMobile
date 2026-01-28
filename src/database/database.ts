import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: getSSLValues()
});

function getSSLValues(){
    if(process.env.DB_CA){
        return {
            ca: process.env.DB_CA,
            rejectUnauthorized: true,
        };
    }
    return process.env.NODE_ENV === "production" 
        ? {rejectUnauthorized: false}
        :undefined
}