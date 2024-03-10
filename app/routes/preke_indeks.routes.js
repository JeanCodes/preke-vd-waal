module.exports = app => {
  const preke_indeks = require("../controllers/preke_indeks.controllers.js");

  var router = require("express").Router();

  router.get("/", preke_indeks.findAll);

  app.use('/api/preke_indeks', router);
};

