const db = require("../models");
const Bronne = db.bron;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Bronne.findAll()
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
