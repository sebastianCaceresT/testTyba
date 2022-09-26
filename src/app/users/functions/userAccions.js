const pool = require('../../../config/database');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

//optenemos el usuario dado un id
exports.obtenerUsuario = async (id) => {
    const consulta = "select id,name,email from users where id = ?;";
    const respuesta = await pool.query(consulta, [id]);
    return respuesta[0];
}