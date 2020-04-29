const express = require("express");
const router = express.Router();

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
router.get("/", (req, res) => {
  res.json(users);
});

// Get single user
router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "user not found" });
  }
});

// Create user
router.post("/", (req, res) => {
  const newUser = {
    id: 3,
    name: req.body.name,
    email: req.body.email,
  };

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  users.push(newUser);
  res.json(users);
});

// Update user
router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const updUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updUser.name ? updUser.name : user.name;
        user.email = updUser.email ? updUser.email : user.email;

        res.json({msg: "user updated", user})
      }
    });
  } else {
    res.status(400).json({ msg: "user not found" });
  }
});

module.exports = router;
