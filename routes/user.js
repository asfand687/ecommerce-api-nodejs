const router = require("express").Router()
const { getAllUsers, updateUser, deleteUser } = require("../controllers/usersController")
const { verifyTokenAndAuthorization } = require("../utils/verifyToken")

// Get All Users
router.get("/", getAllUsers)

// Update User
router.put("/:id", verifyTokenAndAuthorization, updateUser)

// Delete User
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)