const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/trabajos", (req, res) => {
  res.render("trabajos");
});


module.exports = router;
