const express = require("express");
const app = express();

const home = express.Router();
const dice = express.Router();
const dicev2 = express.Router();

home.get("/", (req, res) => {
  res.send("Homepage");
});

//Ex 1 (Dice):
dice.get("/dice", (req, res) => {
  const faces = 6;
  const dice = Math.floor(faces * Math.random()) + 1;
  console.log(dice);
  res.send("Dice: " + dice);
});

dice.get("/dice/:id", (req, res) => {
  const id = req.params.id;
  const dice = Math.floor(id * Math.random()) + 1;
  res.send("Dice: " + dice);
});

//Ex 2 (Dice):
dicev2.get("/dicev2", (req, res) => {
  const faces = Math.floor(100 * Math.random()) + 1;
  const dice = Math.floor(faces * Math.random()) + 1;
  console.log(dice);
  res.send("Dice: " + dice);
});


app.use(home);
app.use(dice);
app.use(dicev2);
app.listen(3001, () => console.log("Listening on port: 3001"));
