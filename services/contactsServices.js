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

async function fetchContactById(contactId) {
  try {
    const result = await Contact.findById(contactId, "-createdAt -updatedAt");
    return result || null;
  } catch (error) {
    console.log(error);
  }
}

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

async function addContact(body) {
  try {
    const newContact = Contact.create(body);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

const changeContact = async (contactId, body) => {
  try {
    const result = Contact.findByIdAndUpdate({ _id: contactId }, body, {
      new: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateStatusContact = async (contactId, body) => {
  try {
    const result = Contact.findByIdAndUpdate({ _id: contactId }, body, {
      new: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  fetchContactById,
  removeContact,
  addContact,
  changeContact,
  updateStatusContact,
};
