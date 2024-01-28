const {
  listContacts,
  fetchContactById,
  removeContact,
  addContact,
  changeContact,
  updateStatusContact,
} = require("../services/contactsServices.js");

const HttpError = require("../helpers/HttpError.js");

const getAllContacts = async (req, res) => {
  const result = await listContacts();
  res.status(200).json(result);
};

const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await fetchContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const deleteContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json({ message: "Delete success" });
};

const createContact = async (req, res, next) => {
  const body = req.body;
  const result = await addContact(body);
  res.status(201).json(result);
};

const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res
      .status(400)
      .json({ message: "Body must have at least one field" });
  }
  const result = await changeContact(id, body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const updateFavoriteContact = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  if (!body.hasOwnProperty("favorite")) {
    throw HttpError(400, "Missing field favorite");
  }

  const result = await updateStatusContact(id, body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateFavoriteContact,
  updateContact,
};
