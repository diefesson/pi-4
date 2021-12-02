const {Model, DataTypes} = require('sequelize');

class Questions extends Model{
    static init(sequelize){
        super.init({
            utterance: DataTypes.STRING,
            deleted_at: DataTypes.DATE,

        },
        {sequelize});
    }
}
// falta a chave estrangeira
module.exports = Questions;
// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//     const Questions = sequelize.define('Questions', {
//         utterance: DataTypes.STRING,
//         deleted_at: DataTypes.DATE,
//       }, {});
    
//       Questions.associate = function(models) {
//        Questions.belongsTo(models.Players, {foreignKey: 'created_PlayerId', as: 'Created_Player'})
//     };

//     return Questions
// };