const { Router } = require('express');
const router = Router();
const {validarQueryParams, getPlaces} = require('../actions/placesActions');


router.get('/',validarQueryParams,getPlaces);


module.exports = router;