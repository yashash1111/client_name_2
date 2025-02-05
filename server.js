const express = require('express');
const app = express();
const db = require("./Database");

let a = false;
db().then(() => {
    a = true;
    console.log("Mongodb connected successfully");
    }).catch(() => {
        console.log("Mongodb connection failed");
    });

    app.get("/", (req,res) => {
        res.write("<b>Welcome to Watchlist</b><br><br>");
        if(a){
            res.write("MongoDB connected to the server")
        }else{
            res.write("Database connection failed")
        }
        res.end();
    })


    app.get("/ping",(req,res) => {
        res.send("Welcome to /ping route")
    })


    app.listen(4000,() => {
        console.log(`Server is running on port $(4000)`);
    })