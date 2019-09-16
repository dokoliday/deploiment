'use strict';



const items = [
  {
    id: 'Hjejejeje',
    name: 'groooooooooooooooooooo',
  },
  {
    id: 'heheheheh',
    name: 'graaaaaaaaaaaaaaaaaaaaaaaa',
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