const { Bug } = require("../models");

const bugData = [
  {
    language: "JavaScript",
    question:
      "The problems log says I am missing a curly brace where I don't need one. Help!",
    image_file: "bug1.png",
    user_id: 1,
  },
  {
    language: "CSS",
    question:
      "I really want to center this div. Any ideas?",
    image_file: "how-to-center-a-button-in-css1.png",
    user_id: 1,
  },
  {
    language: "Node.js",
    question:
      "Are there any good resources to get started with Node.JS? Any good tutorials, blogs or books?",
    image_file: "6287F5A5-E9A0-4468-907D-6B81A9C71255.png",
    user_id: 2,
  },
  {
    language: "HTML",
    question:
      "Can someone look at my HTML? It isn't rendering properly on my landing page",
    image_file: "bug4.png",
    user_id: 2,
  },
  {
    language: "GIT",
    question:
      "I want to open a directory in VScode, is there a special command for that?",
    image_file: "6287F5A5-E9A0-4468-907D-6B81A9C71255.png",
    user_id: 3,
  },
  {
    language: "JavaScript",
    question:
      "What in the heck is .this and why is it giving me such a hard time?",
    image_file: "bug6.png",
    user_id: 3,
  },
  {
    language: "Express.js",
    question:
      "I keep running my test and it will not pass, can someone see what I'm doing wrong?",
    image_file: "bug7.png",
    user_id: 4,
  },
  {
    language: "Javascript",
    question:
      "I wanted to check whether the variable is defined or not. For example, the following throws a not defined error. How can I catch this error?",
    image_file:
      "bug8.png",
    user_id: 4,
  },
];

const seedBugs = () => Bug.bulkCreate(bugData);

module.exports = seedBugs;
