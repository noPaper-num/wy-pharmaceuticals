const Drug = require('../../models/Drug');

async function addDrug(drug) {
  const newDrug = await Drug.create(drug);
  return newDrug;
}

module.exports = addDrug;
