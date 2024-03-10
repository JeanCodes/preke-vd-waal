const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");

var corsOptions = {
  origin: "http://ec2-54-78-171-181.eu-west-1.compute.amazonaws.com:8081"
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
//app.use(bodyParser.json());
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Preke vd Waal." });
});

//db.sequelize.sync();
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/preke.routes")(app);
require("./app/routes/preke_finaal.routes")(app);
require("./app/routes/boeke.routes")(app);
require("./app/routes/bronne.routes")(app);
require("./app/routes/tekste.routes")(app);
require("./app/routes/digitaalpreke.routes")(app);
require("./app/routes/preke_indeks.routes")(app);
// set port, listen for requests
//console.log('process.env: ${process.env}'
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

