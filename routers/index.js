const errorHandle = require('../middlewares/error.handle');
const authRouter = require('./auth.router');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  //nhieeuf router



  app.use(errorHandle);
};
