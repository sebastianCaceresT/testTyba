const mysql = require('mysql');
const {promisify}=require('util');

const pool = mysql.createPool({
  host: "localhost",
  port : "3306",
  user: "userTest",
  password: "password",
  database:'pruebaTyba',
});
pool.getConnection((err,connection)=>{
  if(err){
    console.log(err);
    console.log('===========ERROR===============');
  }
  if(connection) connection.release();
  console.log('conctada');
  return;
})

pool.query = promisify(pool.query)
module.exports = pool;