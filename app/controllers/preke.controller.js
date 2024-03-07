const db = require("../models");
const Preke = db.bybelpreke;
const Op = db.Sequelize.Op;

// Retrieve all from the database.
exports.findAll = (req, res) => {

  Preke.findAll()
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
