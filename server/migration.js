const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const chalk = require('chalk');

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS User;");
    db.run(
        `CREATE TABLE IF NOT EXISTS User (
            id INTEGER NOT NULL, fname TEXT NOT NULL, lname TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, PRIMARY KEY(id)
        );`
    , (error) => {
        if (error) {
            console.log(
                chalk.red(error)
            )
        } else {
            console.log(
                chalk.green("User Table created successfully!")
            )
        }
    });
})