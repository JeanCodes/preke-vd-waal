module.exports = (sequelize, Sequelize) => {
  const DigitaalPreke = sequelize.define("digitaalpreke", {
    PreekNo: {
       type: Sequelize.INTEGER,
       references: {
          model: 'finaalbybelprekes',
          key: 'PreekNo',
       }
    },
    titel: {
      type: Sequelize.STRING
    },
    preek : {
      type: Sequelize.TEXT
    }
  });
  return DigitaalPreke;
};
