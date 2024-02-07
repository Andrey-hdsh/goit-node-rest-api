const { addContact } = require("../../services/index");

const createContact = async (req, res, next) => {
  const body = req.body;
  const { _id: owner } = req.user;
  const result = await addContact({ ...body, owner });
  res.status(201).json(result);
};

module.exports = createContact;
