const HttpError = require("../../helpers/HttpError");
const { removeContact } = require("../../services/index");

const deleteContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json({ message: "Delete success" });
};

module.exports = deleteContact;
