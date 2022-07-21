const path = require("path");
const express = require("express");
const session = require("express-session");
const cloudinary = require("cloudinary");

const routes = require("./controllers");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  //we can add max age into cookie if we want to timeout the user
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


// const helpers = require("./utils/helpers");
//add back in helpers to create
const hbs = exphbs.create({});

//middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

cloudinary.config({
  cloud_name: "dmi2apwss",
  api_key: "268162835632466",
  api_secret: "fiCj_M1wehLsGJ_74-atlfaI6mc",
});

//turns on routes
app.use(routes);

//turns on db and server connections
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
