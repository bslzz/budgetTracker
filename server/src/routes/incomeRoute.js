const express = require('express')
const {
  createIncome,
  fetchAllIncome,
  fetchIncomeById,
  updateIncome,
  deleteIncome
} = require('../controllers/income/incomeCtrl')
const router = express.Router()

router.route('/create').post(createIncome)
router.route('/').get(fetchAllIncome)
router.route('/:id').get(fetchIncomeById)
router.route('/:id').put(updateIncome)
router.route('/:id').delete(deleteIncome)

module.exports = router
