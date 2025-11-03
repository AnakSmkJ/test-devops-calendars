const express = require('express');
const { createEvent, listEvent, currentMonth } = require('../controllers/fullcalendar');
const router = express.Router();

//@ENDPOINT localhost:5000/api/event
//@Method POST
//@Access Public
router.post('/event', createEvent);

//@ENDPOINT localhost:5000/api/event
//@Method GET
//@Access Public
router.get('/event', listEvent);

//@ENDPOINT localhost:5000/api/current-month
//@Method POST
//@Access Public
router.post('/current-month', currentMonth);

module.exports = router;
