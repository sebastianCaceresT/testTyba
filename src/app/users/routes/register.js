const { Router } = require('express');
const { validarQueryParams,findUser,validatePassword, CreateUser } = require('../actions/registerActions');
const {tryLogin} = require('../actions/loginActions');
const router = Router();


router.post('/',validarQueryParams,validatePassword ,findUser, CreateUser,tryLogin);


module.exports = router;