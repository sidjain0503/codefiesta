const express = require('express');
const { addnew ,get} = require('../Controllers/Parking_registerController');
const { findParkedCar } = require('../Controllers/Parking_registerexitController');
const router = express.Router()

//entry 

router.get('/get_parking_register',get)
router.post('/get_parking_register', addnew)


//exit

router.get("/model/exit",findParkedCar)


// http://localhost:8080/api/models


// export router
module.exports = router;