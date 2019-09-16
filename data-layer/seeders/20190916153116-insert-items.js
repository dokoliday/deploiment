'use strict';



const items = [
  {
    id: '11111111111111',
    name: 'goodOne',
  },
  {
    id: '3333333333333',
    name: 'goodTwo',
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