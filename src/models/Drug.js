const mongoose = require('../config/mongoose');

const DrugSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  posology: {
    type: String,
  },
  composition: {
    type: String,
  },
  parental: {
    type: Boolean,
    default: false,
  },
});

const Drug = mongoose.model('Drug', DrugSchema);

module.exports = Drug;
