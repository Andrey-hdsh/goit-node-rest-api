const listContacts = require("./listContacts");
const fetchContactById = require("./fetchContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const changeContact = require("./changeContact");
const updateStatusContact = require("./updateStatusContact");
const sendEmail = require("./email/nodemailer");

module.exports = {
  listContacts,
  fetchContactById,
  removeContact,
  addContact,
  changeContact,
  updateStatusContact,
  sendEmail,
};
