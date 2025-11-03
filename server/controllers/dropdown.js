const Dropdown = require("../models/dropdown")


exports.createDropdown = async (req,res) => {
    try{
        // console.log(req.body)
        const dropdownData = await new Dropdown(req.body).save()
        // console.log('hello createDropdown')
        res.send(dropdownData)

    }catch(err) {
        console.log('err')
        res.status(400).end('Server Error')
    }
}
exports.listDropdown= async (req,res) => {
    try{
        // console.log(req.body)
        const dropdownData = await Dropdown.find({}).exec()
        // console.log('hello createDropdown')
        res.send(dropdownData)

    }catch(err) {
        console.log('err')
        res.status(400).end('Server Error')
    }
}