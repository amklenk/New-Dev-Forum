const path = require("path");
const express = require("express");
const session = require("express-session");
const cloudinary = require("cloudinary");
require("dotenv").config();

const routes = require("./controllers");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// user's session object
const sess = {
  secret: "Super secret secret",
  cookie: { maxAge: 1200000, httpOnly: true, secure: false, sameSite: 'strict', },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
//allows for helpers in handlebars
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

// middleware starts
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// middleware ends

//allows use of cloudinary with protected api information
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

//turns on routes
app.use(routes);

//turns on db and server connections
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on http://localhost:${PORT}/`)
  );
});
