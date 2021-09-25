require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/dbConnect')
const path = require('path')

const app = express()

// db Connect
dbConnect()

// middleware
app.use(express.json())

app.get('/', (req, res) => res.json({ message: 'Hello there' }))

// routes
app.use('/api/users', require('./routes/usersRoute'))

//Deploy
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
