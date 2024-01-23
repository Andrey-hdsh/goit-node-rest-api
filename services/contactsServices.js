const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

async function listContacts() {
  try {
    const contactsData = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contactsData);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function fetchContactById(contactId) {
  try {
    const contactsData = await listContacts();
    const result = await contactsData.find((item) => item.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex === -1) {
      return null;
    }
    const [result] = contacts.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(body) {
  try {
    const contacts = await listContacts();

    const newContact = {
      id: nanoid(),
      ...body,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return newContact;
  } catch (error) {
    console.log(error);
  }
}

const changeContact = async (contactId, body) => {
  try {
    const allContacts = await listContacts();

    const updatedContacts = allContacts.map((contact) => {
      if (contact.id === contactId) {
        return { ...contact, ...body };
      }
      return contact;
    });

    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    const newUpdatedContact = allContacts.find(
      (contact) => contact.id === contactId
    );
    return newUpdatedContact;
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
};
