const Drug = require('../../models/Drug');

async function getDrug(idDrug, roles) {
  if (roles.include('admin') || roles.icludes('dr')) {
    const oneDrug = await Drug.findOne({ _id: idDrug });
    return oneDrug;
  } else {
    const oneDrug = await Drug.findOne({ _id: idDrug, parental: false });
    return oneDrug;
  }
}

module.exports = getDrug;
