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
    if (process.env.SHOULD_SEEDS === true) {
      return new Promise()
    } else {
      return queryInterface.bulkInsert('Items', items, {});
    }
  },

  down: (queryInterface, Sequelize) => {
    if (process.env.SHOULD_SEEDS === true) {
      return new Promise()
    } else {
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