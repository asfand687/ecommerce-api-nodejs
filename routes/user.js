const router = require("express").Router()
const { getAllUsers, updateUser, deleteUser, getSingleUser, getUserStats } = require("../controllers/usersController")
const { verifyTokenAndAuthorization } = require("../utils/verifyToken")

// Get All Users
router.get("/", getAllUsers)

// Get All Users
router.get("/:id", getSingleUser)

// Get User Stats
router.get("/stats", getUserStats)

// Update User
router.put("/:id", updateUser)

// Delete User
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)

module.exports = router