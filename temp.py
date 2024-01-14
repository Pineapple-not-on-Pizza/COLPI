import csv
import json

file = open("t.csv", encoding="utf-8")

db = {}

csvreader = csv.reader(file)

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for i, row in enumerate(csvreader):
    if (row[1][0] in alphabet) & (row[1][1] in alphabet):
        try:
            db[row[1]].append(row[0])
        except:
            db[row[1]] = []
            db[row[1]].append(row[0])

print(db)

save_file = open("words.json", "w")
json.dump(db, save_file, indent = 6)  
save_file.close()