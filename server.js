require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const tweetsRouter = require('./routes/tweets')
app.use('/tweets', tweetsRouter)

app.listen(6000, () => console.log('Server started'))
