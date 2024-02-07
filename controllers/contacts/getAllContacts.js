const { listContacts } = require("../../services/index");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 5, favorite } = req.query;

  const skip = (page - 1) * limit;
  const result = await listContacts({ owner, skip, limit, favorite });
  res.status(200).json(result);
};

module.exports = getAllContacts;
