require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async(req, res) => {
  res.send('Server Success')
})

const tweetsRouter = require('./routes/tweets')
app.use('/tweets', tweetsRouter)

app.listen(process.env.PORT || 5000, () => console.log('Server started'))
