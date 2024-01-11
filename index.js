const sqlite3 = require('sqlite3');
let sql;

const db = new sqlite3.Database("./words.db", sqlite3.OPEN, (err)=>{
    if (err) return console.error("ERROR: Pineapple!!");
})

// sql = "CREATE TABLE word(id INTEGER PRIMARY KEY,word,letters)";
// db.run(sql);

sql = "SELECT * FROM word";
db.all(sql,[],(err,rows)=>{
    if (err) return console.error("ERROR: Pineapple!!");
    rows.forEach(row => {
        console.log(row)
    });
});
