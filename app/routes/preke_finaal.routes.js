module.exports = app => {
  const prekefinaal = require("../controllers/preke_finaal.controller.js");

  var router = require("express").Router();

  router.get("/", prekefinaal.findAll);

  app.use('/api/prekefinaal', router);
};

