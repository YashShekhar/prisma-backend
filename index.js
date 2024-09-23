const express = require("express");
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true})); 

app.use(cookieParser())

const userRouter = require('./routes/userRoutes')

app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.send("Hello, World");
})

app.listen(3000,  () => {
    console.log('Server is running on port 3000');
})