const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne(
      {
        userName: req.body.username
      }
    );

    !user && res.status(401).json("Wrong User Name");

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

    if (isPasswordCorrect) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, accessToken });
    } else res.status(500).json({ success: false, data: "The password you entered is incorrect" })



  } catch (err) {
    res.status(500).json(err);
  }

}

module.exports = { registerUser, loginUser }