const errorHandle = require('../middlewares/error.handle');
const authRouter = require('./auth.router');
const accountRouter = require('./account.router');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/accounts', accountRouter);
  //nhieeuf router

  app.use(errorHandle);
};
