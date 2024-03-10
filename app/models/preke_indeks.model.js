module.exports = (sequelize, Sequelize) => {
  const PrekeIndeks = sequelize.define("prekeindeks", {
    nr: {
      type: Sequelize.INTEGER
    },
    jaar: {
      type: Sequelize.INTEGER
    },
    taal: {
      type: Sequelize.STRING
    },
    teks: {
      type: Sequelize.TEXT
    },
    boekno: {
      type: Sequelize.INTEGER
    },
    hoofstuk: {
      type: Sequelize.INTEGER
    },
    p_l: {
      type: Sequelize.STRING
    },
    tema: {
      type: Sequelize.STRING
    },
    vorm: {
      type: Sequelize.STRING
    },
    bron: {
      type: Sequelize.STRING
    },
    boek_afk: {
      type: Sequelize.STRING
    },
    boek_vol: {
      type: Sequelize.STRING
    },
  });

  return PrekeIndeks;
};
