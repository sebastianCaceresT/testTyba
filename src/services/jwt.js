const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.generarToken = async (usuario) => {
    const payload = {
        usuario : usuario,
        check: true
      };
      const token = jwt.sign(payload,process.env.LLAVE_JWT, {
        expiresIn: Math.floor(Date.now() / 1000) + (60 * 60 * 15)
      });
      return token;
}