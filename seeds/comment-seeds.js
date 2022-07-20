const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I think your last function is missing a closing curly brace.",
    user_id: 4,
    bug_id: 1,
  },
  {
    comment_text: "Have you tried using flexbox? Then you could justify center!",
    user_id: 3,
    bug_id: 2,
  },
  {
    comment_text: "",
    user_id: 4,
    bug_id: 2,
  },
  {
    comment_text: "",
    user_id: 3,
    bug_id: 3,
  },
  {
    comment_text: "",
    user_id: 1,
    bug_id: 3,
  },
  {
    comment_text: "",
    user_id: 2,
    bug_id: 4,
  },
  {
    comment_text: "",
    user_id: 1,
    bug_id: 5,
  },
  {
    comment_text: "",
    user_id: 2,
    bug_id: 5,
  },
  {
    comment_text: "",
    user_id: 3,
    bug_id: 5,
  },
  {
    comment_text: "",
    user_id: 2,
    bug_id: 6,
  },
  {
    comment_text: "",
    user_id: 1,
    bug_id: 7,
  },
  {
    comment_text: "",
    user_id: 2,
    bug_id: 8,
  },
  {
    comment_text: "",
    user_id: 3,
    bug_id: 8,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;