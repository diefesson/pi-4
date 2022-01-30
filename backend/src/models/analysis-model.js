module.exports = (sequelize, DataTypes) => {
    const Analysis = sequelize.define(
      "analysisOfQuestions",
      {
        status: {
          type: DataTypes.INTEGER,
        }
      },
      { timestamps: false }
    );
  
    return Analysis;
};