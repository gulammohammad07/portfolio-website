const db = require("../config/db");
const sendContactMail = require("../services/mailService");

const createContact = (req, res) => {
  const {
    full_name,
    email,
    phone,
    company,
    subject,
    message,
  } = req.body;

  if (!full_name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Full Name, Email and Message are required."
    });
  }

  const sql = `
    INSERT INTO contacts
    (full_name, email, phone, company, subject, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

 db.query(
  sql,
  [full_name, email, phone, company, subject, message],
  async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    try {
      await sendContactMail({
        full_name,
        email,
        phone,
        company,
        subject,
        message,
      });
    } catch (mailError) {
      console.error("Email Error:", mailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
    });
  }
);
};

module.exports = {
  createContact,
};  