const equiposController = {};

const mysqlConnection = require('../database');

equiposController.getEquipos = async (req, res, next) => {
    const query = `SELECT DISTINCT nombre FROM equipo order by nombre;`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

equiposController.createEquipo = (req, res) => {
    const equipo = req.body;
    const {to, a} = req.params;
    const query = `INSERT INTO equipo (nombre, grupo, anio, torneo) VALUES ("${equipo.nombre}","${equipo.grupo}",${a}, ${to});`;
    mysqlConnection.query(query, (err) => {
        if(!err) {
            res.json({
                'status' : 'created'
            })
        } else {
            res.json(err.errno);
        }
    })
};

equiposController.updateEquipo = (req, res) => {
    const equipo = req.body;
    const query = `UPDATE equipo SET nombre = '${equipo.nombre}', grupo = '${equipo.grupo}' WHERE id = ${equipo.id_equipo};`
    mysqlConnection.query(query, (err) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            res.json(err.errno);
        }
    })
}

equiposController.deleteEquipo = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM equipo WHERE id = ${id};`
    mysqlConnection.query(query, (err) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            res.json(err.errno);
        }
    })
}

module.exports = equiposController;