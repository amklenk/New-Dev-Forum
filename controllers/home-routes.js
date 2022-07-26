const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require('../utils/withAuth');
const { User, Bug, Comment, Upvote } = require("../models");

// get all bugs for home page
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
      console.log(dbBugData[0]);
      const bugs = dbBugData.map((bugs) => bugs.get({ plain: true }));
      res.render("homepage", { bugs, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//logs user in and redirects to homepage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//logs user in and redirects to homepage
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/addbug", withAuth, (req, res) => {
//something abotu req.session.loggedIn or whatever
    res.render("addbug");
});

//renders a single bug when comment button is clicked
router.get("/bug/:id", withAuth, (req, res) => {
  Bug.findOne({
    where: {
      id: req.params.id,
    },
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
      if (!dbBugData) {
        res.status(404).json({ message: "No bug found with this id" });
        return;
      }
      const bug = dbBugData.get({ plain: true });
      res.render("seebug", { bug, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/language/:language", withAuth, (req, res) => {
  console.log("<<<<<<<<>>>>>>>>");
  Bug.findAll({
    where: {
      language: req.params.language,
    },
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
      res.render("seelanguage", { bugs, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
