import csv
import sqlite3

file = open("t.csv", encoding="utf-8")

csvreader = csv.reader(file)

conn = sqlite3.connect("words.db")

c = conn.cursor()

for i, row in enumerate(csvreader):
    c.execute(f"INSERT INTO word (word,letters) VALUES (?,?)",[row[0],row[1]])

conn.commit()
conn.close()
