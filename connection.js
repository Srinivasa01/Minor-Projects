const sql=require('mysql');
var connection=sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elderly'}
)
module.exports=connection;