module.exports = (sequelize, Sequelize) => {
  const Preke = sequelize.define("preke", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    status: {
      type: Sequelize.STRING
    },
    taal: {
      type: Sequelize.STRING
    },
    bron: {
      type: Sequelize.STRING
    },
    tema: {
      type: Sequelize.STRING
    },
    skandering: {
      type: Sequelize.STRING
    },
    preekdatum: {
      type: Sequelize.STRING
    },
    teksopsie: {
      type: Sequelize.STRING
    }
  });

  return Preke;
};

