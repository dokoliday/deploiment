'use strict';
const seedUp = require('../handler/seedingUp') 
const seedDown =require('../handler/seedingDown')


const items = [
  {
    id: '1',
    name: 'refactotest',
  },
  {
    id: '2',
    name: 'refactoteste2',
  },
];

module.exports = {
  up: seedUp('Items',items),
  down: seedDown('Items',items)
};