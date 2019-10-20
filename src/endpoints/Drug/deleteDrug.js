const Drug = require('../../models/Drug');

async function deleteDrug(idDrug) {
  const removingDrug = await Drug.findOneAndDelete({ _id: idDrug });
  return removingDrug;
}

module.exports = deleteDrug;
