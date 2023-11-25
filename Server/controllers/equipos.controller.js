const equiposController = {};

const mysqlConnection = require('../database');

equiposController.getEquipos = async (req, res, next) => {
    const query = `SELECT DISTINCT nombre FROM equipo order by nombre;`;
    console.log(query)
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

module.exports = equiposController;