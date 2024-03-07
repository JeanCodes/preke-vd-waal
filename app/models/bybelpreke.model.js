module.exports = (sequelize, Sequelize) => {
  const BybelPreke = sequelize.define("bybelpreke", {
    PreekNo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
    },
    vorm: {
      type: Sequelize.INTEGER
    },
    Dirk: {
      type: Sequelize.STRING
    },
    Taal: {
      type: Sequelize.STRING
    },
    Bron: {
       type: Sequelize.STRING,
       references: {
          model: 'brons',
          key: 'BronNo',
       }
    },
    Tema: {
      type: Sequelize.STRING
    },
    TemaBygevoeg: {
      type: Sequelize.BOOLEAN
    }
  });

  return BybelPreke;
};
