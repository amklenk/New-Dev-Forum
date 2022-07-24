const req = require("express/lib/request");
const res = require("express/lib/response");

const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Hello World");
  res.render("homepage");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/addbug", (req, res) => {
  res.render("addbug");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/seebug", (req, res) => {
  res.render("seebug");
});

module.exports = router;
