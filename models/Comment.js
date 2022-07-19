const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
        type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    bug_id: {
        type: DataTypes.INTEGER,
      references: {
        model: 'bug',
        key: 'id'
      }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'

});

//export
module.exports = Comment;

