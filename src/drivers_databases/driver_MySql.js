const mysql= require ('mysql');
const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password:'',
    database:'administrador_yore'
});
connection.connect((err)=>{
    if(err) throw err;
    console.log('mysql conexión exitosa')
});
module.exports=mysql