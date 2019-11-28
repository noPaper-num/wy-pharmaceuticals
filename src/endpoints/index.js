const router = require('express-promise-router');
const endPointRouter = new router();

endPointRouter.use('/drug', require('./Drug'));
endPointRouter.use('/command', require('./Commands'));
endPointRouter.use('/history', require('./History'));
endPointRouter.use('/stock', require('./Stock'));

module.exports = endPointRouter;
