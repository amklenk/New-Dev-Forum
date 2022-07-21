const User = require("./User");
const Bug = require("./Bug");
const Comment = require("./Comment");
const Upvote = require("./Upvote");

User.hasMany(Bug, {
  foreignKey: "user_id",
});

Bug.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Bug, {
  through: Upvote,
  as: "upvoted_bugs",
  foreignKey: "user_id",
});

Bug.belongsToMany(User, {
  through: Upvote,
  as: "upvoted_bugs",
  foreignKey: "bug_id",
});

Upvote.belongsTo(User, {
  foreignKey: "user_id",
});

Upvote.belongsTo(Bug, {
  foreignKey: "bug_id",
});

User.hasMany(Upvote, {
  foreignKey: "user_id",
});

Bug.hasMany(Upvote, {
  foreignKey: "bug_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Bug, {
  foreignKey: "bug_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Bug.hasMany(Comment, {
  foreignKey: "bug_id",
});

module.exports = { User, Bug, Comment, Upvote };
