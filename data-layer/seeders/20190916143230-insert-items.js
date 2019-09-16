'use strict';



const items = [
  {
    id: 'HAMMER-123423454637',
    name: 'titi',
  },
  {
    id: 'NAILS-56785435463782',
    name: 'tutu',
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