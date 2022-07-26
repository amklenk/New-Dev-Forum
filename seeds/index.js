const seedUsers = require("./user-seeds");
const seedBugs = require("./bug-seeds");
const seedComments = require("./comment-seeds");
const seedUpvotes = require("./upvote-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedBugs();
  console.log("\n----- BUGS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  await seedUpvotes();
  console.log("\n----- UPVOTES SEEDED -----\n");

  process.exit(0);
};

seedAll();
