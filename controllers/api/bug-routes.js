const router = require('express').Router();
const sequelize = require('../../config/connection');
//this is an authorizing helper
// const withAuth = require('../../utils/auth');
const { User, Bug, Comment, Upvote } = require('../../models');

//get all
//api/bugs
router.get('/', (req, res) => {});

//get one
//api/bugs/id#
router.get('/:id', (req, res) => {});

//post a new bug
//POST api/bugs
router.post('/', (req, res) => {});

//upvote a bug
//PUT api/bugs/upvote
router.put('/upvote', (req, res) => {});

//update a bug
router.put('/:id',(req, res) => {});

//do we want delete?

module.exports = router;