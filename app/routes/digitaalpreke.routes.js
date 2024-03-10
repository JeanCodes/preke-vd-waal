module.exports = app => {
  const digitaalpreke = require("../controllers/digitaalpreke.controller.js");

  var router = require("express").Router();

  router.get("/", digitaalpreke.findAll);

  app.use('/api/digitaalpreke', router);
};

