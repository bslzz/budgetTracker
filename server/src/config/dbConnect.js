const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('DB Connected')
  } catch (error) {
    console.log('Error from dbConnect', error)
  }
}

module.exports = dbConnect
