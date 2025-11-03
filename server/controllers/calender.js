
const Calender = require('../models/calender')

exports.createCalender = async(req,res) =>{
    try{
        console.log(req.body.values)
        const fullData = await new Calender(req.body.values).save()
        res.send('hello create')
    }catch(err) {
        console.log(err)
        res.status(500).end('Server error')
    }
}

exports.listCalender = async(req,res) =>{
    try{
        const fullData = await  Calender.find({}).exec()
        res.send(fullData)
    }catch(err) {
        console.log(err)
        res.status(500).end('Server error')
    }
}

exports.listCurrentMonth = async(req,res) =>{
    try{
        const d = new Date()
        const m = d.getMonth() + 1 // เดือนใน JS เริ่มจาก 0 ทำให้บวก 1 เป็นเดือนปัจจุบัน
        const dataCurrentMonth = await  Calender.find(
            {
                "$expr":{
                    "$eq":[{
                        "$month": "$start"
                    },m]
                }
            }
        ).sort({start: 1}).exec()
        res.send(dataCurrentMonth)
    }catch(err) {
        console.log(err)
        res.status(500).end('Server error')
    }
}