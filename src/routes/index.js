const express = require("express");
const router = express.Router();

//routes

router.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "views/index.html"));
  res.render("index", { title: "Cesium App" });
});

module.exports = router;
