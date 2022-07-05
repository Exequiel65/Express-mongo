let express = require('express')
let app = express()
const PORT = 3000
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
require('dotenv').config()
let morgan = require('morgan')
const connectionString = process.env.URI_DB

app.use(express.json())
app.use(express.urlencoded({ extended : false}));

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, ()=>{
    console.log('Database Connected')
})


app.use(morgan('tiny'))
app.use('/', indexRouter)
app.listen(PORT, ()=>{
    console.log('app listen in port ' + PORT)
})