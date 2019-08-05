const mysql = require('mysql');

const mysqlInstance = mysql.createConnection({
    host: "IP.IP.IP.IP",
    user: "ID",
    password: "password",
    database: "dbname"
})
mysqlInstance.connect();

function getUsers(callback){
    mysqlInstance.query("select * from users2", function(err, result) {
        callback(result);
       });
}

//console.log(mysqlInstance);

const http = require('http');
http.createServer(function(req,res) {
    if (req.url === '/') {
        return res.end('hello world');
    } else if (req.url === '/api') {
        getUsers((result) => {
            console.log(result);
            res.writeHead(200, {
                "Content-Type" : "Text/json; charset=utf-8",
            });
            res.end(JSON.stringify(result));
        })
    }
}).listen(3030);