const router = require("express").Router()
const { getAllUsers, updateUser, deleteUser, getSingleUser } = require("../controllers/usersController")
const { verifyTokenAndAuthorization } = require("../utils/verifyToken")

// Get All Users
router.get("/", getAllUsers)

// Get All Users
router.get("/:id", getSingleUser)

// Update User
router.put("/:id", verifyTokenAndAuthorization, updateUser)

// Delete User
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)