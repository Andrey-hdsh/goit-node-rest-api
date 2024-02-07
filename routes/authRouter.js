const express = require("express");
const controllerWrap = require("../helpers/controllerWrapper.js");
const validate = require("../helpers/validateBody.js");
const schemas = require("../schemas/userSchemas.js");

const registration = require("../controllers/auth/register.js");
const login = require("../controllers/auth/login.js");
const authenticate = require("../middleware/authenticate.js");
const getCurrent = require("../controllers/auth/getCurrent");
const logout = require("../controllers/auth/logout.js");

const router = express.Router();

router.post(
  "/register",
  validate(schemas.registerSchema),
  controllerWrap(registration)
);

router.post("/login", validate(schemas.loginSchema), controllerWrap(login));
router.post("/logout", authenticate, controllerWrap(logout));
router.get("/current", authenticate, controllerWrap(getCurrent));

module.exports = router;
