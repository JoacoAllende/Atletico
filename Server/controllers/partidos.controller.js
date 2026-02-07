const partidosController = {};

const mysqlConnection = require('../database');

partidosController.getPartidos = async (req, res, next) => {
    const { to: torneo, a: año, d: dia } = req.params;
    const query = `SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON j.id_equipoDos = e2.id WHERE j.torneo = ${torneo} AND j.anio = ${año} AND DATE(j.dia) = '${dia}' ORDER BY j.dia, j.id_partido;`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

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

partidosController.getCanchaInstancias = async (req, res, next) => {
    const query = `SELECT DISTINCT instancia FROM juega WHERE instancia != 'iz' ORDER BY instancia;`;
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
    const orden = partido.orden != null && partido.orden !== '' ? parseInt(partido.orden) : null;
    const query = `INSERT INTO juega (id_equipoUno, id_equipoDos, ${partido.id_grupo !== null ? 'id_grupo,' : ''} ${partido.instancia !== null ? 'instancia,' : ''} anio, torneo, dia, cancha, orden) VALUES (${partido.id_equipoUno},${partido.id_equipoDos},${partido.id_grupo !== null ? `${partido.id_grupo},` : ''}${partido.instancia !== null ? `"${partido.instancia}",` : ''}${a}, ${to},"${partido.dia}","${partido.cancha}",${orden});`;
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
    const orden = partido.orden != null && partido.orden !== '' ? parseInt(partido.orden) : null;
    const query = `UPDATE juega SET id_equipoUno = ${partido.id_equipoUno}, id_equipoDos = ${partido.id_equipoDos}, ${partido.id_grupo !== null ? `id_grupo = ${partido.id_grupo},` : ''} ${partido.instancia !== null ? `instancia = '${partido.instancia}',` : ''} dia = '${partido.dia}', cancha = '${partido.cancha}', orden = ${orden} WHERE id_partido = ${partido.id_partido};`
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