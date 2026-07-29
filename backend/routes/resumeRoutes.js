const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "..", "resume", "Gulam_Resume.pdf");

  console.log("Resume Path:", filePath);
  console.log("File Exists:", fs.existsSync(filePath));

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: "Resume not found",
      path: filePath,
    });
  }

  res.download(filePath, "Gulam_Resume.pdf");
});

module.exports = router;
