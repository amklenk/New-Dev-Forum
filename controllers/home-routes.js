const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Bug, Comment, Upvote } = require("../models");

// get all posts for home page
router.get("/", (req, res) => {
  console.log("<<<<<<<<>>>>>>>>");
  // res.render('homepage', {
  //   id: 1,
  //   language: "JavaScript",
  //   question:
  //     "The problems log says I am missing a curly brace where I don't need one. Help!",
  //   image_file:
  //     "https://res.cloudinary.com/dmi2apwss/image/upload/v1658522393/bug1_bohtwd.png",
  //   user_id: 1,
  // });
  Bug.findAll({
    attributes: [
      "id",
      "language",
      "question",
      "image_file",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE bug.id = upvote.bug_id)"
        ),
        "upvote_count",
      ],
    ],
    order: [
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE bug.id = upvote.bug_id)"
        ),
        "DESC",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "bug_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBugData) => {
      console.log(dbBugData[0]);
      const bugs = dbBugData.map((bugs) => bugs.get({ plain: true }));
      res.render("homepage", { bugs });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
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
