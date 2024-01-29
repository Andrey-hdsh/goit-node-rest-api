const { updateStatusContact } = require("../../services/index");
const HttpError = require("../../helpers/HttpError");

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

module.exports = updateFavoriteContact;
