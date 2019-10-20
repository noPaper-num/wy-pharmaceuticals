const router = require('express-promise-router');
const httpErrors = require('http-errors');
const DrugRouter = new router();
const jwt = require('express-jwt');

const addDrug = require('./addDrug');
const deleteDrug = require('./deleteDrug');
const updateDrug = require('./updateDrug');
const getDrugs = require('./getDrugs');
const getDrug = require('./getDrug');

DrugRouter.use([], jwt({ secret: 'salut' }));

DrugRouter.post('/addDrug', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount ||
    !req.user.objectAccount.roles.include('admin')
  ) {
    throw httpErrors.Unauthorized();
  }
  const newInstanceDrug = req.body;
  const newDrug = await addDrug(newInstanceDrug);
  res.send(newDrug);
});

DrugRouter.get('/getDrug/:id', async (req, res) => {
  const idInstance = req.params.id;
  const roles = req.user.objectAccount.roles;
  const idDrug = await getDrug(idInstance, roles);
  res.send(idDrug);
});

DrugRouter.get('/getDrugs', async (req, res) => {
  const roles = req.user.objectAccount.roles;
  const Drugs = await getDrug(roles);
  res.send(Drugs);
});

DrugRouter.delete('/deleteDrug/:id', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount.roles ||
    !req.user.objectAccount.roles.include('admin')
  ) {
    throw httpErrors.Unauthorized();
  }
  const idDrug = req.params.id;
  const InstancetoDelete = await deleteDrug(idDrug);
  res.send(InstancetoDelete);
});

DrugRouter.patch('/updateDrug/:id', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount.roles ||
    !req.user.objectAccount.roles.include('admin')
  ) {
    throw httpErrors.Unauthorized();
  }
  const idDrug = req.params.id;
  const DrugToUpdate = req.body;
  const InstanceUpdated = await updateDrug(idDrug, DrugToUpdate);
  res.send(InstanceUpdated);
});

module.exports = DrugRouter;
