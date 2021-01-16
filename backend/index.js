const express = require('express'),
    server = express(),
    mysql = require('mysql'),
    cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soccershop'
})

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.end("<html>Hello world!</html>");
})

server.get('/produtos', (req, res) => {
    const sql = "SELECT * FROM products JOIN categorys on categorys.id_categorys = products.fk_idcategorys";
    db.query(sql, (erro, results) => {
        if (erro){
            return erro;
        } res.json(results);
    })
})

server.get('/msg', (req, res) => {
    const sql = "SELECT * FROM comments";
    db.query(sql, (erro, results) => {
        if (erro){
            return erro;
        } res.json(results);
    })
})

server.post('/msg', (req, res) =>{
    const { name_msg, msg } = req.body;
    const sql = `INSERT INTO comments(name_msg, msg) VALUES ('${name_msg}', '${msg}')`;
    db.query(sql, (err, result) =>{
        if (err){
            return err;
        }   res.json(result);
    })
})

server.listen(5000, function(){
    console.log("Server on!")
});
