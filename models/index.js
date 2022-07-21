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
  as: "upvoted_posts",
  foreignKey: "user_id",
});

Bug.belongsToMany(User, {
  through: Upvote,
  as: "upvoted_posts",
  foreignKey: "post_id",
});
//made from vote to Upvote
Upvote.belongsTo(User, {
  foreignKey: "user_id",
});

Upvote.belongsTo(Bug, {
  foreignKey: "bug_id",
});

User.hasMany(Upvote, {
  foreignKey: "user_id",
});
// changed from post to bug
Bug.hasMany(Upvote, {
  foreignKey: "bug_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});
// changed from post to bug
Comment.belongsTo(Bug, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Bug.hasMany(Comment, {
  foreignKey: "bug_id",
});

module.exports = { User, Bug, Comment, Upvote };
