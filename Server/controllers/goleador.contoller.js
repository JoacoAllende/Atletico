const goleadoresController = {};

const mysqlConnection = require('../database');

goleadoresController.getGoleadores = async (req, res, next) => {
    const query = `SELECT g.*, e.nombre AS equipo FROM goleadores g INNER JOIN equipo e ON (g.id_equipo = e.id) WHERE g.torneo = ${req.params.to} AND g.anio = ${req.params.a} ORDER BY g.goles DESC;`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

goleadoresController.getEquipos = async (req, res, next) => {
    const { to: torneo, a: anio } = req.params;
    const query = `SELECT id, nombre FROM equipo WHERE torneo = ${torneo} AND anio = ${anio};`
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

goleadoresController.createGoleador = (req, res) => {
    const goleador = req.body;
    const {to, a} = req.params;
    const query = `INSERT INTO goleadores (nombre, apellido, goles, id_equipo, anio, torneo) VALUES ("${goleador.nombre}","${goleador.apellido}",${goleador.goles}, ${goleador.id_equipo},${a}, ${to});`;
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

goleadoresController.updateGoleador = (req, res) => {
    const goleador = req.body;
    const query = `UPDATE goleadores SET nombre = '${goleador.nombre}', apellido = '${goleador.apellido}', goles = ${goleador.goles}, id_equipo = ${goleador.id_equipo} WHERE id = ${goleador.id};`
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

goleadoresController.deleteGoleador = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM goleadores WHERE id = ${id};`
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
 
module.exports = goleadoresController;