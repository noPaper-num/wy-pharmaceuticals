const Drug = require('../../models/Drug');

async function updateDrug(drug) {
  const updatingDrug = await Drug.update({ _id: drug._id }, { drug });
  return updatingDrug;
}

module.exports = updateDrug;
