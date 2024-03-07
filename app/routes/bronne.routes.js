module.exports = app => {
  const bronne = require("../controllers/bronne.controller.js");
  var router = require("express").Router();
  router.get("/", bronne.findAll);
  app.use('/api/bronne', router);
};
