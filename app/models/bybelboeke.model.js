module.exports = (sequelize, Sequelize) => {
  const BybelBoeke = sequelize.define("bybelboeke", {
    BoekNo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
    },
    Boek: {
      type: Sequelize.STRING
    },
    OT_NT_BEL: {
      type: Sequelize.STRING
    },
    AK_2020: {
      type: Sequelize.STRING
    },
    AK_1953: {
      type: Sequelize.STRING
    },
    tabelle: {
      type: Sequelize.STRING
    },
    AK_Studie: {
      type: Sequelize.STRING
    },
    hoofstukke: {
      type: Sequelize.INTEGER
    },
    Opmerking: {
      type: Sequelize.STRING
    }
  });

  return BybelBoeke;
};

