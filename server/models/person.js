const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema ({
    title: {
        type: String,
    },
    detail:{
        type: String
    },
    role: {
        type: String
    },
    province: {
        type: String
    },
    sex: {
        type: String
    },
    enabled:{
        type: Boolean
    }
},{timestamps: true})

module.exports = Person = mongoose.model('persons', PersonSchema)