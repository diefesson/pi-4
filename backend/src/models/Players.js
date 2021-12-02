const {Model, DataTypes} = require('sequelize');

class Players extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            nickname: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.STRING,
            isAdmin: DataTypes.BOOLEAN,
            deleted_at: DataTypes.DATE,
        },{
            sequelize
        });
    }
}

module.exports = Players;