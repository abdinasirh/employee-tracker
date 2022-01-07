

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "my_password",
    database: "employee_DB"
})


connection.connect(function (err){
    if(err) throw err
})

module.exports=connection;