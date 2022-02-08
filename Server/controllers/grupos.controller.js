const gruposController = {};

const mysqlConnection = require('../database');

gruposController.getGrupos = async (req, res, next) => {
    const torneo = req.params.to;
    const año = req.params.a;
    const query = 'SELECT * FROM equipo WHERE torneo = ' + torneo + ' AND anio = ' + año + ' ORDER BY puntos DESC, diferenciaGoles DESC, golesAFavor DESC, golesEnContra, id ASC';
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            let grupos = [];
            grupos[0] = [];
            grupos[1] = [];
            rows.forEach(equipo => {
                if(!grupos[0].hasOwnProperty(equipo.grupo - 1)){
                    grupos[0][equipo.grupo - 1] = [];
                    grupos[0][equipo.grupo - 1][0] = [];
                    grupos[0][equipo.grupo - 1][1] = [];
                }
                grupos[0][equipo.grupo - 1][0].push(equipo);
            });
            const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON j.id_equipoDos = e2.id WHERE j.id_grupo IS NOT NULL AND j.torneo = ' + torneo + ' AND j.anio = ' + año + ' ORDER BY j.id_grupo, j.id_partido';
            mysqlConnection.query(query, (err, rows) => {
                if(!err) {
                    rows.forEach(partido => {
                        grupos[0][partido.id_grupo - 1][1].push(partido);
                    });
                    const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON j.id_equipoDos = e2.id WHERE j.instancia = "iz" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
                    mysqlConnection.query(query, (err, rows) => {
                        if(!err) {
                            grupos[1] = rows;
                            res.json(grupos);
                        } else {
                            console.log(err);
                        }
                    })
                } else {
                    console.log(err);
                }
            })
        } else {
            console.log(err);
        }
    })
};

gruposController.editPartido = (req, res) => {
    const partido = req.body;
    const query = 'UPDATE juega SET golesLocal = ' + partido.golesLocal + ', golesVisitante = ' + partido.golesVisitante + ' WHERE id_partido = ' + partido.id_partido;
    mysqlConnection.query(query, (err) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            console.log(err);
        }
    })
};

module.exports = gruposController;