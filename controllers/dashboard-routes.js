const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Bug, Comment, Upvote } = require('../models');
const withAuth = require('../utils/withAuth');

//routes for the user to interact with the dashboard and receive rendered bug data
//GET /dashboard
//gets all of user's posts
router.get('/', withAuth, (req, res) => {
  Bug.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      'id',
      'language',
      'question',
      'image_file',
      'created_at',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM upvote WHERE bug.id = upvote.bug_id)'
        ),
        'upvote_count',
      ],
    ],
    order: [
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM upvote WHERE bug.id = upvote.bug_id)'
        ),
        'DESC',
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'bug_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbBugData) => {
      const bugs = dbBugData.map((bug) => bug.get({ plain: true }));
      console.log(req.session.loggedIn);
      res.render('dashboard', { bugs, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// for future directions, ability to close out a bug/put in solved state
//GET /dashboard/edit/:id
//gets post to edit
// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ['id', 'title', 'text', 'created_at'],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username'],
//         },
//       },
//       {
//         model: User,
//         attributes: ['username'],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       const post = dbPostData.get({ plain: true });

//       res.render('edit-post', { post, loggedIn: req.session.loggedIn });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

//export
module.exports = router;
