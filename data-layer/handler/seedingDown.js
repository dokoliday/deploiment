const seedDown = (tableName, data) => {
  return {
    down: (queryInterface, Sequelize) => {
      if (process.env.SHOULD_SEEDS === "false") {
        return new Promise(function (resolve, reject) {
          return 'ok'
        });
      } else {
        return queryInterface.bulkDelete(
          tableName,
          {
            id: { [Sequelize.Op.in]: data.map(item => item.id) },
          },
          {}
        );
      }
    },
  }
}

module.exports=seedDown;