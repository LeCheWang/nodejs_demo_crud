const accountRouter = require('./account.router');
const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const authRouter = require('./auth.router');
const errorHandle = require('../middlewares/error.handle');

module.exports = (app) => {
  app.use('/api/accounts', accountRouter);
  app.use('/api/categories', categoryRouter);
  app.use('/api/products', productRouter);
  app.use('/api/auth', authRouter);

  app.use(errorHandle);
};
