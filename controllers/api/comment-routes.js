const router = require('express').Router();
const sequelize = require('../../config/connection');
//this is an authorizing helper
// const withAuth = require('../../utils/auth');
const { User, Bug, Comment, Upvote } = require('../../models');

//get the comments for a bug
//GET api/comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post a comment for a bug
//POST api/comments
//expects {"comment_text": "You can do it!", "user_id": 1, "bug_id": 1}
router.post('/', (req, res) => {
//   if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      bug_id: req.body.bug_id,
      user_id: req.body.user_id,
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }
);

//delete a comment
//DELETE /api/comments/id#
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData){
            res.status(404).json({ message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;
