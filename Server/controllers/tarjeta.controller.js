const tarjetasController = {};

const mysqlConnection = require('../database');

tarjetasController.getTarjetas = (req, res) => {
    const torneo = req.params.to;
    const año = req.params.a;
    const query = `SELECT id, nombre, cantAmarillas, cantRojas, (SUM(cantAmarillas) + SUM(cantRojas) * 2) AS puntos FROM equipo WHERE anio = ${año} AND torneo = ${torneo} GROUP BY id, nombre, cantAmarillas, cantRojas ORDER BY puntos;`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};
 
tarjetasController.editTarjetas = (req, res) => {
    const equipo = req.body;
    const query = `UPDATE equipo SET cantAmarillas = ${equipo.cantAmarillas}, cantRojas = ${equipo.cantRojas} WHERE id = ${equipo.id};`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            console.log(err);
        }
    })
};
 
module.exports = tarjetasController;