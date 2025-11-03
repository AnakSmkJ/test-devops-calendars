const express = require('express')
const router = express.Router()


//controllers
const { create,list,changeRole, changeProvince } = require('../controllers/person')


//@route     localhost/api/person
//@method POST
//@access Public
router.post('/person',create)

//@route     localhost/api/person
//@method GET
//@access Public
router.get('/person',list)

//@route     localhost/api/person/change-role
//@method POST
//@access Public
router.post('/person/change-role',changeRole)


//@route     localhost/api/person/change-province
//@method POST
//@access Public
router.post('/person/change-province',changeProvince)



module.exports = router