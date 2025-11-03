const express = require('express')
const router = express.Router()


//@route     localhost/api/org
//@method GET
//@access Public
router.get('/org',(req,res) => {
    res.send('Hello ORG')
})


module.exports = router