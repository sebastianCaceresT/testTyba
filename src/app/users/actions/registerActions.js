const { findUserByEmail } = require('../functions/loginFunctions');
const { createUser } = require('../functions/registerFunctions');
const { obtenerUsuario } = require('../../users/functions/userAccions');

// validamos que los compos email y password esten entre los query params
exports.validarQueryParams = async (req, res, next) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        res.status(400).json({
            mensaje: 'fiels required'
        });
    }
    else { next(); }
};

// validamos que la contraseña tenga minimo 8 caracteres
exports.validatePassword = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 8) {
        res.status(400).json({
            email: 'Email must be at least 8 characters'
        });
    } else {
        next();
    }
}

// validamos que no tengamos un usuario con el correo enviado en el query params
exports.findUser = async (req, res, next) => {
    const consulta = await findUserByEmail(req.body.email);
    if (consulta.length > 0) {
        res.status(400).json({
            mensaje: 'User already exists'
        });
    }
    else { next(); }
};


// creamos el usuario con los campos enviados
exports.CreateUser = async (req, res, next) => {
    const { email, password, name } = req.body;
    const consulta = await createUser(name, email, password);
    if (consulta.length == 0) {
        res.status(400).json({
            mensaje: 'Error'
        });
    }else{
        next();
    }
};
