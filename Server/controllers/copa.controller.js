const copaController = {};

const mysqlConnection = require('../database');

copaController.getPartidos = (req, res) => {
    const año = req.params.a;
    const torneo = req.params.to;
    const copa = req.params.copa;
    let instancia;
    if (copa == 'plata') {
        instancia = ' AND j.instancia LIKE "%cp"';
    } else if (copa == 'oro') {
        instancia = ' AND LENGTH(j.instancia) = 1';
    }
    const query = `SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.torneo = ${torneo} AND j.anio = ${año} ${instancia} ORDER BY (j.orden IS NULL), j.orden, j.dia, j.id_partido;`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            instancias = armarInstancias(copa);
            rows.forEach(partido => {
                instancias[getIndex(copa, partido.instancia)][1].push(partido);
            });
            res.json(instancias);
        } else {
            console.log(err);
        }
    })

};

armarInstancias = (copa) => {
    let instancias = [];
    if (copa == 'plata') {
        instancias[0] = [];
        instancias[0][0] = ['Cuartos de final'];
        instancias[0][1] = [];
        instancias[1] = [];
        instancias[1][0] = ['Semifinales'];
        instancias[1][1] = [];
        instancias[2] = [];
        instancias[2][0] = ['Final'];
        instancias[2][1] = [];
    } else if (copa == 'oro') {
        instancias[0] = [];
        instancias[0][0] = ['Octavos de final'];
        instancias[0][1] = [];
        instancias[1] = [];
        instancias[1][0] = ['Cuartos de final'];
        instancias[1][1] = [];
        instancias[2] = [];
        instancias[2][0] = ['Semifinales'];
        instancias[2][1] = [];
        instancias[3] = [];
        instancias[3][0] = ['Séptimo puesto'];
        instancias[3][1] = [];
        instancias[4] = [];
        instancias[4][0] = ['Quinto puesto'];
        instancias[4][1] = [];
        instancias[5] = [];
        instancias[5][0] = ['Tercer puesto'];
        instancias[5][1] = [];
        instancias[6] = [];
        instancias[6][0] = ['Final'];
        instancias[6][1] = [];
    }
    return instancias;
}

getIndex = (copa, instancia) => {
    switch (copa) {
        case 'plata':
            switch (instancia) {
                case 'ccp':
                    return 0;
                case 'scp':
                    return 1;
                case 'fcp':
                    return 2;
                default:
                    return -1;
            }
        case 'oro':
            switch (instancia) {
                case 'o':
                    return 0;
                case 'c':
                    return 1; 
                case 's':
                    return 2;
                case '7':
                    return 3;
                case '5':
                    return 4;
                case 't':
                    return 5;
                case 'f':
                    return 6;
            }
    }
}

copaController.editPartido = (req, res) => {
    const partido = req.body;
    const query = `UPDATE juega SET golesLocal = ${partido.golesLocal}, golesVisitante = ${partido.golesVisitante}, penalesLocal = ${partido.penalesLocal}, penalesVisitante = ${partido.penalesVisitante} WHERE id_partido = ${partido.id_partido};`;
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

module.exports = copaController;