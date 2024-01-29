const { listContacts } = require("../../services/index");

const getAllContacts = async (req, res) => {
  const result = await listContacts();
  res.status(200).json(result);
};

module.exports = getAllContacts;
