const pool = require('../../../config/database');


// consultamos la bd para buscar un usuario por su correo
exports.findUserByEmail = async (email) => {
    const sql = "select id,password,email from users where email = ? limit 1;";
    const consulta = await pool.query(sql, [email]);
    return consulta;
};