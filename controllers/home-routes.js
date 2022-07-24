const sequelize = require("sequelize");
const { Bug, Comment, Upvote, User } = require("../models");
const router = require("express").Router();

// get all posts for home page
router.get("/", (req, res) => {
  console.log("<<<<<<<<>>>>>>>>");
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
      const bug = dbBugData.map((bug) => bug.get({ plain: true }));

      res.render("homepage", dbBugData[0]);
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
