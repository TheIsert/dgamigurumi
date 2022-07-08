const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("home",{link:'localhost:3000/trabajos#pulpos'});
});
router.get("/trabajos", (req, res) => {
  res.render("trabajos");
});


module.exports = router;
