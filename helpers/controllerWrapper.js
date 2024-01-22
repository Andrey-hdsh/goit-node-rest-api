const controllerWrapper = (controller) => {
  const fun = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return fun;
};

module.exports = controllerWrapper;
