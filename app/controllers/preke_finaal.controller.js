const db = require("../models");
const PrekeFinaal = db.bybelprekefinaal;
const Op = db.Sequelize.Op;

// Retrieve all from the database.
exports.findAll = (req, res) => {

  PrekeFinaal.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving from db."
      });
    });

};
