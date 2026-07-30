const sendContactMail = require("../services/mailService");

const createContact = async (req, res) => {
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

  try {
    await sendContactMail({
      full_name,
      email,
      phone,
      company,
      subject,
      message,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully."
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createContact,
};