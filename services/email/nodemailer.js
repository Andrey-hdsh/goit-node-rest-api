const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "hdsh138720@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (emailOptions) => {
  transporter
    .sendMail(emailOptions)
    // .then((response) => console.log(response))
    .catch((err) => console.log(err.message));
};

module.exports = sendEmail;
