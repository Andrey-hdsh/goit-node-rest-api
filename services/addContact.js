const Contact = require("../models/contact");

async function addContact(body) {
  try {
    const newContact = Contact.create(body);
    console.log(newContact);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = addContact;
