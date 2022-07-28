const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creates upvote table in database
class Upvote extends Model {}
Upvote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    bug_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bug',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'upvote'
  }
);

module.exports = Upvote;
