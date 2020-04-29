const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

// Init middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// USer routes
app.use('/api/users', require('./routes/api/users'))

// App config
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
