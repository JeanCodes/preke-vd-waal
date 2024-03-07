module.exports = app => {
  const preke = require("../controllers/preke.controller.js");

  var router = require("express").Router();

  router.get("/", preke.findAll);

  app.use('/api/preke', router);
};

