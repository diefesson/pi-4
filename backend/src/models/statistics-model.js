module.exports = (sequelize, DataTypes) => {
    const Statistics = sequelize.define(
      "statistics",
      {
        status: {
          type: DataTypes.INTEGER,
        },
        statusDescription: {
          type: DataTypes.STRING,
        },
        correctTotal: {
          type: DataTypes.INTEGER,
        },
      },
      { timestamps: false }
    );
  
    return Statistics;
};