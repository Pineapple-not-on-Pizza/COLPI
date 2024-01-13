const express = require('express')
const sqlite3 = require('sqlite3');

const port = 5000
const app = express()

let letters;
let sql;

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
        console.log(letters)
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
