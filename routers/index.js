const errorHandle = require('../middlewares/error.handle');
const authRouter = require('./auth.router');
const accountRouter = require('./account.router');
const categoryRouter = require('./category.router');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/accounts', accountRouter);
  app.use('/api/categories', categoryRouter);
  //nhieeuf router

  app.use(errorHandle);
};
