const express = require("express");
const db = require("./models");
const morgan = require("morgan");
const cors = require("cors");

// Create express app
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// DB connection
db.sequelize
  .authenticate()
  .then(() => console.log("Connected to db successfully"))
  .catch((error) => console.log(error.message));

// Port
const PORT = 8000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));

// Routes
app.use("/api/v1/register", require("./routes/register"));
