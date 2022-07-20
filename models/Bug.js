const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bug extends Model {}

Bug.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    langauge: {
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

//export
module.exports = Bug;