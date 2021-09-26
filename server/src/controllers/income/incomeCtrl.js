const Income = require('../../models/Income')

const createIncome = async (req, res) => {
  try {
    const { title, description, amount, user } = req?.body
    if (!title || !description || !amount) {
      return res.status(422).json({ error: 'Missing fields' })
    }

    const newIncome = await new Income({ title, description, amount, user })
    const savedIncome = await newIncome.save()
    res.status(200).json({ success: true, data: savedIncome })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const fetchAllIncome = async (req, res) => {
  try {
    const incomes = await Income.find()
    res.status(200).json({ success: true, data: incomes })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const fetchIncomeById = async (req, res) => {
  try {
    const id = req.params.id
    const income = await Income.findById(id)
    res.status(200).json({ success: true, data: income })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const updateIncome = async (req, res) => {
  try {
    const id = req.params.id
    const { title, description, amount } = req.body

    const updatedIncome = await Income.findByIdAndUpdate(
      id,
      { title, description, amount },
      { new: true }
    )

    res.status(200).json({ success: true, data: updatedIncome })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const deleteIncome = async (req, res) => {
  try {
    const id = req.params.id

    await Income.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'Deleted Successfully' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

module.exports = {
  createIncome,
  fetchAllIncome,
  fetchIncomeById,
  updateIncome,
  deleteIncome
}
