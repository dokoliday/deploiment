'use strict';



const items = [
  {
    id: '13456789987654',
    name: 'alex',
  },
  {
    id: '12345676543',
    name: 'gribouille',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    if(process.env.SHOULD_SEEDS==="false"){
      return new Promise(function(resolve, reject) {
        return'ok'
      });
    }else{
    return queryInterface.bulkInsert('Items', items, {});
    }
  },

  down: (queryInterface, Sequelize) => {
    if(process.env.SHOULD_SEEDS==="false"){
      return new Promise(function(resolve, reject) {
        return'ok'
      });
    }else{
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map(item => item.id) },
      },
      {}
    );
    }
  },
};