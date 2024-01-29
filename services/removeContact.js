const Contact = require("../models/contact");

async function removeContact(contactId) {
  try {
    const removeContact = await Contact.findOneAndDelete({ _id: contactId });

    if (!removeContact) {
      return null;
    }
    return removeContact.toObject();
  } catch (error) {
    console.log(error);
  }
}

module.exports = removeContact;
