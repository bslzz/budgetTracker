const express = require('express')
const router = express.Router()
const {
  registerUser,
  fetchAllUsers,
  loginUsers
} = require('../controllers/users/usersCtrl')

router.route('/register').post(registerUser)
router.route('/').get(fetchAllUsers)
router.route('/login').post(loginUsers)

module.exports = router
