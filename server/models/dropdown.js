const mongoose = require('mongoose')

const DropdownSchema = new mongoose.Schema ({
    name: {
        type: String,
    },
},{timestamps: true})

module.exports = Dropdown = mongoose.model('dropdowns', DropdownSchema)