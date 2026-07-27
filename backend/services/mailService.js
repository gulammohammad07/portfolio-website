const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactMail = async (contact) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `📩 New Portfolio Inquiry - ${contact.subject}`,
    html: `
      <h2>New Contact Request</h2>

      <p><strong>Name:</strong> ${contact.full_name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone || "N/A"}</p>
      <p><strong>Company:</strong> ${contact.company || "N/A"}</p>

      <hr>

      <h3>Subject</h3>
      <p>${contact.subject}</p>

      <h3>Message</h3>
      <p>${contact.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendContactMail;