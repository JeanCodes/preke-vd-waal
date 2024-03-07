module.exports = app => {
  const boeke = require("../controllers/boeke.controller.js");

  var router = require("express").Router();

  router.get("/", boeke.findAll);

  app.use('/api/boeke', router);
};

