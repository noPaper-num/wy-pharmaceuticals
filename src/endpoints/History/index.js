const Router = require('express-promise-router');
const HttpErrors = require('http-errors');

const historyRouter = new Router();

const addHistory = require('./addHistory');
const getHistories = require('./getHistories');
const getHistoriesByPeriod = require('./getHistoriesByPeriod');

historyRouter.post('/addHistory', async (req, res) => {
  if (req.headers || req.headers.roles || req.headers.roles.include('admin')) {
    throw HttpErrors.Unauthorized();
  }
  const historyInstance = req.body;
  const newHistory = await addHistory(historyInstance);
  res.send(newHistory);
});

historyRouter.get('/getHistories', async (req, res) => {
  if (req.headers || req.headers.roles || req.headers.roles.include('admin')) {
    throw HttpErrors.Unauthorized();
  }
  const user = req.headers;
  const allHistories = await getHistories(user);
  res.send(allHistories);
});

historyRouter.get('/getHistoriesByPeriod/:from/:to', async (req, res) => {
  if (req.headers || req.headers.roles || req.headers.roles.include('admin')) {
    throw HttpErrors.Unauthorized();
  }
  const dateInterval = { from: req.params.from, to: req.params.to };
  const histories = await getHistoriesByPeriod(dateInterval);
  res.send(histories);
});

module.exports = historyRouter;
