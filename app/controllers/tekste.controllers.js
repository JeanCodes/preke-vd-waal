const db = require("../models");
const Tekste = db.tekste;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Tekste.findAll()
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
