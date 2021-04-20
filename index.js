const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hi Giovani!!!");
    console.log("Bad news, I need work!")
});

app.get("/outro", (req, res) => {
    res.send("Where are you Scooby!!!");
    console.log("ScoobyDoo!")
});

app.get("/tasks", (req, res) => {
    res.json({
        tasks: [
            { title: "Buy some shoes" },
            { title: "Fix notebook" }
        ]
    });
});

app.listen(3000);