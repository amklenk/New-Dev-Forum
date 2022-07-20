const Sequelize = require("sequelize");
require("dotenv").config();

//connection to DB via env variables or JAWSDB variables
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_LOCAL_HOST || "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
