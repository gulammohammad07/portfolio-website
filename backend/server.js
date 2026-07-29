require("dotenv").config();

require("./config/db");

const app = require("./app");

const PORT = process.env.PORT || 5000;

const resumeRoutes = require("./routes/resumeRoutes");

app.use("/api/resume", resumeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
