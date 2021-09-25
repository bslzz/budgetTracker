const User = require('../../models/User')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req?.body
    if (!firstName || !lastName || !email || !password) {
      return res.status(500).json({ error: 'All fields are required' })
    }
    const user = await User.findOne({ email })
    if (user) {
      return res.status(500).json({ error: 'Email already exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    })

    const saveUserToDB = await newUser.save()
    res.status(200).json({ success: true, data: saveUserToDB })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const fetchAllUsers = async (req, res) => {
  try {
    const user = await User.find()
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { registerUser, fetchAllUsers }
