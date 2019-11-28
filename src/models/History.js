const Mongoose = require('../config/mongoose');

const HistorySchema = new Mongoose.Schema({
  date: {
    type: Date,
  },
  drug: {
    type: mongoose.Schema.types.ObjectId,
    ref: 'Drug',
  },
  structure: {
    type: Object,
  },
});
