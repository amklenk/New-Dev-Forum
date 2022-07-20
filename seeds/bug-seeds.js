const { Bug } = require('../models');

const bugData = [
    {
        language: 'JavaScript',
	    question: "The problems log says that it is expecting a comma, but I don't know why! Help, please!",
        image_file: '',
	    user_id: 1,
    },
    {
        language: 'CSS',
	    question: "I really want to center this div. Margin: 0 auto isn't working. Any ideas?",
        image_file: '',
	    user_id: 1,
    },
    {
        language: '',
	    question: "",
        image_file: '',
	    user_id: 2,
    },
    {
        language: '',
	    question: "",
        image_file: '',
	    user_id: 2,
    },
    {
        language: '',
	    question: "",
        image_file: '',
	    user_id: 3,
    },
    {
        language: '',
	    question: "",
        image_file: '',
	    user_id: 3,
    },
    {
        language: '',
	    question: "",
        image_file: '',
	    user_id: 4,
    },
    {
        language: '',
	    question: "",
        image_file: '',
	    user_id: 4,
    }
];

const seedBugs = () => Bug.bulkCreate(bugData);

module.exports = seedBugs;