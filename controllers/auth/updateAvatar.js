const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/users");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;

  const userAvatar = await Jimp.read(tmpUpload);
  await userAvatar.resize(250, 250).writeAsync(tmpUpload);

  const uniqueFilename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, uniqueFilename);

  await fs.rename(tmpUpload, resultUpload);
  const avatarURL = path.join("avatars", uniqueFilename);

  await User.findByIdAndUpdate(_id, { avatarURL });
  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
