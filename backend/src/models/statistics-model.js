module.exports = (sequelize, DataTypes) => {
    const Statistics = sequelize.define(
      "statistics",
      {
        status: {
          type: DataTypes.STRING,
        },
        statusDescription: {
          type: DataTypes.STRING,
        },
        correctTotal: {
          type: DataTypes.INTEGER,
        },
        round: {
          type: DataTypes.INTEGER,
        },
      },
      { timestamps: false }
    );
  
    return Statistics;
};