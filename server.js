const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes");

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
});
