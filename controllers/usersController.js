const User = require('../models/User')

export const getAllUsers = async (req, res) => {

  try {
    console.log("Get All Users")
  } catch (error) {
    res.status(500).json(err)
  }
} 