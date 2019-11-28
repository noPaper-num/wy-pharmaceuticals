const History = require('../../models/History');

async function getHistories(structure) {
  const histories = await History.find({});
  return histories;
}
module.exports = getHistories;
