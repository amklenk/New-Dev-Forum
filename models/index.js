const User = require('./User');
const Bug = require('./Bug');
const Comment = require('./Comment');
const Upvote = require('./Upvote');

//Joins tables using associations

User.hasMany(Bug, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Bug.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Bug, {
  through: Upvote,
  as: 'upvoted_bugs',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Bug.belongsToMany(User, {
  through: Upvote,
  as: 'upvoted_bugs',
  foreignKey: 'bug_id',
  onDelete: 'SET NULL'
});

Upvote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Upvote.belongsTo(Bug, {
  foreignKey: 'bug_id',
  onDelete: 'SET NULL'
});

User.hasMany(Upvote, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Bug.hasMany(Upvote, {
  foreignKey: 'bug_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Bug, {
  foreignKey: 'bug_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Bug.hasMany(Comment, {
  foreignKey: 'bug_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Bug, Comment, Upvote };
