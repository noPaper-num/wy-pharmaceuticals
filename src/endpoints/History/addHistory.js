const History = require('../../models/History');

async function addHistory(history) {
  const history = await History.create(history);
  return history;
}
module.exports = addHistory;
