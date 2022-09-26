const pool = require('../../../config/database');
const bcrypt = require('bcryptjs');


//creamos al usuario en la bd
exports.createUser = async (name, email, password) => {
    const sql = `INSERT INTO users (name, email, password) VALUES ( ?, ?, ?);`;
    const consulta = await pool.query(sql, [name,email,bcrypt.hashSync(password)]);
    return consulta;
};