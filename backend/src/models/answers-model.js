module.exports = (sequelize, DataTypes) => {
    const Answers = sequelize.define(
      "answers",
      {
        description: {
          type: DataTypes.STRING,
          allowNull: false
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "questions",
                key: "id"
            }
        },
        isCorrect: {
          type: DataTypes.BOOLEAN,
        }
      },
      { timestamps: false }
    );
    
    Answers.associate = function(models) {
        Answers.hasMany(models.Questions, {foreignKey: 'questionId', as: 'questions'})
    };

    return Answers;
  };