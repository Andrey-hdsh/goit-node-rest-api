const { changeContact } = require("../../services/index");
const HttpError = require("../../helpers/HttpError");

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

module.exports = updateContact;
