const copaPlataController = {};

const mysqlConnection = require('../database');

copaPlataController.getPartidos = (req, res) => {
    const año = req.params.a;
    const torneo = req.params.to;
    const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia LIKE "%cp" AND j.torneo = ' + torneo + ' AND j.anio = ' + año + ' ORDER BY j.id_partido';
    let instancias = [];
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            instancias[0] = [];
            instancias[0][0] = ['Cuartos de final'];
            instancias[0][1] = [];
            instancias[1] = [];
            instancias[1][0] = ['Semifinales'];
            instancias[1][1] = [];
            instancias[2] = [];
            instancias[2][0] = ['Final'];
            instancias[2][1] = [];
            rows.forEach(partido => {
                instancias[getIndex(partido.instancia)][1].push(partido);
            });
            res.json(instancias);
        } else {
            console.log(err);
        }
    })

};

getIndex = (instancia) => {
    switch(instancia) {
        case 'ccp':
            return 0;
        case 'scp':
            return 1;
        case 'fcp':
            return 2;
        default:
            return -1;
    }
}

module.exports = copaPlataController;