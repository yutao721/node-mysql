/**
 * Created by Administrator on 2017/5/15.
 */



var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tb1'
});

connection.connect();

var sql = 'SELECT * FROM tb5';
//查
/*connection.query(sql, function (err, result) {
 if (err) {
 console.log('[SELECT ERROR] - ', err.message);
 return;
 }

 console.log('--------------------------SELECT----------------------------');
 console.log(result);
 console.log('------------------------------------------------------------\n\n');
 });*/


var userAddSql = 'INSERT INTO tb5(username,age) VALUES(?,?)';
var userAddSql_Params = ['lisi', 21];
//增 add
connection.query(userAddSql, userAddSql_Params, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('-------INSERT----------');
    //console.log('INSERT ID:',result.insertId);
    console.log(result);
});


connection.end();
