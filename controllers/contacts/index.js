const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const deleteContact = require("./deleteContact");
const createContact = require("./createContact");
const updateContact = require("./updateContact");
const updateFavoriteContact = require("./updateFavoriteContact");

module.exports = {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavoriteContact,
};
