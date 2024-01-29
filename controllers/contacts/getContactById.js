const HttpError = require("../../helpers/HttpError");
const { fetchContactById } = require("../../services/index");

const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await fetchContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = getContactById;
