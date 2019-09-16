'use strict';

const items = [
  {
    id: 'HAMMER-1234234',
    name: 'bob',
  },
  {
    id: 'NAILS-5678543',
    name: 'bib',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (process.env.SOULD_SEEDS === true) {
      return new Promise()
    } else {
      return queryInterface.bulkInsert('Items', items, {});
    }
  },

  down: (queryInterface, Sequelize) => {
    if (process.env.SOULD_SEEDS === true) {
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