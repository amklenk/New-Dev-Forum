const { Upvote } = require("../models");

const upvoteData = [
{

}
];

const seedUpvotes = () => Upvote.bulkCreate(upvoteData);

module.exports = seedUpvotes;
