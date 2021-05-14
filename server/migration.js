const sqlite = require('sqlite3');
const bcrypt = require('bcrypt');
const db = new sqlite.Database('./database.db');
const chalk = require('chalk');
const fs = require('fs');

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS Bookings;");
    db.run("DROP TABLE IF EXISTS Rooms")
    db.run(
        `CREATE TABLE IF NOT EXISTS Bookings (
            id TEXT NOT NULL UNIQUE, room_name TEXT NOT NULL, author TEXT NOT NULL, class TEXT NOT NULL, start_time INTEGER NOT NULL, end_time INTEGER NOT NULL, time_created INTEGER NOT NULL, description TEXT, room_id TEXT NOT NULL, FOREIGN KEY(room_id) REFERENCES Rooms(id)
        );`
    , (error) => {
        if (error) {
            console.log(
                chalk.red(error)
            )
        } else {
            console.log(
                chalk.green("Bookings Table created successfully!")
            )
        }
    });
    db.run(
        `CREATE TABLE IF NOT EXISTS Rooms (
            id TEXT NOT NULL UNIQUE, room_name TEXT NOT NULL UNIQUE, location TEXT 
        );
        `, (error) => {
            if (error) {
                console.log(
                    chalk.red(error)
                );
            } else {
                console.log(
                    chalk.green("Rooms Table created successfully!")
                );
            }
        }
    )
})
