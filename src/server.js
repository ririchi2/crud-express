const express = require("express");
const app = express();
const diceRouter = require("./controllers/dice");
const dicev2Router = require("./controllers/dicev2");
const home = express.Router();

home.get("/", (req, res) => {
  res.send("Homepage");
});


app.use(home);
app.use('/dice', diceRouter);
app.use('/dice/v2', dicev2Router);
app.listen(3001, () => console.log("Listening on port: 3001"));
