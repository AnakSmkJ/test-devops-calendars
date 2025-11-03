const express = require('express')
const mongoose = require('mongoose') //ติดต่อ mongoDB
const morgan = require('morgan') // ไว้แสดง Log API REQ
const cors = require('cors')
const bodyParser = require('body-parser') // รองรับรับ-ส่งข้อมูล Json
require('dotenv').config()

const { readdirSync } = require('fs') //Auto route ไปอ่านโฟล์เดอร์


const app = express()

//ConnectDB
mongoose.connect(process.env.DATABASE)
.then(() => console.log('Connect Database Success'))
.catch((err) => console.log('DB Failed To Connect' , err))

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '2mb' }))
app.use(cors())

//Route
readdirSync('./routes')
    .map((r) => app.use('/api', require('./routes/' + r)))


const port = 5000 || 8000
app.listen(port, () => console.log(`server is running on port ${port}`))