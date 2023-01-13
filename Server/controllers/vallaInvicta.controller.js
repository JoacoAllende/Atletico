const vallaInvictaController = {};

const mysqlConnection = require('../database');

vallaInvictaController.getVallaInvicta = (req, res) => {
    const torneo = req.params.to;
    const año = req.params.a;
    const query = `SELECT nombre, golesEnContraTotal FROM equipo WHERE torneo = ${torneo} AND anio = ${año} ORDER BY golesEnContraTotal;`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

module.exports = vallaInvictaController;