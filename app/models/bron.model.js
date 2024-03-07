module.exports = (sequelize, Sequelize) => {
  const Bron = sequelize.define("bron", {
    BronNo: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    KortBeskrywing: {
      type: Sequelize.STRING
    },
    Beskrywing: {
      type: Sequelize.STRING
    }
  });

  return Bron;
};
