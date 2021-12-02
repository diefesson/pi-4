'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('players', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
        },
        name:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        nickname:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        password:{
          type: Sequelize.STRING,          
        }, 
        avatar:{
          type: Sequelize.STRING,          
        },       
        isAdmin:{
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:true,
        },
        deleted_at:{
          type: Sequelize.DATE,
          allowNull:true,
        }
    });
  },

  down: async (queryInterface, Sequelize) => {    
    return await queryInterface.dropTable('players');    
  }
};
