module.exports = app => {
  const tekste = require("../controllers/tekste.controllers.js");

  var router = require("express").Router();

  router.get("/", tekste.findAll);

  app.use('/api/tekste', router);
};

