const asyncWrapper = (fn) => {
  return async (rerq, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
