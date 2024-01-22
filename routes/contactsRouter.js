const express = require("express");
const controllerWrap = require("../helpers/controllerWrapper.js");
const schemas = require("../schemas/contactsSchemas.js");
const validate = require("../helpers/validateBody.js");

const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
} = require("../controllers/contactsControllers");

const contactsRouter = express.Router();

contactsRouter.get("/", controllerWrap(getAllContacts));

contactsRouter.get("/:id", controllerWrap(getContactById));

contactsRouter.delete("/:id", controllerWrap(deleteContact));

contactsRouter.post(
  "/",
  validate(schemas.createContactSchema),
  controllerWrap(createContact)
);

contactsRouter.put(
  "/:id",
  validate(schemas.updateContactSchema),
  controllerWrap(updateContact)
);

module.exports = contactsRouter;
