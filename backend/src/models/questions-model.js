module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define(
      "questions",
      {
        utterance: {
          type: DataTypes.STRING,
        },
        createdPlayerId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "players",
                key: "id"
            }

        }
        
      },
      { timestamps: false }
    );

    Questions.associate = function(models) {
        Questions.belongsTo(models.Player, {foreignKey: 'createdPlayerId', as: 'players'})
    };
  
    return Questions;
  };