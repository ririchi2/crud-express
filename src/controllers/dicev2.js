const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const faces = Math.floor(100 * Math.random()) + 1;
  const dice = Math.floor(faces * Math.random()) + 1;
  console.log(dice);
  res.send("Dice: " + dice);
});

module.exports = router;
