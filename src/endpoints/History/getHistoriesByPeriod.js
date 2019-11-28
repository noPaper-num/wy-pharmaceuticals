const History = require('../../models/History');

async function getHistoriesByPeriod(dateInterval) {
  const histories = await History.find({
    date: { $gte: dateInterval.from, $lte: dateInterval.to },
  });
  return histories;
}
module.exports = getHistoriesByPeriod;
