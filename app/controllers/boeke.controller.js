const db = require("../models");
const Boeke = db.bybelboeke;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Boeke.findAll({
    order: [
      ['BoekNo', 'ASC']  // 'ASC' for ascending, 'DESC' for descending
    ]
  })
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
