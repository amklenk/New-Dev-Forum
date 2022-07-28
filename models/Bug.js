const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creates bug table in database, uses static keyword to connect upvote with bug
class Bug extends Model {
    static upvote(body, models) {
        return models.Upvote.create({
          user_id: body.user_id,
          bug_id: body.bug_id
        }).then(() => {
          return Bug.findOne({
            where: {
              id: body.bug_id
            },
            attributes: [
              'id',
              'language',
              'question',
              'image_file',
              'created_at',
              [
                sequelize.literal('(SELECT COUNT(*) FROM upvote WHERE bug.id = upvote.bug_id)'),
                'upvote_count'
              ]
            ],
            include: [
              {
                model: models.Comment,
                attributes: ['id', 'comment_text', 'bug_id', 'user_id', 'created_at'],
                include: {
                  model: models.User,
                  attributes: ['username']
                }
              }
            ]
          });
        });
      }
}

Bug.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    language: {
        type: DataTypes.STRING,
        allowNull: false
      },
    question: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    image_file: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
    }
},
{
sequelize,
freezeTableName: true,
underscored: true,
modelName: 'bug'
});

module.exports = Bug;