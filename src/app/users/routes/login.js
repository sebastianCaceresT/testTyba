const { Router } = require('express');
const { validarQueryParams,findUser,tryLogin } = require('../actions/loginActions')
const router = Router();


router.post('/',validarQueryParams,findUser, tryLogin);


module.exports = router;