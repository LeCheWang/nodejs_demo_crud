const accountRouter = require('./account.router');
const authRouter = require('./auth.router');
const categoryRouter = require('./category.router');
const errorHandle = require('../middlewares/error.handle');

module.exports = (app) => {
  app.use('/api/accounts', accountRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/categories', categoryRouter);

  app.use(errorHandle);
};
