const { Upvote } = require("../models");

//seeded data for upvotes
const upvoteData = [
    {
        "user_id": 1,
        "bug_id": 3
    },
    {
        "user_id": 2,
        "bug_id": 1
    },
    {
        "user_id": 3,
        "bug_id": 8
    },
    {
        "user_id": 4,
        "bug_id": 5
    }

];

const seedUpvotes = () => Upvote.bulkCreate(upvoteData);

module.exports = seedUpvotes;
