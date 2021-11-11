const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const faces = 6;
  const dice = Math.floor(faces * Math.random()) + 1;
  console.log(dice);
  res.send("Dice: " + dice);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const dice = Math.floor(id * Math.random()) + 1;
  res.send("Dice: " + dice);
});

module.exports = router;