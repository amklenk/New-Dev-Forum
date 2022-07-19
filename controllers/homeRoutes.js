const router = require("express").router();
const req = require("express/lib/request");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  console.log("Hello World");
});

module.exports = router;
