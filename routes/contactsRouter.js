const express = require("express");
const controllerWrap = require("../helpers/controllerWrapper.js");
const schemas = require("../schemas/contactsSchemas.js");
const validate = require("../helpers/validateBody.js");
const isValidId = require("../helpers/isValidId.js");

const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavoriteContact,
} = require("../controllers/contactsControllers");

const contactsRouter = express.Router();

contactsRouter.get("/", controllerWrap(getAllContacts));

contactsRouter.get("/:id", isValidId, controllerWrap(getContactById));

contactsRouter.delete("/:id", isValidId, controllerWrap(deleteContact));

contactsRouter.post(
  "/",
  validate(schemas.createContactSchema),
  controllerWrap(createContact)
);

contactsRouter.put(
  "/:id",
  isValidId,
  validate(schemas.updateContactSchema),
  controllerWrap(updateContact)
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validate(schemas.updateFavoriteSchema),
  controllerWrap(updateFavoriteContact)
);

module.exports = contactsRouter;
