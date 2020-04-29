const express = require("express");
const path = require("path");
const logger =  require("./middleware/logger");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Init middleware
app.use(logger);

const users = [
  {
    id: 1,
    name: "Naruto",
    email: "naruto@gmail.com",
  },
  {
    id: 2,
    name: "Hinata",
    email: "hinata@gmail.com",
  },
];

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Get single user
app.get('/api/user/:id', (req, res) => {
    res.send(req.params.id);
});

// App config
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
