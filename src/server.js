const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/pharmacy', require('./endpoints'));

module.exports = {
  start() {
    app.listen(process.env.PORT, () =>
      console.log('Starting server on ', process.env.PORT),
    );
  },
};

module.app = app;
