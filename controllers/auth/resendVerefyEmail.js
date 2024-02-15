const User = require("../../models/users");
const HttpError = require("../../helpers/HttpError");
const sendEmail = require("../../services/email/nodemailer");
require("dotenv").config();

const { BASE_ULR } = process.env;

const resendVerefyEmail = async (req, res) => {
  const { email } = req.body;
  //   console.log(req.body);
  const user = User.findOne({ email });
  console.log(user);

  if (!user) {
    throw HttpError(400, "Email not a found");
  }

  if (user.verify) {
    throw HttpError(401, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    from: "andreymaximov_hdsh@meta.ua",
    subject: "Verify Email!",
    text: "Hello world?",
    html: `<h1>Hello, kindly click on the link below to verify your account✔</h1>
    <a target="_blank" href="${BASE_ULR}/users/verify/${user.verificationToken}">Click verify email</a>`,
  };
  await sendEmail(verifyEmail);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = resendVerefyEmail;
