module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define(
      "player",
      {
        username: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
        }
      },
      { timestamps: false }
    );
  
    return Player;
  };