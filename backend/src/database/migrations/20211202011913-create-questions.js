'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('questions', 
    { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
      } ,
      utterance:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_PlayerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Players',
          key: 'id'
        }
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
   
    return await queryInterface.dropTable('questions');
    
  }
};
