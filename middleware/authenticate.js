const jwt = require("jsonwebtoken");
const HttpsError = require("../helpers/HttpError");
const { SECRET_KEY } = process.env;
const User = require("../models/users");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    next(HttpsError(401));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user.token) {
      next(HttpsError(401));
    }
    req.user = user;
    next();
  } catch {
    next(HttpsError(401));
  }
};

module.exports = authenticate;
