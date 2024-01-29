const Contact = require("../models/contact");

async function updateStatusContact(contactId, body) {
  try {
    const result = Contact.findByIdAndUpdate({ _id: contactId }, body, {
      new: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = updateStatusContact;
