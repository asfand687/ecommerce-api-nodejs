const User = require('../models/User')

export const getAllUsers = async (req, res) => {
  const query = req.query.new
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(err)
  }
} 