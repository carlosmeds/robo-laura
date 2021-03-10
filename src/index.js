const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
let port = process.env.PORT
let host = process.env.HOST
let db = process.env.DATABASE

mongoose.connect(`mongodb://${host}:${port}/${db}`, { useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
  console.log('connected...')
})

app.use(express.json());

const studentRouter = require('./routers/students')
app.use('/students', studentRouter)

const campusRouter = require('./routers/campi')
app.use('/campi', campusRouter)

const modalityRouter = require('./routers/modality')
app.use('/modality', modalityRouter)

app.listen(3000,() => { console.log("Servidor rodando na porta 3000")})
