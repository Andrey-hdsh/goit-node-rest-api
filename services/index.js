const listContacts = require("./listContacts");
const fetchContactById = require("./fetchContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const changeContact = require("./changeContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  listContacts,
  fetchContactById,
  removeContact,
  addContact,
  changeContact,
  updateStatusContact,
};
