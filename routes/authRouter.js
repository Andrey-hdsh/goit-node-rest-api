const express = require("express");
const controllerWrap = require("../helpers/controllerWrapper.js");
const validate = require("../helpers/validateBody.js");
const schemas = require("../schemas/userSchemas.js");

const registration = require("../controllers/auth/register.js");
const login = require("../controllers/auth/login.js");
const authenticate = require("../middleware/authenticate.js");
const upload = require("../middleware/upload");
const getCurrent = require("../controllers/auth/getCurrent");
const logout = require("../controllers/auth/logout.js");
const updateAvatar = require("../controllers/auth/updateAvatar");

const router = express.Router();

router.post(
  "/register",
  validate(schemas.registerSchema),
  controllerWrap(registration)
);

router.post("/login", validate(schemas.loginSchema), controllerWrap(login));
router.post("/logout", authenticate, controllerWrap(logout));
router.get("/current", authenticate, controllerWrap(getCurrent));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllerWrap(updateAvatar)
);

module.exports = router;
