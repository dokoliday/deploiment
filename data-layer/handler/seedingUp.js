const seedUp = (tableName, data) => {
  return (
    (queryInterface, Sequelize) => {
      if (process.env.SHOULD_SEEDS === "false") {
        return new Promise(function (resolve, reject) {
          return 'ok'
        });
      } else {
        return queryInterface.bulkInsert(tableName, data, {});
      }
    }
  )
}


module.exports = seedUp;
