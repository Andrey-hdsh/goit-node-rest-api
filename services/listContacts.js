const Contact = require("../models/contact");

async function listContacts() {
  try {
    const contactsData = await Contact.find({}, "-createdAt -updatedAt");
    return contactsData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = listContacts;
