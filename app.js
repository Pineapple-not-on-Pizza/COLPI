const express = require('express')
const sqlite3 = require('sqlite3');
const https = require("https");
const fs = require("fs");

const port = 5000
const app = express()

let letters;
let sql;

const options = {
  key: fs.readFileSync("./server.key"),
  cert: fs.readFileSync("./server.cert")
};

const db = new sqlite3.Database("./words.db", sqlite3.OPEN, (err)=>{
    if (err) return console.error(err);
})

app.get('/', async (req, res) => {
    letters = [];
    pair = req.query["pair"]
    sql = `SELECT * FROM word WHERE letters = '${pair}'`;
    db.all(sql,[],(err,rows)=>{
        if (err) return console.error(err);
        for (i in rows){
            letters.push(rows[i]["word"])
        }
        res.send(letters);
    });
    
})

app.listen(port);
https.createServer(options, app).listen(port);