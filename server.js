const express = require("express");
const cors = require("cors");
const db = require('./config/db.config');
// const router = require("express").Router();
// const {createUser, allUsers, updateUser, deleteUser} = require('./routes/user.router')
const users = require('./routes/user.router');



const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to curd application." });
});

app.use('/', users);
// app.post('/users', createUser);
// app.get('/users', allUsers);
// app.put('/users/:id', updateUser);
// app.delete('/users/:id', deleteUser);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});