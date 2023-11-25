const partidosController = {};

const mysqlConnection = require('../database');

partidosController.getHorarioPartidos = async (req, res, next) => {
    const query = `SELECT DISTINCT DATE_FORMAT(dia, '%H:%i:%s') AS horas FROM juega ORDER BY horas;`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

partidosController.getEquiposGrupo = async (req, res, next) => {
    const { to: torneo, a: anio, g: grupo } = req.params;
    const query = `SELECT id, nombre FROM equipo WHERE torneo = ${torneo} AND anio = ${anio} AND grupo = ${grupo};`
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

// partidosController.createPartido = (req, res) => {
//     const equipo = req.body;
//     const {to, a} = req.params;
//     const query = `INSERT INTO equipo (nombre, grupo, anio, torneo) VALUES ("${equipo.nombre}","${equipo.grupo}",${a}, ${to});`;
//     mysqlConnection.query(query, (err) => {
//         if(!err) {
//             res.json({
//                 'status' : 'created'
//             })
//         } else {
//             res.json(err.errno);
//         }
//     })
// };

// partidosController.updatePartido = (req, res) => {
//     const equipo = req.body;
//     const query = `UPDATE equipo SET nombre = '${equipo.nombre}', grupo = '${equipo.grupo}' WHERE id = ${equipo.id_equipo};`
//     mysqlConnection.query(query, (err) => {
//         if (!err) {
//             res.json({
//                 'status': 'updated'
//             });
//         } else {
//             res.json(err.errno);
//         }
//     })
// }

// partidosController.deletePartido = (req, res) => {
//     const id = req.params.id;
//     const query = `DELETE FROM equipo WHERE id = ${id};`
//     mysqlConnection.query(query, (err) => {
//         if (!err) {
//             res.json({
//                 'status': 'updated'
//             });
//         } else {
//             res.json(err.errno);
//         }
//     })
// }

module.exports = partidosController;