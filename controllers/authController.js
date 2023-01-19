const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { registerUser }