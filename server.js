const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db = require("./models");
const routes = require("./routes");

const sessionConfig = require("./config/session-config");

const app = express();
const PORT = 3001 || process.env.PORT;

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static("client/build"));

// Set up Express session
app.use(session({
  secret: sessionConfig.secret,
  cookie: { maxAge: 86400000 },
  saveUninitialized: false,
  resave: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./config/passport')(passport);

// Routes
app.use('/', routes);

// Listen
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
});
