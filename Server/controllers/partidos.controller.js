const partidosController = {};

const mysqlConnection = require('../database');

partidosController.getHorarioPartidos = async (req, res, next) => {
    const query = `SELECT DISTINCT DATE_FORMAT(dia, '%H:%i:%s') AS hora FROM juega ORDER BY hora;`;
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

partidosController.getCanchaPartidos = async (req, res, next) => {
    const query = `SELECT DISTINCT cancha FROM juega WHERE cancha IS NOT NULL ORDER BY cancha;`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

partidosController.createPartido = (req, res) => {
    const partido = req.body;
    const {to, a} = req.params;
    const query = `INSERT INTO juega (id_equipoUno, id_equipoDos, ${partido.id_grupo !== null ? 'id_grupo,' : ''} ${partido.instancia !== null ? 'instancia,' : ''} anio, torneo, dia, cancha) VALUES (${partido.id_equipoUno},${partido.id_equipoDos},${partido.id_grupo !== null ? `${partido.id_grupo},` : ''}${partido.instancia !== null ? `"${partido.instancia}",` : ''}${a}, ${to},"${partido.dia}","${partido.cancha}");`;
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

partidosController.updatePartido = (req, res) => {
    const partido = req.body;
    const query = `UPDATE juega SET id_equipoUno = ${partido.id_equipoUno}, id_equipoDos = ${partido.id_equipoDos}, ${partido.id_grupo !== null ? `id_grupo = ${partido.id_grupo},` : ''} ${partido.instancia !== null ? `instancia = '${partido.instancia}',` : ''} dia = '${partido.dia}', cancha = '${partido.cancha}' WHERE id_partido = ${partido.id_partido};`
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

partidosController.deletePartido = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM juega WHERE id_partido = ${id};`
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

module.exports = partidosController;