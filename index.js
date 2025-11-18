import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const myUsername = process.env.username
const database = process.env.database

console.log("Username :", myUsername);
console.log("Database :", database);
