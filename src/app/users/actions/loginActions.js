const { findUserByEmail } = require('../functions/loginFunctions');
const { generarToken } = require('../../../services/jwt');
const { validarPassword, obtenerUsuario } = require('../../users/functions/userAccions');

// validamos que los compos email y password esten entre los query params
exports.validarQueryParams = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            mensaje: 'Email and password required'
        });
    }
    else { next(); }
};

// validamos tengamos un usuario con el correo enviado en el query params
exports.findUser = async (req, res, next) => {
    const consulta = await findUserByEmail(req.body.email);
    if (consulta.length == 0) {
        res.status(400).json({
            mensaje: 'Email or password incorrect'
        });
    }
    else { next(); }
};


// realizamos el login validando la contraseña y retornando el token al usurio
exports.tryLogin = async (req, res, next) => {
    const consulta = await findUserByEmail(req.body.email);
    if(await validarPassword(consulta[0].password, req.body.password)) {
        const user = await obtenerUsuario(consulta[0].id);
        const token = await generarToken(user)
        res.status(200).json({
            mensaje: 'login correct',
            token: token
        });
    } else {
        res.status(400).json({
            mensaje: 'Email or password incorrect'
        });
    }
};
