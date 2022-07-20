const { Bug } = require("../models");

const bugData = [
  {
    language: "JavaScript",
    question:
      "The problems log says that it is expecting a comma, but I don't know why! Help, please!",
    image_file: "",
    user_id: 1,
  },
  {
    language: "CSS",
    question:
      "I really want to center this div. Margin: 0 auto isn't working. Any ideas?",
    image_file: "",
    user_id: 1,
  },
  {
    language: "Node.js",
    question:
      "Are there any good resources to get started with Node.JS? Any good tutorials, blogs or books?",
    image_file: "",
    user_id: 2,
  },
  {
    language: "HTML",
    question:
      "Can someone look at my HTML? it isn't rendering properly on my landing page",
    image_file: "",
    user_id: 2,
  },
  {
    language: "GIT",
    question:
      "I want to open a directory in VScode, is there a special command for that?",
    image_file: "",
    user_id: 3,
  },
  {
    language: "JavaScript",
    question:
      "What in the heck is .this and why is it giving me such a hard time?",
    image_file: "",
    user_id: 3,
  },
  {
    language: "Express.js",
    question:
      "I keep running my test and it will not pass, can someone see what i'm doing wrong?",
    image_file: "",
    user_id: 4,
  },
  {
    language: "Javascript",
    question:
      "I wanted to check whether the variable is defined or not. For example, the following throws a not defined error How can I catch this error?",
    image_file:
      "https://stackoverflow.com/questions/858181/how-to-check-a-not-defined-variable-in-javascript",
    user_id: 4,
  },
];

const seedBugs = () => Bug.bulkCreate(bugData);

module.exports = seedBugs;
