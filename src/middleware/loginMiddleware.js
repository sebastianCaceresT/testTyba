const jwt = require('jsonwebtoken');
const express = require('express');
const rutasProtegidas = express.Router();

require('dotenv').config();


rutasProtegidas.use((req, res, next) => {
  const token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.LLAVE_JWT , (err, decoded) => {
      if (err) {
        return res.status('401').json({ mensaje: 'Token inválida' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status('401').json({
      mensaje: 'Token no proveída.'
    });
  }
});

module.exports = rutasProtegidas;