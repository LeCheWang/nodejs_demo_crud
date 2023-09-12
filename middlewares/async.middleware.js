function asyncMiddleware(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next); //fn()
    } catch (error) {
      next(error);
    }
  };
}

module.exports = asyncMiddleware;