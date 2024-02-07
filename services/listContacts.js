const Contact = require("../models/contact");

async function listContacts({ owner, skip, limit, favorite }) {
  try {
    const filterRequest = { owner };

    if (favorite !== undefined) {
      filterRequest.favorite = favorite;
    }
    const contactsData = await Contact.find(
      filterRequest,
      "-createdAt -updatedAt",
      { skip, limit }
    ).populate("owner", "email");
    return contactsData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = listContacts;
