//require
const { User } = require("../models");
const bcrypt = require("bcrypt");

//seeded data for users with password encryption
const userData = [
  {
    username: "amkdev333",
    email: "aknewdev@gmail.com",
    password: bcrypt.hashSync("password12345", 10),
  },
  {
    username: "cheddarbaybiscuits",
    email: "thechedd@yahoo.com",
    password: bcrypt.hashSync("password23456", 10),
  },
  {
    username: "onlyDevs",
    email: "onlydevs@gmail.com",
    password: bcrypt.hashSync("password12123", 10),
  },
  {
    username: "DougDimmaDome",
    email: "ownerOfTheDimsdaleDimmaDome@bellsouth.net",
    password: bcrypt.hashSync("password45678", 10),
  },
  {
    username: "guest",
    email: "guestuser@admin.com",
    password: bcrypt.hashSync("passwordadmin", 10),
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
