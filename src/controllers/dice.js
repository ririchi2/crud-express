const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const faces = 6;
  const dice = Math.floor(faces * Math.random()) + 1;
  console.log(dice);
  res.send("Dice: " + dice);
});

router.get("/:faces", (req, res) => {
  const faces = req.params.faces;
  const dice = Math.floor(faces * Math.random()) + 1;
  res.send("Dice: " + dice);
});

module.exports = router;