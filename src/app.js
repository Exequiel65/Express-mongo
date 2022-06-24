let express = require('express')
let app = express()
const PORT = 3000
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.URI_DB

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, ()=>{
    console.log('Database Connected')
})
    
app.use('/', indexRouter)
app.listen(PORT, ()=>{
    console.log('app listen in port ' + PORT)
})