const { Router } = require('express');
const { obtenerUsuario, modificarContraseña } = require('../functions/userAccions');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const usuario = await obtenerUsuario(req.decoded.usuario.id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ "status": "error data token" })
    }
})
module.exports = router;