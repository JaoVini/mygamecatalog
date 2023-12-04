const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'games',
    multipleStatements: true
})

db.connect((erro) => {
    if (erro){
        throw erro
    }
    console.log('Conectado ao BD...');
});

global.db = db;
module.exports = db;