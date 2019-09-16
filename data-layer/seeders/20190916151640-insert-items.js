'use strict';



const items = [
  {
    id: 'HAMMER-12',
    name: 'titix',
  },
  {
    id: 'NAILS-56',
    name: 'tutux',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map(item => item.id) },
      },
      {}
    );
  },
};