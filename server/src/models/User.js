const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    isAdmin: {
      type: 'boolean',
      default: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
