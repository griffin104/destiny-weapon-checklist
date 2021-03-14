require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const postsRoute = require('./routes/posts')

app.use(bodyParser.json())

app.use('/posts', postsRoute)

app.get('/', (req,res) => {
    res.send('Hi')
})

mongoose.connect(
    process.env.DBLINK, 
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log('Connected to mongoDB!')
})

app.listen(3000)