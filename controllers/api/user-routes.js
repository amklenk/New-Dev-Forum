const router = require('express').Router();
const { User, Bug, Comment, Upvote } = require('../../models');

//get all
//GET api/users
router.get('/', (req, res) => {});

//get one
//GET api/users/id#
router.get('/:id', (req, res) => {});

//post a new user
//POST api/users
router.post('/', (req, res) => {})

//Do we want to update or delete a user?

//after connection with front end, we can build these out
//login
router.post('/login', (req, res) => {})
//logout
router.post('/logout', (req, res) => {})

module.exports = router;
