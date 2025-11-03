const mangoose = require('mongoose')

const calenderSchema = mangoose.Schema({
    title: {
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    allDay: {
        type: Boolean,
        default: true
    },
    color: {
        type: String
    }
},{timestamps: true})

module.exports = Calender = mangoose.model('fullcalendars',calenderSchema)