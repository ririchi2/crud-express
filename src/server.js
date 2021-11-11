const express = require('express');
const app = express();

const home = express.Router();
const dice = express.Router();

home.get("/", (req, res) => {
    res.send("Homepage");
});

dice.get("/dice", (req, res) => {
    const faces = 6;
    const dice = Math.floor(faces * Math.random()) + 1;
    res.send("Dice: " + dice);
});

dice.get("/dice/:id", (req, res) => {
    const id = req.params.id;
    const dice = Math.floor(id * Math.random()) + 1;
    res.send("Dice: " + dice);
});

app.use(home);
app.use(dice);

app.listen(3001, () => console.log("Listening on port: 3001"));