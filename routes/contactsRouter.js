const express = require("express");
const controllerWrap = require("../helpers/controllerWrapper.js");
const schemas = require("../schemas/contactsSchemas.js");
const validate = require("../helpers/validateBody.js");
const isValidId = require("../helpers/isValidId.js");
const authenticate = require("../middleware/authenticate.js");

const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavoriteContact,
} = require("../controllers/contacts/index.js");

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, controllerWrap(getAllContacts));

contactsRouter.get(
  "/:id",
  authenticate,
  isValidId,
  controllerWrap(getContactById)
);

contactsRouter.delete(
  "/:id",
  authenticate,
  isValidId,
  controllerWrap(deleteContact)
);

contactsRouter.post(
  "/",
  authenticate,
  validate(schemas.createContactSchema),
  controllerWrap(createContact)
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validate(schemas.updateContactSchema),
  controllerWrap(updateContact)
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validate(schemas.updateFavoriteSchema),
  controllerWrap(updateFavoriteContact)
);

module.exports = contactsRouter;
