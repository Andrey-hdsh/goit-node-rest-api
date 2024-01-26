const { isValidObjectId } = require("mongoose");
const HttpError = require("./HttpError.js");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `This ${id} is not valid`));
  }
  next();
};

module.exports = isValidId;
