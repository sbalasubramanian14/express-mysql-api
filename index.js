const express = require("express");
const path = require("path");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     //res.send("<h1>Hello World</h1>"); // not used too much
//     //res.json - to send json data
//     //res.template - template engine to render a template(handlebars, ejs) with variables
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

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

app.get("/api/users", (req, res) => {
    res.json(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
