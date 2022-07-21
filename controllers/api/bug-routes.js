const router = require('express').Router();
const sequelize = require('../../config/connection');
//this is an authorizing helper
// const withAuth = require('../../utils/auth');
const { User, Bug, Comment, Upvote } = require('../../models');

//get all
//api/bugs
router.get('/', (req, res) => {
  Bug.findAll({
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
    order: [['created_at', 'DESC']],
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
        attributes: ['username']
      }
    ],
  })
  .then(dbBugData => res.json(dbBugData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//get one
//api/bugs/id#
router.get('/:id', (req, res) => {
  Bug.findOne(
    {
        where: {
            id: req.params.id
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
        order: [['created_at', 'DESC']],
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
            attributes: ['username']
          }
        ],
      }
  )
  .then(dbBugData => {
    if(!dbBugData){
        res.status(404).json({ message: 'No bug found with this id' });
        return;
    }
    res.json(dbBugData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//post a new bug
//POST api/bugs
//expects {'language': 'JavaScript', 'question': 'I can't get my event listener to work. Nothing happens when I click the button on the deployed site.', 'image_file': 'bug10.png', 'user_id': 1}
router.post('/', (req, res) => {
    Bug.create({
        language: req.body.language,
        question: req.body.question,
        image_file: req.body.image_file,
        user_id: req.session.user_id
    })
    .then(dbBugData => res.json(dbBugData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//upvote a bug
//PUT api/bugs/upvote
router.put('/upvote', (req, res) => {
  if (req.session) {
    Bug.upvote({ ...req.body, user_id: req.session.user_id},
      {Upvote, Comment, User})
      .then(updatedUpvoteData => res.json(updatedUpvoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//update a bug
//PUT api/bugs/id#
router.put('/:id', (req, res) => {
    Bug.update(
        {
        question: req.body.question
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbBugData => {
        if(!dbBugData){
            res.status(404).json({ message: 'No bug found with this id' });
            return;
        }
        res.json(dbBugData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//delete bug
router.delete('/:id', (req, res) => {
    Bug.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBugData => {
        if(!dbPostData){
            res.status(404).json({ message: 'No bug found with this id' });
            return;
        }
        res.json(dbBugData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
