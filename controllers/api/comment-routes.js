const router = require('express').Router();
const sequelize = require('../../config/connection');
//this is an authorizing helper
// const withAuth = require('../../utils/auth');
const { User, Bug, Comment, Upvote } = require('../../models');

//get the comments for a bug
//GET api/comments
router.get('/', (req, res) => {});

//post a comment for a bug
//POST api/comments
router.post('/', withAuth, (req, res) => {});

//do we want to delete?

module.exports = router;

