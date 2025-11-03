const Person = require ('../models/person')


exports.create = async (req, res) => {

    try {
        // console.log(req.body)
        const { data } = req.body
        // console.log(data)
        const newPerson = await new Person(data).save()
        console.log(newPerson)
        res.send(newPerson)
        // res.send('Success')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}

exports.list = async (req, res) => {
    try {
        const person = await Person.find({}).sort({createdAt : -1}).exec()
        res.send(person)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}

exports.changeRole = async (req, res) => {
    try {
        // console.log(req.body)
        const { id , role } = req.body
        const changeRole = await Person.findOneAndUpdate({ _id:id} , {role:role}) //หา id และ update ข้อมูลตาม id
        res.send(changeRole)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}

exports.changeProvince = async (req, res) => {
    try {
        // console.log(req.body)
        const { id , province } = req.body
        const changeProvince = await Person.findOneAndUpdate({ _id:id} , {province:province}) //หา id และ update ข้อมูลตาม id
        res.send(changeProvince)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}