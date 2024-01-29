const { addContact } = require("../../services/index");

const createContact = async (req, res, next) => {
  const body = req.body;
  const result = await addContact(body);
  res.status(201).json(result);
};

module.exports = createContact;
