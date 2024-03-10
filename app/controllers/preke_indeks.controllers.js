const db = require("../models");
const PrekeIndeks = db.prekeindeks;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  PrekeIndeks.findAll()
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
