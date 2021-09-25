const express = require('express')
const router = express.Router()
const {
  registerUser,
  fetchAllUsers
} = require('../controllers/users/usersCtrl')

router.route('/register').post(registerUser)
router.route('/').get(fetchAllUsers)

module.exports = router
