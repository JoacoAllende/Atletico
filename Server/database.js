const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'allende247855',
    database: 'Atletico'
});

mysqlConnection.connect(function(err){
    if (err){
        console.log(err);
        return;
    } else {
        console.log('db is connected');
    }
}); 

module.exports = mysqlConnection;