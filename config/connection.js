var mysql = require("mysql");
var connection; 

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(JAWSDB_URL)
// } else {
connection = mysql.createConnection({
    host: "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "agq9ix5z1eq8x5ar",
    password: "tp6rffkco4nsp8rw",
    database: "z3sdlp31827akmlp"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;