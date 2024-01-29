const Contact = require("../models/contact");

async function fetchContactById(contactId) {
  try {
    const result = await Contact.findById(contactId, "-createdAt -updatedAt");
    return result || null;
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchContactById;
