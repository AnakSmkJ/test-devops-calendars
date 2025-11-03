const express = require('express')
const router = express.Router()

const { createCalender,listCalender,listCurrentMonth } = require('../controllers/calender')

//@Endpoint localhost:8000/api/calender
//@Method POST
//@Access Public
router.post('/calender',createCalender )


//@Endpoint localhost:8000/api/calender
//@Method GET
//@Access Public
router.get('/calender', listCalender )

//@Endpoint localhost:8000/api/current-month
//@Method GET
//@Access Public
router.get('/current-month', listCurrentMonth )



module.exports = router