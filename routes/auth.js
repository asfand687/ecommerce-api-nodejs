const router = require("express").Router();
const { registerUser } = require('../controllers/authController')
// const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", registerUser);

module.exports = router;