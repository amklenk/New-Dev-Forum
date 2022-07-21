const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// added
app.use(require("./controllers"));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Hosting at: http://localhost:${PORT}/`));
});
