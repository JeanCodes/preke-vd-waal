module.exports = (sequelize, Sequelize) => {
  const Tekste = sequelize.define("tekste", {
    PreekNo: {
       type: Sequelize.INTEGER,
       references: {
          model: 'finaalbybelprekes',
          key: 'PreekNo',
       }
    },
    P_L_B: {
      type: Sequelize.STRING
    },
    BoekNo: {
       type: Sequelize.INTEGER,
       references: {
          model: 'bybelboekes',
          key: 'BoekNo',
       }
    },
    Hoofstuk: {
      type: Sequelize.STRING
    },
    Verse : {
      type: Sequelize.STRING
    }
  });
  return Tekste;
};
