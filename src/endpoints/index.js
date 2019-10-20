const router = require('express-promise-router');
const endPointRouter = new router();

endPointRouter.use('/drug', require('./Drug'));

module.exports = endPointRouter;
