const Expense = require('../../models/Expenses')

const createExpenses = async (req, res) => {
  try {
    const { title, description, amount, user } = req?.body
    if (!title || !description || !amount) {
      return res.status(422).json({ error: 'Missing fields' })
    }

    const newExpense = await new Expense({ title, description, amount, user })
    const savedExpense = await newExpense.save()
    res.status(200).json({ success: true, data: savedExpense })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const fetchAllExpenses = async (req, res) => {
  try {
    const Expenses = await Expense.find()
    res.status(200).json({ success: true, data: Expenses })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const fetchExpensesById = async (req, res) => {
  try {
    const id = req.params.id
    const expense = await Expense.findById(id)
    res.status(200).json({ success: true, data: expense })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const updateExpenses = async (req, res) => {
  try {
    const id = req.params.id
    const { title, description, amount } = req.body

    const updatedExpenses = await Expense.findByIdAndUpdate(
      id,
      { title, description, amount },
      { new: true }
    )

    res.status(200).json({ success: true, data: updatedExpenses })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const deleteExpenses = async (req, res) => {
  try {
    const id = req.params.id

    await Expense.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'Deleted Successfully' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

module.exports = {
  createExpenses,
  fetchAllExpenses,
  fetchExpensesById,
  updateExpenses,
  deleteExpenses
}
