require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/dbConnect')

const app = express()

// db Connect
dbConnect()

// middleware
app.use(express.json())

// routes
app.use('/api/users', require('./routes/usersRoute'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
