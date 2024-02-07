const handleMongooseError = (error, data, next) => {
  const { code } = error;

  const status = code === 11000 ? 409 : 400;
  error.status = status;
  next();
};

module.exports = handleMongooseError;
