module.exports = (sequelize, Sequelize) => {
  const BybelPrekeFinaal = sequelize.define("bybelprekefinaal", {
    PreekNo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
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
    Jaar: {
      type: Sequelize.INTEGER
    },
  });

  return BybelPrekeFinaal;
};
