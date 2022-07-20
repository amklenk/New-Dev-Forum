//require
const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: "amkdev333",
        email: "aknewdev@gmail.com",
        password: bcrypt.hashSync("password12345", 10)
    },
    {
        username: "cheddarbaybiscuits",
        email: "thechedd@yahoo.com",
        password: bcrypt.hashSync("password23456", 10)
    },
    {
        username: "",
        email: "",
        password: bcrypt.hashSync("password12123", 10)
    },
    {
        username: "",
        email: "",
        password: bcrypt.hashSync("password45678", 10)
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
