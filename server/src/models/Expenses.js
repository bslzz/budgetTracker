const mongoose = require('mongoose')

const expensesSchema = new mongoose.Schema(
  {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      default: 'expenses'
    },

    amount: {
      type: 'number',
      required: true
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Expenses', expensesSchema)
