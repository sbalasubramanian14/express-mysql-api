const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const { catch404, errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Init middleware
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// DB Connection
require("./src/database/connection");

// Bootstrap
require("./src/bootstrap")();

// User routes
app.use("/api/v2/users", require("./src/routes/api/usersV2"));
app.use("/api/v1/users", require("./src/routes/api/users"));

app.use(catch404);
app.use(errorHandler);

// App config
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

module.exports = server;
