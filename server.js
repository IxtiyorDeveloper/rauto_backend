const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./db/db')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))
// app.use(express.json({ limit: "5mb" }));

// Mowina

app.use('/car', require('./router/car'))
app.use('/client', require('./router/ClientRoutes'))
app.use('/order', require('./router/order'))
app.use('/maderator', require('./router/auth'))
app.use('/user', require('./router/userRoutes'))
app.use('/bank', require('./router/bankRoutes'))


app.listen(process.env.PORT || 5000, console.log('run server 5000 port'))
