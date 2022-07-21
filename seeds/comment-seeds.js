const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "That means you are missing a curly brace somewhere else. Try line 177!",
    user_id: 4,
    bug_id: 1,
  },
  {
    comment_text:
      "Have you tried using flexbox? Then you could justify center!",
    user_id: 3,
    bug_id: 2,
  },
  {
    comment_text: "Have you tried using BootStrap to make this easier?",
    user_id: 4,
    bug_id: 2,
  },
  {
    comment_text: "Have you checked w3Schools.com?",
    user_id: 3,
    bug_id: 3,
  },
  {
    comment_text:
      "Check out MDN Web docs! Don't waste your time on tutorial videos! ",
    user_id: 1,
    bug_id: 3,
  },
  {
    comment_text:
      "I got it! You left out a > at the end of your closing div element!",
    user_id: 2,
    bug_id: 4,
  },
  {
    comment_text: "I don't believe so!",
    user_id: 1,
    bug_id: 5,
  },
  {
    comment_text:
      "Open your Terminal and navigate to you root directory of the project you want to open. Then type 'Code .' and it should open",
    user_id: 2,
    bug_id: 5,
  },
  {
    comment_text: "Make sure to also set up your shell command in Vs Code",
    user_id: 3,
    bug_id: 5,
  },
  {
    comment_text:
      "Inside a function, the value of this depends on how the function is called. It retains the this value of the enclosing lexical context.",
    user_id: 2,
    bug_id: 6,
  },
  {
    comment_text:
      "In the second test, you forgot a comma after the double quotes. I do it all the time!",
    user_id: 1,
    bug_id: 7,
  },
  {
    comment_text:
      "If a variable is declared and is not undefined try out 'if (yourvar !== undefined) // Any scope'",
    user_id: 2,
    bug_id: 8,
  },
  {
    comment_text:
      "If you really want to check for specifically for null, try: if (yourvar === null) // Does not execute if yourvar is `undefined`",
    user_id: 3,
    bug_id: 8,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
