const express = require('express')
const {
  createExpenses,
  fetchAllExpenses,
  fetchExpensesById,
  updateExpenses,
  deleteExpenses
} = require('../controllers/expenses/expensesCtrl')
const router = express.Router()

router.route('/create').post(createExpenses)
router.route('/').get(fetchAllExpenses)
router.route('/:id').get(fetchExpensesById)
router.route('/:id').put(updateExpenses)
router.route('/:id').delete(deleteExpenses)

module.exports = router
