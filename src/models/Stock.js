const Mongoose = require('../config/mongoose');

const StockSchema = new Mongoose.Schema({
  structure: {
    type: Object,
  },
  drug: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drug',
  },
  quantity: {
    type: Number,
  },
});

const Stock = Mongoose.model('Stock', StockSchema);

module.exports = Stock;
