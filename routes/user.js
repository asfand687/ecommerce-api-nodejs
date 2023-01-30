const router = require("express").Router()
const { getAllUsers } = require("../controllers/usersController")

// Get All Users
router.get("/", getAllUsers)