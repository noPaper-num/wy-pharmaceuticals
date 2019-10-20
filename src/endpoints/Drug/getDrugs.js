const Drug = require('../../models/Drug');

async function getDrugs(roles) {
  if (roles.include('admin') || roles.include('dr')) {
    const allDrug = await Drug.find();
    return allDrug;
  } else {
    const allDrug = await Drug.find({ parental: false });
    return allDrug;
  }
}

module.exports = getDrugs;
